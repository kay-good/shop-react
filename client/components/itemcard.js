import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../redux/reducers/basket'


const Itemcard = (props) => {
  const currency = useSelector(s => s.list.currency.name)
  const currencyValue = useSelector((s) => s.list.currency.value)

  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-start justify-center h-full w-full border-2 border-transparent hover:border-black duration-100 text-black font-bold p-10">
      <img alt="product" src={props.item.image} className="card__image h-64 object-contain mx-auto" />
      <div className="card__title truncate max-w-full mt-4">{props.item.title}</div>
      <div className="card__title truncate max-w-full mt-2 font-normal">{props.item.title}</div>
      <div className="flex mt-4">
        <div className="card__price pr-2">{currencyValue === 1 ? props.item.price : (props.item.price * currencyValue).toFixed(2)}</div>
        <div className="currency pr-2">{currency}</div>
        <div className="card__product-amount">X 1</div>
      </div>
      <button
        type="button" className="py-2" onClick={() => dispatch(addItem(props.item.id))}>
        add
      </button>
    </div>
  )
}

Itemcard.propTypes = {}

export default React.memo(Itemcard)
