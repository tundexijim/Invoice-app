import React, {useRef} from 'react'
import { Formik, Form, FieldArray } from 'formik';
import BillFrom from './BillFrom';
import BillTo from './BillTo'
import ProjectDetails from './ProjectDetails';
import ItemList from './ItemList';
import ButtonsDiv from './ButtonsDiv'
import { initialValues } from '../Utils/Formfields';
import { validationSchema } from '../Utils/FormValidation';
import { useMutation } from '@apollo/client';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import './formcss/Form.css'
import { usePaymentState, useIssueState, useFormState } from '../../States/formstate';
import { ADD_INVOICE } from '../../mutation/AddInvoice';
import { UPDATE_INVOICE } from '../../mutation/UpdateInvoice';
function InvoiceForm({formType, invoice}) {
    const formState = useFormState()
    const paymentTerm = usePaymentState()
    const issueDate = useIssueState()
    const [addInvoice, {error: addInvoiceError}] = useMutation(ADD_INVOICE);
    const [ updateInvoice, {error: updateInvoiceError} ] = useMutation(UPDATE_INVOICE)
    dayjs.extend(duration)
    const formOuterRef = useRef()
    const closeForm = ({ target }) => {
        if (formOuterRef.current === target) {
            formState.close()
            document.body.style.overflow = '';
        }
    }
    const onSubmit =  (values, { setSubmitting }) => {
        console.log(values)
        let status = "Pending";
        values.paymentTerms = paymentTerm.get();
        values.createdAt = issueDate.get();
        values.paymentDue = dayjs(values.createdAt).add(dayjs.duration({ 'days': values.paymentTerms })).format('YYYY-MM-DD');
        values.status = invoice?.status ? invoice.status : status;
        if (values.items) {
            values.items = values.items.map(item => ({ ...item, quantity: Number(item.quantity), price: Number(item.price), total: Number(item.price * item.quantity) }))
            values.total = (values.items.map((item) => item.total)).reduce((acc, b) => acc + b)
        }
        if (formType === 'create'){
            addInvoice({
              variables: {
                input: { ...values }
              }
            });
            formState.close();
            window.location.reload();
         
            if (addInvoiceError){
                console.log(addInvoiceError)
               }
        }
          else{
                updateInvoice({
                  variables: {
                    id: invoice?.id,
                    input: { ...values, status: "Pending" }
                  }
                });
                formState.close();
                window.location.reload();
                if (updateInvoiceError){
                    console.log(updateInvoiceError)
                   }
                }
                setSubmitting(false);
          }

  return (
    <div className="form-container" ref={formOuterRef} onClick={closeForm}>
        <section>
          <div>
            {formType === "create" ? <h2 className="heading">New Invoice</h2> : <h2 className="heading">Edit <span>#</span>{invoice?.id}</h2>}
            <Formik initialValues={invoice || initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ values, errors, setFieldValue, setSubmitting, handleChange }) => (
                    <Form>
                        <BillFrom />
                        <BillTo />
                        <ProjectDetails paymentTerm={invoice?.paymentTerms} />
                        <FieldArray name="items">
                            {({ remove, push }) => (
                                values.items && <ItemList items={values.items} handleChange={handleChange} setFieldValue={setFieldValue} push={push} remove={remove} />
                            )}
                        </FieldArray>
                        <div className="errorsDiv">
                            {Object.entries(errors).length !== 0 ?
                                <p className="fieldsError">- All fields must be added</p> : ''
                            }
                            {errors.items ?
                                <p className="itemsError">- An item must be added</p> : ''
                            }
                        </div>
                        <ButtonsDiv setSubmitting={setSubmitting} values={values} formType={formType} />
                    </Form>
                )}
            </Formik>
          </div>
        </section>
    </div>
  )
}

export default InvoiceForm