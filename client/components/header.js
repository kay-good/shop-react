import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//  import { getCurrencyCAD, getCurrencyEUR, getCurrencyUSD } from '../redux/reducers/currency'

const Header = () => {
  //  const [toggled, toggle] = useState(false)
  //  const currencyName = useSelector((s) => s.currency.name)
  //  const dispatch = useDispatch()


  return (
      <nav className="flex items-center justufy-center bg-blue-800 font-bold text-white h-12 w-screen fixed">
        <Link to="/">
          bandit shop
        </Link>
      </nav>
  )
}

export default React.memo(Header)
