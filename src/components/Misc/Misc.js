import React from 'react'
import './misc.css'
import {TbPaperBag as BagIcon} from 'react-icons/tb'
import {RiMenu3Line as MenuIcon} from 'react-icons/ri'

const Misc = () => {
  return (
    <div className='miscContainer'>
      <div className='cartBox'>
        <div className='cartIconBox'>
          <BagIcon />
        </div>
        <div className='cartNumber'>0</div>
      </div>
      <div className='flavours'>
        <span className='ftxt'>Flavours</span>
        <div className='veil'></div>
      </div>
      <div className='menu'>
        <span className='ftxt'>
          <MenuIcon />
        </span>
        <span className='ftxt'>Menu</span>
        <div className="veil"></div>
      </div>
    </div>
  );
}

export default Misc