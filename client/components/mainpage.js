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
      <div className="flex flex-wrap justify-center container mx-auto pt-20 md:pt-32 md:px-10 md:py-32">
        
        {list.map((item) => {
          return <div key={item.id} className="card w-1/2 md:w-1/3 xl:w-1/4">
            <Itemcard item={item}/>
          </div>
        })}
      </div>
      
      

      
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy