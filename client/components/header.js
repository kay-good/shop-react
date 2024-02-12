import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCurrencyCAD, getCurrencyEUR, getCurrencyUSD, getSorted } from '../redux/reducers/list'

import { history } from '../redux'

const Header = () => {
  const [prevSorting, setSorting] = React.useState(0)
  const [titleToMax, setTitleToMax] = React.useState(true)
  const [priceToMax, setPriceToMax] = React.useState(true)
  const [isOpen, setOpen] = React.useState(false)

  const dispatch = useDispatch()


  function doSorting(sortType) {
    // if ((sortType === 'title')) {
    //   if(!(prevSorting)) {
    //     console.log('name')
    //     dispatch(getSorted( titleToMax ?'a-z' : 'z-a' ))
    //   }

    // }
    if (!prevSorting && sortType === 'title') {
      setTitleToMax(!titleToMax)
      dispatch(getSorted(titleToMax ? 'a-z' : 'z-a'))
      setSorting('title')

    }
    if (!prevSorting && sortType === 'price') {
      setPriceToMax(!priceToMax)
      dispatch(getSorted(priceToMax ? '1-9' : '9-1'))
      setSorting('price')
    }
    if (prevSorting === 'title' && sortType === 'title') {
      setTitleToMax(!titleToMax)
      dispatch(getSorted(titleToMax ? 'a-z' : 'z-a'))
      setSorting('title')
      // console.log('name', prevSorting, sortType)
    }
    if (prevSorting === 'title' && sortType === 'price') {
      setPriceToMax(!priceToMax)
      setTitleToMax(!titleToMax)
      dispatch(getSorted(priceToMax ? '1-9' : '9-1'))
      setSorting('price')
    }
    if (prevSorting === 'price' && sortType === 'title') {
      setPriceToMax(!priceToMax)
      setTitleToMax(!titleToMax)
      dispatch(getSorted(titleToMax ? 'a-z' : 'z-a'))
      setSorting('title')
    }
    if (prevSorting === 'price' && sortType === 'price') {
      setPriceToMax(!priceToMax)
      dispatch(getSorted(priceToMax ? '1-9' : '9-1'))
      setSorting('price')
    }

  }

  return (
    <nav className="flex items-center justufy-between bg-black font-bold text-white h-20 border-b-2 border-black fixed w-full">
      <Link to="/" className="px-4 py-2 bg-white h-full text-black uppercase flex items-center">
        <div>vans-shop</div>
      </Link>
      <div className={`pb-4 md:pb-0 md:pl-10 absolute md:relative flex flex-col md:flex-row bg-black bottom-0 right-0 transform md:transform-none translate-y-full ${isOpen ? "translate-x-none" : "translate-x-full" }`}>
        <button type="button" id="sort-price" className="px-10 md:px-4 py-2 hover:text-yellow-400 duration-500" onClick={() => doSorting('price')}>
          by price
        </button>
        <button type="button" id="sort-name" className="px-10 md:px-4 py-2 hover:text-yellow-400 duration-500" onClick={() => doSorting('title')}>
          by name
        </button>
        <button type="button" className="px-10 md:px-4 py-2 hover:text-yellow-400 duration-500" onClick={() => dispatch(getCurrencyUSD())}>
          usd
        </button>
        <button type="button" className="px-10 md:px-4 py-2 hover:text-yellow-400 duration-500" onClick={() => dispatch(getCurrencyEUR())}>
          eur
        </button>
        <button type="button" className="px-10 md:px-4 py-2 hover:text-yellow-400 duration-500" onClick={() => dispatch(getCurrencyCAD())}>
          cad
        </button>
      </div>
      <div className="ml-auto mr-0 flex items-center pr-10">
        <div className="px-2 py-1 bg-white text-black rounded-md">
          0
        </div>
        <button type="button" id="order-count" className="px-4 py-2 hover:text-yellow-400" onClick={() => history.push('/basket')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </button>
        <button type="button" className="md:hidden hover:text-yellow-400" onClick={() => setOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default React.memo(Header)
