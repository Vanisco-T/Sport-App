import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'
const Header = () => {
    //ul>li*5 for 5 unordered list
    const mobile = window.innerWidth<=768 ? true:false;
    const [Menu,setMenu]=useState(false)
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>
        {(Menu ===false && mobile===true)?(<div
        style={{
          backgroundColor:'var(--appColor)',
          padding:'0.5rem',
          borderRadius:'5px'
        }}
        onClick={()=>setMenu(true)}
        >
          <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}} />
        </div>):
         <ul className='header-menu'>
         <li >
          <Link
          onClick={()=>{setMenu(false)}}
          to='home'
          spy={true}
          smooth={true}
          activeClass="active"
          >Home</Link>
         </li>
         <li >
          <Link
          onClick={()=>{setMenu(false)}}
          to='programs'
          spy={true}
          smooth={true}
          >Programs</Link>
         </li>
         <li >
          <Link
          onClick={()=>{setMenu(false)}}
          to='reasons'
          spy={true}
          smooth={true}
          >Why Us</Link>
         </li>
         <li >
          <Link
          onClick={()=>{setMenu(false)}}
          to='plan'
          spy={true}
          smooth={true}
          >Plans</Link>
         </li>
         <li >
          <Link
          onClick={()=>{setMenu(false)}}
          to='Testimonials'
          spy={true}
          smooth={true}
          >Testimonials</Link>
         </li>
     </ul>
        }
       
    </div>
  )
}

export default Header