import React from 'react'
import "./sponsor.scss"

import { brand1, brand2, brand3, brand4, brand5 } from './import'

const Sponsor = () => {
  return (
    
    <div className='webHack-sponsors-container'>
     <div className='webHack-sponsors-Powered'>
        <div className='webHack-sponsors-Powered-header'>
        <h2>We Work With The Best Partners </h2>
        </div>
      
        </div>

        <div className='webHack-sponsors section-padding'>

     <div>
       <img src={brand1} alt="brand1"  className='adjust-ibm'  /> 
    </div>
    <div>
       <img src={brand4} alt="brand4"   className='adjust-ibm'/> 
    </div>

    <div>
   <img src={brand3} alt="brand3" /> 
    </div>

    <div>
   <img src={brand2} alt="brand2" className='adjust-ibm'/> 
    </div>

   <div>
   <img src={brand5} alt="brand5" className='adjust-ibm'/> 
    </div>
</div>
    </div>

  )
}

export default Sponsor
