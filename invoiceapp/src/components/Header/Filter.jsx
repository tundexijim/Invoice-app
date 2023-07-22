import React from 'react'
import { ImCheckmark } from 'react-icons/im';
import { useFilterState } from '../../States/homestate';
import './Header.css'
function Filter({ status, setShowBox }) {
    const filterState = useFilterState()
    const currentStatus = filterState.get()
    const checked = currentStatus === status ? true : false
    const handleClick = () => {
        !checked ? filterState.change(status) : filterState.change('')
        setShowBox(false)
    }
  return (
    <div onClick={handleClick} className='filter'>
    <span className={checked?'checked':'notchecked'}>{checked ? <ImCheckmark size={12}/> : ''}</span>
    <h3 className='status'>{status}</h3>
    </div>
  )
}

export default Filter