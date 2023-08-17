import style from './HomePage.module.css';
import React from 'react';
import bgImage from '../../assets/IMG_5107.jpg';
import NavigateButton from '../ReusableComponents/NavigateButton/NavigateButton';

const HomePage = () => {
  return (
    <>
      <div className={style['home-container']}>
        <div className={style['mask']}>
          <img
            className={style['bg-img']}
            src={bgImage}
            alt="Front-end developer"
          />
        </div>
        <div className={style['content']}>
          <p>
            Hello, I am <strong> Alona Vladymyrova</strong>{' '}
          </p>
          <h1>Front-end</h1>
          <h2>developer</h2>
          <div className={style['button-container']}>
            <NavigateButton
              linkName={'/project'}
              children={'PROJECTS'}
              className="btn"
            />
            <NavigateButton
              linkName={'/contact'}
              children={'CONTACT'}
              className="btn btn-light"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
