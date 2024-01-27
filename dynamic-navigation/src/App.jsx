import React, { useState } from 'react'
import './App.css'
import { GiHamburgerMenu  } from 'react-icons/gi';

const App = () => {

  const [nav, setNav] = useState(false);
  return (
    <>
    <nav>
      <h1>Aditya Nikhate</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Read More</a></li>
      </ul>
      <h3 onClick={()=>(setNav(!nav))}><GiHamburgerMenu/></h3>   
    </nav>
    <div className={nav?"mobnav mobhid":"mobnav"}>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Read More</a></li>
      </ul>
    </div>
    </>
  )
}

export default App