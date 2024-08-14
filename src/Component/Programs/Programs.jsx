import React from 'react'
import './Programs.css'
import program1 from '../../assets/img/e1.png'
import program2 from '../../assets/img/e2.png'
import program3 from '../../assets/img/e3.png'
import program11 from '../../assets/img/pp1.png'
import program12 from '../../assets/img/pp2.png'
import program13 from '../../assets/img/pp3.png'

const Programs = () => {
  return (
    <div className='programs' >
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                <img src={program11} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={program12} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <img src={program13} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
