import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'

import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'
//  import { readFile } from 'fs'

const Root = () => ''

try {
  // eslint-disable-next-line import/no-unresolved
  // ;(async () => {
  //   const items = await import('../dist/assets/js/root.bundle')
  //   console.log(JSON.stringify(items))

  //   Root = (props) => <items.Root {...props} />
  //   console.log(JSON.stringify(items.Root))
  // })()
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []

const port = process.env.PORT || 8090
const server = express()



const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))


server.get('/api/v1/data/', (req, res) => {
  axios('https://raw.githubusercontent.com/ovasylenko/skillcrcuial-ecommerce-test-data/master/data.json')
  .then((response) => response.data) 
  .then(text => {  
    const filteredText = text.filter((it, index) => index < 30)
    return res.json(filteredText)
  }).catch(() => {console.log('wat2')}) 

} )

server.get('/api/v1/data/:sorting', (req, res) => {
  const { sorting } = req.params
  axios('https://raw.githubusercontent.com/ovasylenko/skillcrcuial-ecommerce-test-data/master/data.json')
  .then((response) => response.data) 
  .then(text => {  
    const sortedText = text.sort((a, b) => {
      switch (sorting) {
        case 'a-z': {
          return a.title.localeCompare(b.title)
        }
        case 'z-a': {
          return b.title.localeCompare(a.title)
        }
        case '1-9': {
          return a.price - b.price
        }
        case '9-1': {
          return b.price - a.price
        }
        default:
          return b.price - a.price
      }
    })
    const filteredText = sortedText.filter((it, index) => index < 30)
    return res.json(filteredText)
  }).catch(() => {console.log('wat3')}) 
})

server.get('/api/v1/currency/', (req, res) => {
  axios('http://api.exchangeratesapi.io/v1/latest?access_key=ef52081f69df9c164ad181d597532612')
  .then((response) => response.data.rates) 
  .then(text => {  
    return res.json(text)
  }).catch(() => {console.log('wat')}) 
  
} )

// server.post('/api/v1/userslog', (req, res) => {
//   readFile(`${__dirname}/logs.json`, { encoding: "utf8" })
//   .then(text => {
//     const jsonText = JSON.parse(text)

//   })
//   .catch(() => {
//     const text = [{user: 0, action: req.body.action, direction: req.body.direction, time: req.body.time}]
//     writeFile(`${__dirname}/logs.json`, JSON.stringify(text), { encoding: "utf8" });
  
//   })
// })

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
