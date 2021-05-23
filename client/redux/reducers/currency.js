import axios from 'axios'

const UPDATE_CURRENCY_CAD = 'testapp/currency/UPDATE_CURRENCY_CAD'
const UPDATE_CURRENCY_EUR = 'testapp/currency/UPDATE_CURRENCY_EUR'
const UPDATE_CURRENCY_USD = 'testapp/currency/UPDATE_CURRENCY_USD'

const initialState = {
    name: 'USD',
    value: 1

}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENCY_CAD: {
        return {
          ...state, name: 'CAD', value: action.list.rates.CAD
        }
    }
    case UPDATE_CURRENCY_EUR: {
      return {
        ...state, name: 'EUR', value: action.list.rates.EUR
      }
    }
    case UPDATE_CURRENCY_USD: {
      return {
        ...state, name: 'USD', value: 1
      }
    }
    default:
        return state
  }
}

export function getCurrencyCAD() {
    return (dispatch) => {
      axios.get('/api/v1/currency/').then(({data}) => (dispatch({ type: UPDATE_CURRENCY_CAD, list: data})))
    }
}

export function getCurrencyEUR() {
  return (dispatch) => {
    axios.get('/api/v1/currency/').then(({data}) => (dispatch({ type: UPDATE_CURRENCY_EUR, list: data})))
  }
}

export function getCurrencyUSD() {
  return { type: UPDATE_CURRENCY_USD }
}