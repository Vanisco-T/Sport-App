import React from 'react'
import './Testinomail.css'
import { useState } from 'react'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
const Testinomial = () => {
    const transition ={type:'spring',duration:6}
    const [selected,setSelected]=useState(0);
    const tLength =testimonialsData.length;
  return (
    <div className="Testimonials" id='Testimonials'>
        <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
            <span style={{color:'var(--orange)'}}>
                {testimonialsData[selected].name}
            </span>{" "}
            - {testimonialsData[selected].status }
        </span>
        </div>
        <div className="right-t">
            <motion.div
            initial={{opacity:0,x:-100}}
            transition={{...transition,duration:2}}
            whileInView={{opacity:1,x:0}}
            ></motion.div>
            <motion.div
            initial={{opacity:0,x:-100}}
            transition={{...transition,duration:2}}
            whileInView={{opacity:1,x:0}}
            ></motion.div>
        <motion.img 
        key={selected}
        initial={{opacity:0,x:100}}
        exit={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={transition}
        src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
            <img 
            onClick={()=>{
                selected===0?setSelected(tLength - 1):
                setSelected((pre)=>pre -1 )
            }}
            src={leftArrow} alt="" />
            <img 
            onClick={()=>{
                selected===tLength -1 ? setSelected(0):
                setSelected((prev)=>prev + 1)
            }}
            src={rightArrow} alt="" />
        </div>
        </div>
    </div>
    )
}

export default Testinomial