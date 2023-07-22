import React from 'react'
import { formattedDate } from '../SingleInvoice/dateformat'
import './viewinvoice.css'
import Itemlists from './Itemlists';
function Invoicebottom({invoice}) {
    const create = formattedDate(invoice?.createdAt);
    const duedate = formattedDate(invoice?.paymentDue)
  return (
    <div className='invoice-bottom'>
        <div className="info">
            <div className="sender-id">
                <div className="desc-id">
                    <p className ='id'><span>#</span>{invoice?.id}</p>
                    <p className='desc'>{invoice?.description}</p>
                </div>
                 <div className="sender">
                    <p>{invoice?.senderAddress.street}</p>
                    <p>{invoice?.senderAddress.city}</p>
                    <p>{invoice?.senderAddress.postCode}</p>
                    <p>{invoice?.senderAddress.country}</p>
                </div>
            </div>
            <div className="client-date">
                <div className="date">
                    <p className='invdate'>Invoice Date</p>
                    <p className='create'>{create}</p>
                    <p className='pay-due'>Payment Due</p>
                    <p className='due-date'>{duedate}</p>
                </div>
                <div className="client">
                    <p className='bill-to'>Bill To</p>
                    <p className='clientname'>{invoice?.clientName}</p>
                    <div className='client-address address'>
                    <p className='clientstreet'>{invoice?.clientAddress.street}</p>
                    <p className='clientcity'>{invoice?.clientAddress.city}</p>
                    <p className='clientpost'>{invoice?.clientAddress.postCode}</p>
                    <p className='clientcountry'>{invoice?.clientAddress.country}</p>
                    </div>
                </div>
                <div className="email">
                    <p className='sent-to'>Sent to</p>
                    <p className='client-email'>{invoice?.clientEmail}</p>
                </div>
            </div>
        </div>
        <Itemlists invoice = {invoice}/>
    </div>
  )
}

export default Invoicebottom