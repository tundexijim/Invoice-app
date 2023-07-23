import React from 'react';
import Header from '../components/Header/Header';
import './css/invoicelist.css'
import { useFilterState } from '../States/homestate';
import { useFormState } from '../States/formstate';
import { useInvoicelist } from '../query/useInvoicelist';
import SingleInvoice from '../components/SingleInvoice/SingleInvoice';
import InvoiceForm from '../components/Form/Form'
function Invoicelist() {
  const formState = useFormState().get()
  const filterState = useFilterState();
  const filter = {
    status: filterState.get(),
  };

  const {data, error, loading} = useInvoicelist(filter);
    console.log(data, error, loading)
   
  return (
    <div>
    <div className='invoicelist'>
       <Header length = {data?.invoices.length}/>
       <div className="invoices">
       {data?.invoices && data?.invoices.map(invoice => <SingleInvoice key={invoice.id} invoice={invoice}/>)}
       </div>
     </div> 
      {formState && <InvoiceForm formType = "create"/>}
    </div>
  )
}

export default Invoicelist