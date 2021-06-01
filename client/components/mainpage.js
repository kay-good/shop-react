import React from 'react'
//  import { useSelector, useDispatch } from 'react-redux'

import Head from './head'
import Header from './header'
import Itemcard from './itemcard'
//  import { getList } from '../redux/reducers/list'


const Dummy = () => {
  
  
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="flex items-center justify-center h-screen">
        <Itemcard />
      </div>
      
      

      
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy