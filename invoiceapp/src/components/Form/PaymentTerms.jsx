import React, {useEffect, useState} from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { usePaymentState } from '../../States/formstate';
import './formcss/PaymentTerms.css'

function PaymentTerms({ paymentTerm }) {
    const [showBox, setShowBox] = useState(false)
    const paymentState = usePaymentState()
    const selectedTerm = paymentState.get()

    const changeValue = ({ target }) => {
        const clicked = Number(target.dataset.value)
        paymentState.change(clicked)
    }

    useEffect(() => {
        if (paymentTerm)
            paymentState.change(paymentTerm)
    }, [paymentTerm])

  return (
    <div className="paymentterm-container">
    <label htmlFor="paymentTerms">Payment Terms</label>
    <div id="paymentTerms" onClick={() => { setShowBox(prev => !prev) }} className="customSelect">
        <p>
            <span className="selectedTerm">{`Net ${selectedTerm} ${selectedTerm === 1 ? 'Day' : 'Days'}`}</span>
            <span className="iconSpan">{!showBox ? <HiChevronDown /> : <HiChevronUp />}</span>
        </p>
        {showBox &&
            <div onClick={changeValue} className="selectBox">
                <span data-value={1} className={selectedTerm === 1 ? "active" : ''}>Net 1 Day</span>
                <span data-value={7} className={selectedTerm === 7 ? "active" : ''}>Net 7 Days</span>
                <span data-value={14} className={selectedTerm === 14 ? "active" : ''}>Net 14 Days</span>
                <span data-value={30} className={selectedTerm === 30 ? "active" : ''}>Net 30 Days</span>
            </div>}
    </div>
</div>
  )
}

export default PaymentTerms