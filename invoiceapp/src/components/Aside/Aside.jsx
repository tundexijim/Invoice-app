import React from 'react'
import { IoMoon } from 'react-icons/io5';
import Avatar from './image-avatar.jpg';
import Logo from './logo.svg'
import { IoIosSunny } from 'react-icons/io';
import './Aside.css'

function Aside() {
  return (
    <div className='aside'>
      <div className='image'><img src={Logo} alt='avatar'/></div> 
        <div className="toogle">
          <IoIosSunny size={20} fill='#7E88C3'/>
          <hr />
        <img src={Avatar} alt='avatar'/>
        </div>
    </div>
  )
}

export default Aside