import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
        <di className="flexCenter paddings innerWidth h-container">
           <img src="./logo.png" alt="logo" width={100} /> 

           <div className="h-menu flexCenter">
            <a href="Residencies"></a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className='button'>
            <a href="">Contact</a>
            </button>
           </div>

        </di>
    </section>
  )
}

export default Header