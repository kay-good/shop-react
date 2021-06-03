import React from 'react'
import { useSelector } from 'react-redux'


const Itemcard = (props) => {
  const currency = useSelector(s => s.list.currency.name)

  return (
    <div className="card">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <img alt="product n 1" src="props.item.image" className="card__image" />
          <div className="card__price">{props.item.price}</div>
          <div className="currency">{currency}</div>
          <div className="card__title">{props.item.title}</div>
          <div className="card__product-amount">amount</div>
          <button 
            type="button">
                add
          </button>
        </div>
      </div>
    </div>
  )
}

Itemcard.propTypes = {}

export default React.memo(Itemcard)
