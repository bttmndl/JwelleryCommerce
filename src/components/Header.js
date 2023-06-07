import React from 'react'
import './styles.css'
import logo from '../assets/logo.webp'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineAlignLeft} from 'react-icons/ai'
import avtar from '../assets/avtar.jpg'
function Header() {
  return (
    <div className="header">
      <div className='header-brand'>
      <img src={logo} alt="" style={{height:"50px",width:"50px",borderRadius:"50%",marginLeft:"50px"}}/>
      </div>
      <div className='searchContainer'>
        <input type="text" className="searchInput"/>
        <button className='searchIcon' ><BiSearch/></button>
      </div>
      
      <div className='avtarContainer'>
        
        <button style={{border:"none"}}><AiOutlineAlignLeft style={{fontSize:"30px",backgroundColor:"white"}}/></button>
         <img src={avtar} alt="" style={{height:"40px",width:"40px",borderRadius:"50%"}}/>
      </div>
    </div>
  )
}

export default Header