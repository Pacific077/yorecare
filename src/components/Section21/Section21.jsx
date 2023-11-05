import React from 'react'
import "./Section21.css"
import whatapp from "../../contents/whatappbtn.png"
import booknow from "../../contents/booknowbtn.png"
import './Sec21resp.css'

const Section21 = () => {
  return (
    <div className='section21'>
        <div className="banner2">
            <div className="blueimg">
                <img className='bannerbtn' src={whatapp} alt="" />
            </div>
            <div className="yeloimg">
                <img className='bannerbtn' src={booknow} alt="" />
                
            </div>
        </div>
        
    </div>
  )
}

export default Section21