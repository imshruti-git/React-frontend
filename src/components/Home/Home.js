import React from 'react'
import Hero from '../Hero/Hero';
import HeroSecond from '../Hero/Hero2';
import Solutions from '../Solutions/Solutions';
import Time from '../Time/Time';
import Work from '../Work/Work';


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