'use client'
import React from 'react'
import HeroSection from '../HeroPage'
import Navbar from '../Navbar'
import Codingpage from '../codingpage'
import {InfiniteMovingCards} from '../ui/infinite-moving-cards';
// import MoveCard from '../MoveCard'
import { motion } from "framer-motion"
import Footer from '../Footer'

const heroItems = [
  {
    imageUrl:
      'https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png',
  },
  {
    imageUrl: 'https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg',
  },
  {
    imageUrl:
      'https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png',
  },
  {
    imageUrl: 'https://100x-b-mcdn.akamai.net.in/images/ds.jpeg',
  },

  {
    imageUrl:
      'https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png',
  },
];

const MoveCard  = () =>{
  return (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.75,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      }}
      className="relative mx-auto my-4 flex w-full flex-col items-center justify-center overflow-hidden antialiased"
    >
          <InfiniteMovingCards items={heroItems} />
          </motion.div>
  )

}

const LandingPage = () => {
  return (
    <div className='bg-background'>
        <Navbar />
      <HeroSection />
 
      <MoveCard />
           <Codingpage />
          <Footer />

      
    </div>
  )
}

export default LandingPage
