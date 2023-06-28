import React from 'react'
import styles from './page.module.css'
import HeroSection from './components/HeroSection'


const Home = () => {
  return (
    <>
      <HeroSection title={"LET'S WATCH MOVIE TOGETHER"} imageUrl={"/home.svg"}/>
    </>
  )
}

export default Home


