import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition ={type:'spring',duration:5}
    const mobile = window.innerWidth<=768 ? true:false;
  return (
    <div className="hero" id='home'>
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
                <motion.div
                initial={{left:mobile?"178px":"238px"}}
                whileInView={{left:'9px'}}
                transition={{...transition,type:'tween'}}
                >
                </motion.div>
                <span>the best fitness club in the town</span>
            </div>
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>shape </span>
                    <span>your</span>
                </div>
                <div>
                    <span >Ideal body</span>
                </div>
                <div>
                    <span>
                    We are going to help you shape your ideal body for your long life 
                    </span>
                </div>
            </div>
            <div className="figures">
                <div>
                    <span><NumberCounter end={40} start={0} delay='4' preFix='+'/> </span>
                    <span>Expert coches</span>
                </div>
                <div>
                    <span><NumberCounter end={100} start={70} delay='4' preFix='+'/></span>
                    <span>Member Joined</span>
                </div>
                <div>
                    <span><NumberCounter end={40} start={0} delay='4' preFix='+'/></span>
                    <span>Fitness Programs</span>
                </div>
            </div>
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
        </div>
        <div className="right-h">
            <motion.div 
            transition={transition}
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            className="heart-rate">
                <img src={heart} alt=""/>
                <span>Heart Rate</span>
                <span>96  bpm</span>
            </motion.div>
            <img src={hero_image} alt="" className='hero-image' />  
            <motion.img 
            transition={transition}
            initial={{right:'11rem'}}
            whileInView={{right:'20rem'}}
            src={hero_image_back} alt="" className='hero-image-back'/>
            <motion.div 
            transition={transition}
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            className="calories">
                <img src={calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>110 Kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
    )
}

export default Hero