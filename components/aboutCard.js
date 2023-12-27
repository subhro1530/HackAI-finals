l// components/AboutCard.js

import React from 'react';
import styles from '../styles/globals.css';

const AboutCard = () => {
  return (
    <div className={styles['about-card']}>
      <div className={styles['about-card-img']}></div>
      <span className={styles['about-card-span']}>About Me</span>
      <p className={styles['about-card-info']}>
        I’m Walter, a multidisciplinary designer who focuses on telling my clients’
        stories visually, through enjoyable and meaningful experiences. I specialize
        in responsive websites and functional user interfaces.
      </p>
      <div className={styles['about-card-share']}>
        <a href="">
          <svg
            viewBox="0 0 16 16"
            className={styles['about-card-icon']}
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* GitHub SVG path */}
          </svg>
        </a>
        <a href="">
          <svg
            viewBox="0 0 16 16"
            className={styles['about-card-icon']}
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Twitter SVG path */}
          </svg>
        </a>
        <a href="">
          <svg
            viewBox="0 0 16 16"
            className={styles['about-card-icon']}
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Instagram SVG path */}
          </svg>
        </a>
        <a href="">
          <svg
            viewBox="0 0 16 16"
            className={styles['about-card-icon']}
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* YouTube SVG path */}
          </svg>
        </a>
      </div>
      <button className={styles['about-card-button']}>Resume</button>
    </div>
  );
};

export default AboutCard;
