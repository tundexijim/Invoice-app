import React from 'react'
import { useField } from 'formik';
import './formcss/TextInput.css'
function TextInput({ label, ...props }) {
    const [field, meta] = useField(props)
  return (
    <div className= 'textinput'>
            <label className={meta.touched && meta.error ? 'labelError' : ''} htmlFor={props.id}>{label}</label>
            {!props.value ? <input className={meta.touched && meta.error ? 'inputError' : ''} {...field} {...props} />
                : <input {...props} {...field} value={props.value} />
            }
            {
                meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                )
                    : null
            }
    </div>
  )
}

export default TextInput