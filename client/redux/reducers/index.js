import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import list from './list'
import currency from './currency'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    list,
    currency
  })

export default createRootReducer
