import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../redux/reducers/basket'


const Basketcard = (props) => {
  const currency = useSelector(s => s.list.currency.name)
  const currencyValue = useSelector((s) => s.list.currency.value)


  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex justify-between items-center w-full p-10 gap-4">
        <div className="product__image h-48 w-48 flex items-center justify-center">
          <img alt="product n 1" src={props.item.image} className="product__image" />
        </div>
        <div className="product__title w-1/4">{props.item.title}</div>
        <div className="product__price">{currencyValue === 1 ? props.item.price : (props.item.price * currencyValue).toFixed(2)} {currency}</div>
        <div className="w-24 flex flex-col items-center">
          <div className="product__amount">quantity:</div>
          <div className="product__amount py-2">{props.item.count}</div>
          <div className="flex w-full border border-black divide-x divide-black">
            <button type="button" className="product__price px-4 py-2 w-full" >-</button>
            <button type="button" className="product__price px-4 py-2 w-full">+</button>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <div className="product__amount">subtotal:</div>
          <div className="product__total_price py-2 font-bold">{currencyValue === 1 ? props.item.count * props.item.price : (props.item.count * props.item.price * currencyValue).toFixed(2)} {currency}</div>
          <button
            type="button" className="product__remove px-4 py-2 border border-black" onClick={() => dispatch(deleteItem(props.item.id))}>
            delete
          </button>
        </div>
      </div>
    </div>
  )
}

Basketcard.propTypes = {}

export default React.memo(Basketcard)
