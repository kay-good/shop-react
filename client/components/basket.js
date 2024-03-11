import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './header'
import Basketcard from './basketcard'

const Dummy = () => {
  const { list } = useSelector(s => s.basket)
  const currency = useSelector(s => s.list.currency.name)

  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className=" container mx-auto pt-20 md:pt-32 md:px-10 md:py-32">
        {
          list[0].count ?
            <div className="flex items-center flex-col border border-black divide-y divide-black">
              {list.map((item) => {
                return <div className="flex w-full" key={item.id}>
                  <Basketcard item={item} />
                </div>
              })}
              <div className=" w-full h-full p-10 text-right">total: <span className="font-bold pl-2">{
                list.reduce((acc, rec) => {
                  return acc + (rec.price * rec.count)
                }, 0)
              } {currency}</span></div>
            </div>
            :
            <div className="bg-gray-100 border border-gray-300 w-full p-10">Your cart is currently empty.</div>
        }
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy