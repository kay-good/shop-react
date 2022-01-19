//  import list from "./list"

const ADD_ITEM = 'testapp/list/ADD_ITEM'
const DELETE_ITEM = 'testapp/list/DELETE_ITEM'

const initialState = {
    sorting: '',
    list: ['']
  }

function getBusketSort(sort, array) {
  return array.sort((a, b) => {
    switch (sort) {
      case 'a-z': {
        return a.title.localeCompare(b.title)
      }
      case 'z-a': {
        return b.title.localeCompare(a.title)
      }
      case '1-9': {
        return a.price - b.price
      }
      case '9-1': {
        return b.price - a.price
      }
      default:
        return b.price - a.price
    }
  })
} 

  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM: {
        //   const item = action.item
        let result = state.list.reduce((acc, rec, index) => {
          if (rec.id === action.item.id) {
            return [...acc, {...rec, "count": rec.count + 1}]
          }
          if (index === state.list.length - 1 && !(acc.find(it => it.id === action.item.id))) {
            if (!rec.id) {
              return  [{...action.item, "count": 1}]
            }
            return [...acc, rec, {...action.item, "count": 1}]
          }
         return [...acc, rec]
        }, []
        )
        if (state.sorting) {
          result = getBusketSort(state.sorting, result)
        }
        return { ...state, list: result, sorting: action.sorting }
      }

      case DELETE_ITEM: {
        const item = {...action.item}
        const result = state.list.reduce((acc, rec) => {
    
          if (rec.id === item.id) {
            if (rec.count <= 1) { return [...acc] }
            
            return [...acc, {...rec, "count": rec.count - 1}]
          }
          
         return [...acc, rec]
        }, []) //  решить позжн
        return { ...state, list: result, sorting: action.sorting }
      }
     
      default:
        return state
    }
  
  }

  export function addItem(id) {
    return (dispatch, getState) => {
      const store = getState()
      const { list , sorting } = store.list
      
      const data = list.filter( it => it.id === id )[0]
      
      dispatch({ type: ADD_ITEM, item: data, sorting})
    }
  }

  export function deleteItem(id) {
    return (dispatch) => {
      
      dispatch({ type: DELETE_ITEM, item: id})
    }
  }