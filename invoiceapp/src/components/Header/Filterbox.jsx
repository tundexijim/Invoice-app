import React, {useState} from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import Filter from './Filter'
import './Header.css'
function Filterbox() {
    const [showBox, setShowBox] = useState(false)
    const statuses = ['Draft', 'Pending', 'Paid']
    const handleBox = () => {
        setShowBox(prev => !prev)
    }
  return (
         <div className='filterbox'>
            <div onClick={handleBox} className='filterhead'>
                <h3>Filter by status</h3>
                <span>{showBox ? <HiChevronUp size={15} /> : <HiChevronDown size={15}/>}</span>
            </div>
            {showBox &&
                <div className='filterlist'>
                    {statuses && statuses.map((status) => <Filter setShowBox={setShowBox} status={status} key={status} />)}
                </div>
            }
        </div>
  )
}

export default Filterbox