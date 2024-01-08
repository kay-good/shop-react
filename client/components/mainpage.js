import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Head from './head'
import Header from './header'
import Itemcard from './itemcard'
import { getList } from '../redux/reducers/list'


const Dummy = () => {
  const dispatch = useDispatch()
  const list = useSelector(s => s.list.list)
  
  React.useEffect(() => {
    dispatch(getList())
  }, []

  )
  
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="flex flex-wrap justify-center container mx-auto px-10 py-10">
        
        {list.map((item) => {
          return <div key={item.id} className="card w-1/4">
            <Itemcard item={item}/>
          </div>
        })}
      </div>
      
      

      
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy