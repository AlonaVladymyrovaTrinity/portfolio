import React from 'react';
import style from './BannerImage.module.css';
import GoldenGateBridge from '../../../assets/GoldenGateBridge.png';

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
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default BannerImmage;
