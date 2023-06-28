import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image'
import Link from 'next/link'

const MovieCard = (curmovie) => {
  const {id,title,synopsis} = curmovie.jawSummary
  const imageUrl = curmovie.jawSummary.backgroundImage.url
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={imageUrl} alt="movie detail" width={260} height={250}/>
        </div>

        <div className={styles.card_data}>
            <h2>{title.substring(0,15)}</h2>
            <p>{`${synopsis.substring(0,50)} ...`}</p>
            <Link href={`/movie/${id}`}>
              <button>
                Read More
              </button>
            </Link>

        </div>

      </div>
    </>
  )
}

export default MovieCard