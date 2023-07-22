import React from 'react'
import './viewinvoice.css'
function Itemlists({invoice}) {
  return (
    <div className='items-container'>
        <div className="items">
            <div className="item-name">
                <p className='label name-label'>Item Name</p>
                {invoice?.items.map((item, index)=> <p className='name' key={index}>{item.name}</p>)}
             </div>
             <div className="quantity">
                <p className='label'>QTY</p>
                {invoice?.items.map((item, index) => <p className='qty' key={index}>{item.quantity}</p>)}
             </div>
             <div className="price">
                <p className='label'>Price</p>
                {invoice?.items.map((item, index) => <p className='price' key={index}>£{Number(item.price).toFixed(2)}</p>)}
             </div>
             <div className="total">
                <p className='label'>Total</p>
                {invoice?.items.map((item, index) => <p className='item-total' key={index}>£{Number(item.total).toFixed(2)}</p>)}
             </div>
        </div>
        <div className="amount-due">
            <p>Amount Due</p>
            <h1>£{invoice?.total}</h1>
        </div>
    </div>
  )
}

export default Itemlists