import React from 'react'
import Hero from '../../components/Hero';
import HeroSecond from '../../components/Hero2';
import Solutions from '../../components/Solutions';
import Time from '../../components/Time';
import Work from '../../components/Work';


const Home = () => {
  return (
      <>
          <Hero /> 
          <Solutions />
          <Work />
          <Time />
          <HeroSecond />
        
          
      </>
     
 
  )
}

export default Home