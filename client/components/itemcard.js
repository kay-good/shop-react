import React from 'react'


const Itemcard = () => {
  return (
    <div className="card">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <img alt="product n 1" src="#" className="card__image" />
          <div className="card__price">price</div>
          <div className="currency">currency</div>
          <div className="card__title">name</div>
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
