import axios from 'axios'

const UPDATE_LIST = 'testapp/list/UPDATE_LIST'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST: {
      return { ...state, list: action.list }
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