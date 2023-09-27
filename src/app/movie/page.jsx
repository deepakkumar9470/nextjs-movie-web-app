import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/common.module.css'
import MovieCard from '../components/MovieCard'

const Movie = async ({searchParams}) => {
  
// const url = process.env.RAPID_API;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};


const totalData = 50
const dataPerPage = 8
const totalPages = Math.ceil(totalData / dataPerPage)
let currentPage = 1
const offset = (currentPage - 1) * dataPerPage
if(Number(searchParams.page) >  1){
       currentPage = searchParams.page
}

// const url = `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=${offset}&limit_titles=${dataPerPage}&limit_suggestions=20`;
const res = await fetch(`https://netflix54.p.rapidapi.com/search/?query=stranger&offset=${offset}&limit_titles=50&limit_suggestions=20`,options)
const data = await res.json()
const mainData = await data.titles;



let pageNumbers = []
for (let i = currentPage-3; i <= currentPage+3; i++) {
  if(i < 0) continue
  if(i>totalData) break
  pageNumbers.push(i)
  
}

   
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
        {/* <div className={styles.pagination}>
          {
            currentPage-1 >=1 &&
            <Link className={styles.pagLinks} href="/movie">{"<<"}</Link>
          }
          {
            pageNumbers.map((item,i)=>(
              <Link className={styles.pagLinks} key={i} href={`/movie?page=${item}`}>
                 {item}
              </Link>
            ))
          }
          {
            currentPage-1 <= totalPages &&
            <Link className={styles.pagLinks} href="/movie">{">>"}</Link>
          }
        </div> */}
      </section>
     
    </>
  )
}

export default Movie