import React from 'react'
import './SingleInvoice.css'
import { HiChevronRight } from 'react-icons/hi';
import { getStatusColors } from './getStatusColors';
import { formattedDate } from './dateformat';
import { NavLink } from 'react-router-dom';
function SingleInvoice({invoice}) {
      const date = formattedDate(invoice.paymentDue)
      let color = [];
      color = getStatusColors(invoice.status)
  return (
    <NavLink to={`/${invoice.id}`}>
    <div className='singleinvoice'>
        <p className='id'><span>#</span>{invoice.id}</p>
        <p className='due'>Due {date}</p>
        <p className='clientname'>{invoice.clientName}</p>
        <h2 className='total'>£ {invoice.total.toFixed(2)}</h2>
        <div style={{ backgroundColor: `rgba(${color},0.06)`  }} className='status-container'>
                    <hr style={{ backgroundColor: `rgb(${color})` }}/>
                    <h3 style={{ color: `rgb(${color})` }} className= 'status'>{invoice.status}</h3>
        </div>
        <span className='pointer'><HiChevronRight size={14} /></span>
    </div>
    </NavLink>
  )
}

export default SingleInvoice