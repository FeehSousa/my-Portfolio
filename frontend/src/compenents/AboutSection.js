import React from 'react'

import { About, Description, Image } from '../styles'


const AboutSection = () =>{
    return(
        <About>

            
            <Description>
                <h2>Fernando Sousa</h2>
                <h2>Sofware Engineer</h2>
                
                <p>
                    I'm a software engineer passionate about making code more accessible, creating technology to elevate people, and working with JAVA, Spring Boot, NodeJS, Angular, React.
                </p>
            
                <button>Contact Me</button>
            </Description>
            <Image>
                <img src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/89546552_2806202882820209_508932476157034496_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_eui2=AeE07buvgavw5-hrlQi77pBwZ5ha3BG488pnmFrcEbjzyruzbtDdFBRa5vqKNfhHHSLy-lnujtXqSC16tHdaElsx&_nc_ohc=v6rycS1FJIYAX_6nq_6&_nc_ht=scontent-gru2-1.xx&oh=e3b492cf9892f3f7382152aef7bf4f57&oe=60BE4CD9"/>
            </Image>
        </About>
    )
}


export default AboutSection