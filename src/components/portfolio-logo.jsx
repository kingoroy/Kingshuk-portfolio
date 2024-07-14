import React from 'react'
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { CgFormatSlash } from "react-icons/cg";
const PortfolioLogo = () => {
  return (
    <div>
       <h1 className='portfolio-logo-container'>
       <div className='portfolio-logo-container lessThan'><FaLessThan /></div>
       {/* <div className='portfolio-logo-container firstLetter'>K</div> */}
        <div className='portfolio-logo-container'><span className='firstLetter'>K</span>ingshuk</div>
        <div className='portfolio-logo-container greaterThan'><CgFormatSlash size={80} /></div>
        <div className='portfolio-logo-container greaterThan'><FaGreaterThan /></div>
        </h1>
    </div>
  )
}

export default PortfolioLogo
