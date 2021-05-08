import React from 'react'
import styled from 'styled-components'


import SocialNetworkSection from '../compenents/SocialNetworkSection'
import ContactForm from '../compenents/ContactForm'


const ContactMe = () => {
    return(
        <ContectStyled>
            <Title><h2>Get in touch</h2></Title>
            <Areas id="areas">
                <ContactForm/>
                <SocialNetworkSection />
            </Areas>
        </ContectStyled>
    )
}

const ContectStyled = styled.div`
    padding: 1rem 10rem;
    color: #353535;
    min-height: 90vh;
`;
const Title = styled.div`
    margin-bottom: 4 ram;
    h2{
        color: white;
    }
`;
const Areas = styled.div`
    display: flex;
    align-items: center;

`;

export default ContactMe