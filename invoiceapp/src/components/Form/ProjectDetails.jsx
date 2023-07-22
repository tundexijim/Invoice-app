import React from 'react'
import DatePickerInput from './DatePickerInput';
import PaymentTerms from './PaymentTerms';
import TextInput from './TextInput';
import './formcss/ProjectDetails.css'
function ProjectDetails({ paymentTerm }) {
  return (
    <div className="projectdetails-container">
            <div className="biColumns">
                <DatePickerInput />
                <PaymentTerms paymentTerm={paymentTerm} />
            </div>
            <TextInput
                id="description"
                name="description"
                label="Project Description"
                type="text"
                placeholder="e.g. Graphic Design Service"
            />
        </div>
  )
}

export default ProjectDetails