import React from 'react'

import styled from "styled-components"
import {useLocation} from 'react-router-dom'

import Card from '../compenents/Card'
import PortfolioDetail from '../compenents/PortfolioDetail'
import  {useApi} from '../hooks/useApi'

const Portfolio = () => {
    const location = useLocation()
    const slug = location.pathname.split('/')[2]
    const { data } = useApi('/portfolio')
    return(
        <PortfolioList ip="page">
            {slug && <PortfolioDetail slug={slug}/>}
            <CardList id="carlist">
                {data?.data?.map(project =>{
                   return (<Card key ={project.slug} project={project}/>)
                })} 
            </CardList>
        </PortfolioList>
    )
}

const PortfolioList = styled.div`
    min-height: 90vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;

`;

export default Portfolio