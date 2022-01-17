import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../redux/reducers/basket'


const Itemcard = (props) => {
  const currency = useSelector(s => s.list.currency.name)
  const currencyValue = useSelector((s) => s.list.currency.value)

  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <img alt="product n 1" src={props.item.image} className="card__image" />
          <div className="card__price">{currencyValue === 1 ? props.item.price : (props.item.price * currencyValue).toFixed(2)}</div>
          <div className="currency">{currency}</div>
          <div className="card__title">{props.item.title}</div>
          <div className="card__product-amount">amount</div>
          <button 
            type="button" className="px-4 py-2" onClick={() => dispatch(addItem(props.item.id))}>
                add
          </button>
        </div>
      </div>
    </div>
  )
}

Itemcard.propTypes = {}

export default React.memo(Itemcard)
