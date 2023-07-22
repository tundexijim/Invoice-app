import React from 'react'
import Filterbox from './Filterbox'
import { useFormState } from '../../States/formstate';
import { BiPlusMedical } from 'react-icons/bi';
import './Header.css'
function Header({length}) {
  const formstate = useFormState()
  const showform = () =>{
    formstate.open()
    document.body.style.overflow = 'hidden';
  }
  return (
    <div className='header-container'>
        <div className='text'>
            <h1>Invoices</h1>
            <p>There {length === 1? "is" : "are"} {length} <span>{length === 1 ? "Invoice" : "Invoices"}</span></p>
        </div>
        <div className='actions'>
            <Filterbox />
              <div className='btn'  onClick={showform}>
                <button><BiPlusMedical /></button>
                <h3>New Invoice</h3>
              </div>
        </div>
    </div>
  )
}

export default Header