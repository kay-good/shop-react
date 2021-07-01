import axios from 'axios'

const UPDATE_LIST = 'testapp/list/UPDATE_LIST'
const UPDATE_CURRENCY_CAD = 'testapp/currency/UPDATE_CURRENCY_CAD'
const UPDATE_CURRENCY_EUR = 'testapp/currency/UPDATE_CURRENCY_EUR'
const UPDATE_CURRENCY_USD = 'testapp/currency/UPDATE_CURRENCY_USD'

const initialState = {
  list: [],
  currency: {
    name: 'EUR',
    value: 1
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST: {
      return { ...state, list: action.list }
    }
    case UPDATE_CURRENCY_CAD: {
      return {
        ...state, currency: {
          name: 'CAD',
          value: action.list.CAD
        }
      }
    }
    case UPDATE_CURRENCY_EUR: {
      return {
        ...state, currency: {
          name: 'EUR',
          value: 1
        }
      }
    }
    case UPDATE_CURRENCY_USD: {
      return {
        ...state, currency: {
          name: 'USD',
          value: action.list.USD
        }
      }
    }
    default:
      return state
  }

}

export function getList() {
  return (dispatch) => {
    axios.get('/api/v1/data/').then(( { data } ) => (dispatch({ type: UPDATE_LIST, list: data})))
    .catch(() => dispatch({ type: UPDATE_LIST, list: []}))
  }
}

export function getCurrencyCAD() {
  return (dispatch) => {
    axios.get('/api/v1/currency/').then(({data}) => (dispatch({ type: UPDATE_CURRENCY_CAD, list: data})))
  }
}

export function getCurrencyEUR() {
  return { type: UPDATE_CURRENCY_EUR }
}

export function getCurrencyUSD() {
  return (dispatch) => {
    axios.get('/api/v1/currency/').then(({data}) => (dispatch({ type: UPDATE_CURRENCY_USD, list: data})))
  }
}

export function getSorted(sort) {
  return (dispatch) => {
    axios.get(`/api/v1/data/${sort}`).then(( { data } ) => (dispatch({ type: UPDATE_LIST, list: data})))
    .catch(() => dispatch({ type: UPDATE_LIST, list: []}))
  }
}