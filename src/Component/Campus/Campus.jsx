import React from 'react'
import './Campus.css'
import g1 from '../../assets/img/f1.png'
import g2 from '../../assets/img/f2.png'
import g3 from '../../assets/img/f3.png'
import g4 from '../../assets/img/f4.png'
import whiteArrow from '../../assets/img/whitearr.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g3} alt="" />
            <img src={g4} alt="" />
        </div>
        <button className="btn dark-btn">See more here <img src={whiteArrow} alt="" /></button>
    </div>
  )
}

export default Campus
