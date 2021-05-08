import React from 'react'
import styled from "styled-components" 

//Import Awsome
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faLaptopCode, faGraduationCap, faImages} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {About, Description, Image} from "../styles"

const ServicesSection = () => {
    return(
        <Services>
            <Image>
                <img src="data:image/png;base64,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"/>
            </Image>
            <ServiceDescription>
                <h2>Things I do</h2>
                <Cards id="cards-list">
                    <Card id="cards">
                        <div className="icon">
                            <FontAwesomeIcon icon={faLaptopCode} size="4x"/>
                            <h3>Portfolio</h3>
                        </div>
                        <p>check my work on my portfolio</p>
                    </Card>
                    <Card id="cards">
                        <div className="icon">
                        <FontAwesomeIcon icon={faGraduationCap} size="4x"/>
                            <h3>Courses</h3>
                        </div>
                        <p>check my work on my portfolio</p>
                    </Card>
                    <Card id="cards">
                        <div className="icon">
                        <FontAwesomeIcon icon={faImages} size="4x"/>
                            <h3>Hobbies</h3>
                        </div>
                        <p>check my work on my portfolio</p>
                    </Card>
                    <Card id="cards">
                        <div className="icon">
                            <FontAwesomeIcon icon={faGithubSquare} size="4x"/>
                            <h3>GitHub</h3>
                        </div>
                        <p>check my work on my portfolio</p>
                    </Card>
                </Cards>
            </ServiceDescription>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-top: 5rem;
    }
    p{
        width:70%:
        padding: 2rem 0rem 4rem 0rem
    }
`;
const ServiceDescription = styled(Description)`
    flex: 3;
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;

`;

const Card = styled.div`
    padding: 0.5rem;
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
    };
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;

    }
`;
export default ServicesSection