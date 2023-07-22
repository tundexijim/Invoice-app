import React from 'react'
import './formcss/BillTo.css'
import TextInput from './TextInput'
function BillTo() {
  return (
    <div className="bill-to">
            <h3>Bill To</h3>
            <div>
                <TextInput
                    label="Client's Name"
                    id="clientName"
                    name="clientName"
                    type="text"
                />
                <TextInput
                    label="Client's Email"
                    id="clientEmail"
                    name="clientEmail"
                    type="email"
                    placeholder="e.g. email@example.com"
                />
                <TextInput
                    label="Street Address"
                    id="street"
                    name="clientAddress.street"
                    type="text"
                />
                <div className="trioColumns">
                    <TextInput
                        label="City"
                        id="city"
                        name="clientAddress.city"
                        type="text"
                    />
                    <TextInput
                        label="Post Code"
                        id="postCode"
                        name="clientAddress.postCode"
                        type="text"
                    />
                    <TextInput
                        label="Country"
                        id="country"
                        name="clientAddress.country"
                        type="text"
                    />
                </div>
            </div>
        </div>
  )
}

export default BillTo