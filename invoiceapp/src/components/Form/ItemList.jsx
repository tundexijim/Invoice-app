import React from 'react'
import TextInput from './TextInput';
import { MdDelete } from 'react-icons/md'
import './formcss/ItemList.css'

function ItemList({ items, push, handleChange, setFieldValue, remove }) {
  return (
    <div>
         <div className="itemlist-container">
            <h3>Item List</h3>
            <div className="itemsDiv">
                <label className="name" htmlFor="itemName">Item Name</label>
                <label className="quantity" htmlFor="itemQuantity">Qty.</label>
                <label className="price" htmlFor="itemPrice">Price</label>
                <label className="total" htmlFor="itemTotal">Total</label>
                {items && items.length > 0 && items.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="name">
                            <TextInput
                                id="itemName"
                                name={`items[${index}].name`}
                                label="Item Name"
                                type="text"
                            />
                        </div>
                        <div className="quantity">
                            <TextInput
                                id="itemQuantity"
                                name={`items[${index}].quantity`}
                                label="Qty."
                                type=""
                                placeholder="0"
                                min={0}
                                onChange={(e) => {
                                    let total = items[index].price * items[index].quantity
                                    handleChange(e)
                                    setFieldValue && setFieldValue(`items[${index}].total`, total)
                                }}
                            />
                        </div>
                        <div className="price">
                            <TextInput
                                id="itemPrice"
                                name={`items[${index}].price`}
                                label="Price"
                                type=""
                                placeholder="0.00"
                                step={0.01}
                                min={0}
                                onChange={(e) => {
                                    let total = items[index].price * items[index].quantity
                                    handleChange(e)
                                    setFieldValue && setFieldValue(`items[${index}].total`, total)
                                }}
                            />
                        </div>
                        <div className="total">
                            <TextInput
                                id="itemTotal"
                                name={`items[${index}].total`}
                                label="Total"
                                type="hidden"
                                value={items[index].price * items[index].quantity}
                                onChange={(e) => {
                                    let total = items[index].price * items[index].quantity
                                    handleChange(e)
                                    setFieldValue && setFieldValue(`items[${index}].total`, total)
                                }}
                            />
                            <span>{(items[index].price * items[index].quantity).toFixed(2)}</span>
                        </div>
                        <div className="deleteIcon">
                            <span onClick={() => remove(index)} className="iconSpan"><MdDelete /></span>
                        </div>
                    </React.Fragment>))
                }
            </div>
            <button className="addNewItem" onClick={() => push({ name: "", quantity: "", price: "", total: "" })} type="button">+ Add New Item</button>
        </div>
    </div>
  )
}

export default ItemList