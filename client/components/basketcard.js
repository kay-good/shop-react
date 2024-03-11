import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, addItem } from '../redux/reducers/basket'


const Basketcard = (props) => {
  const currency = useSelector(s => s.list.currency.name)
  const currencyValue = useSelector((s) => s.list.currency.value)


  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full p-10 gap-8">
        <div className="product__image h-32 md:h-48 w-48 flex items-center justify-center">
          <img alt="product n 1" src={props.item.image} className="product__image max-h-full" />
        </div>
        <div className="flex items-center justify-around flex-grow w-full">
          <div className="product__title md:text-center flex-grow md:flex-grow-0 w-3/4">{props.item.title}</div>
          <div className="product__price text-right md:text-center w-1/4">{currencyValue === 1 ? props.item.price : (props.item.price * currencyValue).toFixed(2)} {currency}</div>
        </div>
        <div className="flex items-center justify-end gap-8">
          <div className="w-24 flex flex-col items-center">
            <div className="product__amount">quantity:</div>
            <div className="product__amount py-2">{props.item.count}</div>
            <div className="flex w-full border border-black divide-x divide-black">
              <button type="button" className="product__price px-4 py-2 w-full" onClick={() => dispatch(deleteItem(props.item.id))}>-</button>
              <button type="button" className="product__price px-4 py-2 w-full" onClick={() => dispatch(addItem(props.item.id))}>+</button>
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
    </div>
  )
}

Basketcard.propTypes = {}

export default React.memo(Basketcard)
