import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Head from './head'
import Header from './header'
import { getList } from '../redux/reducers/list'


const Dummy = () => {
  const list = useSelector(s => s.list.list)
  const dispatch = useDispatch()
  

    React.useEffect(() => {  
      setTimeout (() => {
        dispatch(getList())
      }, 10000)
     
    }, [])    
     
  
  return (
    <div>
      <Head title="Hello" />
      <Header />
      
      

      <div className="relative">
        <div className="bg-indigo-200 text-white font-bold rounded-lg border shadow-lg p-2 w-2/6 m-2 inline-block">
          <div className="block origin-top bg-gray-100 text-black h-8 place-content-center">44</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center h-24 w-24">picture</div>
            <div className="px-3 py-2 rounded-md ">+=</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">1</div>
            <div className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">1</div>
            <div className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">1</div>
          </div>
        </div>
        <div>{list[1].title}</div>
        
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy