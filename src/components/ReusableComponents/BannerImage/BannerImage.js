import React from 'react';
import style from './BannerImage.module.css';
import GoldenGateBridge from '../../../assets/behind_the_algorithm.jpg';

function BannerImmage({ heading, text }) {
  return (
    <>
      <img
        src={GoldenGateBridge}
        className={style['banner-img']}
        alt="Golden Gate Bridge"
      />
      <div className={style['banner_content']}>
        <div className={style['heading']}>
          <div className={style['text-box']}>
            <h1>{heading}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerImmage;
