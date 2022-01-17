import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCurrencyCAD, getCurrencyEUR, getCurrencyUSD, getSorted } from '../redux/reducers/list'

import { history } from '../redux'

const Header = () => {
  const [prevSorting, setSorting] = React.useState(0)
  const [titleToMax, setTitleToMax] = React.useState(true)
  const [priceToMax, setPriceToMax] = React.useState(true)
  
  const dispatch = useDispatch()


  function doSorting(sortType) {
    // if ((sortType === 'title')) {
    //   if(!(prevSorting)) {
    //     console.log('name')
    //     dispatch(getSorted( titleToMax ?'a-z' : 'z-a' ))
    //   }
      
    // }
    if ( !prevSorting && sortType === 'title') {
      setTitleToMax(!titleToMax)
      dispatch(getSorted( titleToMax ?'a-z' : 'z-a' ))
      setSorting('title')
      
    }
    if ( !prevSorting && sortType === 'price') {
      setPriceToMax(!priceToMax)
      dispatch(getSorted( priceToMax ? '1-9' : '9-1' ))
      setSorting('price')
    }
    if ( prevSorting === 'title' && sortType === 'title') {
      setTitleToMax(!titleToMax)
      dispatch(getSorted( titleToMax ?'a-z' : 'z-a' ))
      setSorting('title')
      // console.log('name', prevSorting, sortType)
    }
    if ( prevSorting === 'title' && sortType === 'price') {
      setPriceToMax(!priceToMax)
      setTitleToMax(!titleToMax)
      dispatch(getSorted( priceToMax ? '1-9' : '9-1' ))
      setSorting('price')
    }
    if ( prevSorting  === 'price' && sortType === 'title') {
      setPriceToMax(!priceToMax)
      setTitleToMax(!titleToMax)
      dispatch(getSorted( titleToMax ?'a-z' : 'z-a' ))
      setSorting('title')
    }
    if ( prevSorting === 'price' && sortType === 'price') {
      setPriceToMax(!priceToMax)
      dispatch(getSorted( priceToMax ? '1-9' : '9-1' ))
      setSorting('price')
    }
    
  }

  return (
      <nav  className="flex items-center justufy-between bg-blue-800 font-bold text-white h-12 w-screen">
        <div>
          <button type="button" className="px-4 py-2" onClick={() => dispatch(getCurrencyUSD())}>
            usd
          </button>
          <button type="button" className="px-4 py-2" onClick={() => dispatch(getCurrencyEUR())}>
            eur
          </button>
          <button type="button" className="px-4 py-2" onClick={() => dispatch(getCurrencyCAD())}>
            cad
          </button>
        </div>
        <div>
          <button type="button" id="sort-price" className="px-4 py-2" onClick={() => doSorting('price')}>
            sort by price
          </button>
          <button type="button" id="sort-name" className="px-4 py-2" onClick={() => doSorting('title')}>
            sort by name
          </button>
        </div>
        <div>
          <Link to="/">
            <div id="brand-name" className="px-4 py-2">
              bandit shop
            </div>
          </Link>
        </div>
        <div>
          <button type="button" id="order-count" onClick={() => history.push('/basket')}>
            basket
          </button>
          <div>
            0
          </div>
        </div>
      </nav>
  )
}

export default React.memo(Header)
