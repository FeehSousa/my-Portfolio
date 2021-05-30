import React from 'react'

import {useHistory} from 'react-router-dom'

import { About, Description, Image } from '../styles'

import {motion} from 'framer-motion'
import {titleAnimation,fade, photoAnimation, scollReveal} from '../animation'
import { useScroll } from '../hooks/UseScroll'


const AboutSection = () =>{
    const [element, controls] =  useScroll();
    const history = useHistory();

    const redirectHandler = () =>{
            history.push('/contact')
        }


    return(
        <About
            variants= {scollReveal}
            animate= {controls}
            initial= 'hidden'
            ref={element}
        >
            <Description>
                <motion.h2 variants={titleAnimation}>Fernando Sousa</motion.h2>
                <motion.h2 variants={titleAnimation}>Sofware Engineer</motion.h2>
                
                <motion.p variants={fade}>
                    I'm a software engineer passionate about making code more accessible, creating technology to elevate people, and working with JAVA, Spring Boot, NodeJS, Angular, React.
                </motion.p>
            
                <button onClick={redirectHandler}>Contact Me</button>
            </Description>
            <Image variants={photoAnimation}>
                <img src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/89546552_2806202882820209_508932476157034496_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_eui2=AeE07buvgavw5-hrlQi77pBwZ5ha3BG488pnmFrcEbjzyruzbtDdFBRa5vqKNfhHHSLy-lnujtXqSC16tHdaElsx&_nc_ohc=v6rycS1FJIYAX_6nq_6&_nc_ht=scontent-gru2-1.xx&oh=e3b492cf9892f3f7382152aef7bf4f57&oe=60BE4CD9"/>
            </Image>
        </About>
    )
}


export default AboutSection