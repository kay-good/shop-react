import React from 'react'

import Head from './head'
import Header from './header'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="">
        <div className="bg-indigo-100 w-4/6 inline-block">
          <div className="flex items-center bg-pink-200 text-white font-bold rounded-lg border shadow-lg p-2 m-4">
            <div className="flex-initial">
              <div className="flex items-center h-24 w-24 m-4">picture</div>
            </div>
            <div className="flex justify-between flex-col h-24 w-3/6 ">
              
                <div className="flex items-center justify-center">name</div>
                <div className="flex items-center justify-between">
                  <div className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">dollars</div>
                  <div className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">items</div>
                </div>
              
            </div>
            <div className="flex items-start">
              <div className="text-bold right-0">delete 1</div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-8 inline-block">
          This is dummy component
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy