import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCurrencyCAD, getCurrencyEUR, getCurrencyUSD } from '../redux/reducers/list'

import { history } from '../redux'

const Header = () => {
  //  const [toggled, toggle] = useState(false)
  //  const currencyValue = useSelector((s) => s.list.currency.value)
  const dispatch = useDispatch()


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
