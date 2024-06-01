import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
 const[visibility,setVisibility]=useState(true)
//  var a=2
// // condition ?expr1:expr2
//  a==2?console.log(2):console.log("not")
   return (
    <div className='navmain'>
      <h1>LOGO</h1>
      <ul className='list1'>
        <Link to={"/"}>
          <li className='listItem'>Home</li>
        </Link>
        <Link to={"/products"}>
          <li>Products</li>
        </Link>
        <Link to={"/contactus"}>
          <li>Contact Us</li>
        </Link>
        <Link to={"/cart"}>
          <li> <FaShoppingCart /></li>
        </Link>
      </ul>
      <FaBars className='hambr' onClick={()=>{
        setVisibility(!visibility)
      }} />
      {visibility==true?(<ul className='list2'>
        <Link to={"/"}>
          <li className='listItem'>Home</li>
        </Link>
        <Link to={"/products"}>
          <li>Products</li>
        </Link>
        <Link to={"/contactus"}>
          <li>Contact Us</li>
        </Link>
        <Link to={"/cart"}>
          <li> <FaShoppingCart /></li>
        </Link>
      </ul>):null}

    </div>
  )
}

export default Navbar