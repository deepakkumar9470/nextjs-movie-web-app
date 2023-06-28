import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/common.module.css'
import MovieCard from '../components/MovieCard'

const Movie = async () => {
  
const url = process.env.RAPID_API;
// const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4b2c530b37msh95efbf3790544f0p15bdcfjsnba4f63631349',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url,options)
const data = await res.json()
const mainData = await data.titles;
   
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>

           <div className={styles.card_section}>
           {
            mainData.map((curmovie)=>(
              <MovieCard key={curmovie.id} {...curmovie}/>
            ))
          }

           </div>
        </div>
      </section>
     
    </>
  )
}

export default Movie