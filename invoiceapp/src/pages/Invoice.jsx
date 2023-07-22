import React from 'react';
import { useInvoice } from '../query/useInvoice';
import Invoicehead from '../components/ViewInvoice/Invoicehead';
import Invoicebottom from '../components/ViewInvoice/Invoicebottom';
import InvoiceForm from '../components/Form/Form';
import { useFormState } from '../States/formstate';
import { HiChevronLeft } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './css/invoice.css'
import Deletepopup from '../components/ViewInvoice/Deletepopup';
function Invoice() {
  const formState = useFormState().get()
  const {id} = useParams()
  const { data} = useInvoice(id)
  return (
    <div>
    <div className='invoice-container'>
      <NavLink to='/'><span className='go-back'><HiChevronLeft /> Go back</span></NavLink>
      <Invoicehead invoice ={data?.invoice} />
      <Invoicebottom invoice ={data?.invoice} />
    </div>
      {formState && <InvoiceForm formType = "edit" invoice={data?.invoice} />}
      <Deletepopup id={data?.invoice.id} />
      </div>
  )
}

export default Invoice