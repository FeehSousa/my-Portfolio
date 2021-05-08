import React from 'react'

import styled from 'styled-components'
import {faGithubSquare,faLinkedin, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SocialNetworkSection = () =>{
    return(
        <Network id="newtwork">
            <Social href="https://github.com/FeehSousa" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size="4x" color="#8a2be2"/>
                <h3>github.com/FeehSousa</h3>
            </Social>
            <Social href="https://www.linkedin.com/in/fernando-sousa-8a0935163/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="4x" color="blue"/>
                <h3>Linkdin</h3>
            </Social>
            <Social className="social">
                <FontAwesomeIcon icon={faTelegramPlane} size="4x" color="#fdfbf9"/>
                <h3>Telegram</h3>
            </Social>
        </Network>
    )
}

const Network = styled.div`
    padding: 1rem 5rem;
`;
const Social = styled.a`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px 50px;
    padding-left: 2rem;
    text-decoration: none;
    &:hover{
      background: yellow;
      cursor: pointer;  
    }
    h3{
        color: grey;
        margin: 2rem;
    }
    color:inherit;
`;

export default SocialNetworkSection