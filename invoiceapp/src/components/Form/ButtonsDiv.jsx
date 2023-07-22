import React from 'react'
import './formcss/ButtonsDiv.css'
import { ADD_INVOICE } from '../../mutation/AddInvoice'
import { useFormState } from '../../States/formstate';
import { useMutation } from '@apollo/client';

function ButtonsDiv({ formType, values, setSubmitting }) {
    const formState = useFormState();
    const [addInvoice, {error}] = useMutation(ADD_INVOICE);
    const closeform = () =>{
        formState.close()
        document.body.style.overflow = ''
    }
    const submitDraft = () => {
        addInvoice({
              variables: {
                input: { ...values, status:"Draft" }
              }
            });
           formState.close();
           window.location.reload()
            setSubmitting(false);
            if (error) {
                console.log(error);
              }
        }
       
  return (
    <div className="button-container">
    {formType === 'create' ?
        <>
            <div className="leftAlign">
                <button className="discardButton" type="reset" onClick={closeform}>Discard</button>
            </div>
            <button name="draft" className="saveDraftButton" onClick={submitDraft}>Save as Draft</button>
            <button name="submit" className="submitButton" type="submit">Save &amp; Send</button>
        </>
        :
        <>
            <div className="editButtons">
                <button type="button" className="cancelButton" onClick={closeform}>Cancel</button>
                <button className="submitButton" type="submit">Save Changes</button>
            </div>
        </>
    }
</div>
  )
}

export default ButtonsDiv