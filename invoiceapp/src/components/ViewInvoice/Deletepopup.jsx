import React from 'react'
import { useModalState } from '../../States/formstate'
import { useMutation } from '@apollo/client'
import { useNavigate} from 'react-router-dom'
import { DELETE_INVOICE } from '../../mutation/DeleteInvoice'
import './Deletepopup.css'
function Deletepopup({ id }) {
    const [deleteInvoice, {error}] = useMutation(DELETE_INVOICE)
    const modalState = useModalState()
    const navigate = useNavigate();
    const onDelete = () =>{
            deleteInvoice({
              variables: {
               id
              }
            });
            navigate('/')
            window.location.reload()
           modalState.close();
           if (error){
            console.log(error)
           }
        }
  return (
    <>
    {modalState.get() &&
        <div className= "delete-container">
            <section>
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete invoice #{id}? This action can not be undone.</p>
                <div className="buttonsDiv">
                    <button className="cancelButton" onClick={() => modalState.close()}>Cancel</button>
                    <button onClick={ onDelete }  className="deleteButton">
                      Delete
                    </button>
                </div>
            </section>
        </div>
    }
    </>
  )
}

export default Deletepopup