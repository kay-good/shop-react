import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import list from './list'
import basket from './basket'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    list,
    basket,
  })

export default createRootReducer
