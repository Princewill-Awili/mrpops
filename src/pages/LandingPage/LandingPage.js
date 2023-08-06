import React from 'react'
import './landing.css'

const LandingPage = () => {
   

     const handleScroll =(e)=>{
          const page = e.currentTarget;
          if(page.pageYOffset > 0){
               page.style.backgroundColor = 'black';
          }
         
     }
  return (
    <div className='landingPage' onScroll={handleScroll}>
     <section className="mainSection">
          <div className='imageDiv'></div>
     </section>
    </div>
  )
}

export default LandingPage