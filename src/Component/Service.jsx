import React from 'react'
import Btn from '../SubComponent/Btn'
import '../Style/Service.css'
const Service = () => {
  return (
    <div>
      <div className="service-main">
        <div className="container">
            <h3>Discover Innovation: <br/>
            Your Next Adventure Awaits</h3>
            <p>meticulously engineered to elevate every journey. Each vehicle is a testament to <br/> our commitment to performance, safety, and design.</p>
            <div className="service-btn">
                <Btn/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
