import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image'


const Movie = async ({params}) => {
     const id = params.id
      const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
     const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4b2c530b37msh95efbf3790544f0p15bdcfjsnba4f63631349',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };
    
    const res = await fetch(url,options)
    const data = await res.json()
    const mainData = await data[0].details;
  return (
    <div className={styles.container}>
    <h2 className={styles.movie_title}>   Netflix \ <span> {mainData.type} </span> </h2>
    <div className={styles.card_section}>
        <div>
            <Image src={mainData.backgroundImage.url} alt={mainData.title} width={600} height={300} />
        </div>
        <div>
            <h1>{mainData.title}</h1>
            <p>{mainData.synopsis}</p>
        </div>
    </div>
</div>
  )
}

export default Movie