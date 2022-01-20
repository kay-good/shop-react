import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './header'
import Basketcard from './basketcard'

const Dummy = () => {
  const list = useSelector(s => s.basket.list)

  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="">
        <div className="bg-indigo-100 w-4/6 inline-block">
          <div className="flex items-center bg-pink-200 text-white font-bold rounded-lg border shadow-lg p-2 m-4">
            {list.map((item) => {
              return <div key={item.id}>
                <Basketcard item={item}/>
              </div>
            })}
              <div>total {
                list.reduce((acc, rec) => {
                  return acc + (rec.price * rec.count)
                }, 0)
                }</div>
          </div>
        </div>

       
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy