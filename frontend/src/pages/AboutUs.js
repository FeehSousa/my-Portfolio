import React from 'react'
import AboutSection from '../compenents/AboutSection'
import ServicesSection from '../compenents/ServicesSection'

import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

import ScrollTop from '../compenents/ScrollTop'

 const  AboutUs = () => {
     return(
         <motion.div
            initial='hidden'
            animate='show'
            exit ="exit"
            variants={pageAnimation}
         >
            <AboutSection/>
            <ServicesSection/>
            <ScrollTop/>
         </motion.div>
     )
 }

 export default AboutUs