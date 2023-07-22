import React from 'react'
import { getStatusColors } from '../SingleInvoice/getStatusColors'
import './viewinvoice.css'
import { useFormState } from '../../States/formstate';
import { useModalState } from '../../States/formstate';
import { useMutation } from '@apollo/client';
import { UPDATE_STATUS } from '../../mutation/UpdateInvoiceStatus';
function Invoicehead({invoice}) {
    const modalState = useModalState()
    let color = [];
    color = getStatusColors(invoice?.status)
    const formstate = useFormState()
    const [updateInvoiceStatus, { error }] = useMutation(UPDATE_STATUS)
    const showform = ()=> {
      formstate.open()
      document.body.style.overflow = "hidden";
       }
      const onUpdate = () =>{
        updateInvoiceStatus({
          variables: {
              id: invoice?.id,
              input: {status: "Paid"}
          }
        })
        window.location.reload()
        if (error) {
          console.log(error);
        }
      }
    
  return (
    <div className='invoice-head'>
        <div className='status'>
            <span>Status</span>
            <div style={{ backgroundColor: `rgba(${color},0.06)`  }} className='status-container'>
                    <hr style={{ backgroundColor: `rgb(${color})` }}/>
                    <h3 style={{ color: `rgb(${color})` }} className= 'status'>{invoice?.status}</h3>
            </div>
        </div>
        <div className="buttons">
            <button className={invoice?.status==="Paid" ? "edit-btn disabled-btn" : "edit-btn"} disabled={invoice?.status==="Paid"} onClick={showform}>Edit</button>
            <button className='delete-btn' onClick={ () => modalState.open()}>Delete</button>
            <button className={invoice?.status==="Draft" ? "paid-btn disabled-btn" : "paid-btn"} onClick={onUpdate} disabled={invoice?.status==="Draft"}>Mark as Paid</button>
        </div>
    </div>
  )
}

export default Invoicehead