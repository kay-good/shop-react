import React from 'react'
import { Link } from 'react-router-dom'
//  import { useSelector, useDispatch } from 'react-redux'
//  import { getCurrencyCAD, getCurrencyEUR, getCurrencyUSD } from '../redux/reducers/currency'

import { history } from '../redux'

const Header = () => {
  //  const [toggled, toggle] = useState(false)
  //  const currencyName = useSelector((s) => s.currency.name)
  //  const dispatch = useDispatch()


  return (
      <nav  className="flex items-center justufy-between bg-blue-800 font-bold text-white h-12 w-screen">
        <div>
          <button type="button" className="px-4 py-2">
            usd
          </button>
          <button type="button" className="px-4 py-2">
            eur
          </button>
          <button type="button" className="px-4 py-2">
            cad
          </button>
        </div>
        <div>
          <button type="button" id="sort-price" className="px-4 py-2">
            sort by price
          </button>
          <button type="button" id="sort-name" className="px-4 py-2">
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
