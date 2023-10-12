import style from './HomePage.module.css';
import React from 'react';
// import bgImage from '../../assets/girl-coding.jpg';
import NavigateButton from '../ReusableComponents/NavigateButton/NavigateButton';

const HomePage = () => {
  return (
    <>
      <div className={style['home-container']}>
        <div className={style['mask']}>
          {/* <img
            className={style['bg-img']}
            src={bgImage}
            alt="Front-end developer"
          /> */}
        </div>
        <div className={style['content']}>
          <p>Hello, I am Alona Vladymyrova</p>
          <h1>Front-end</h1>
          <h2>developer</h2>
          <div className={style['button-container']}>
            <div mt="2rem">
              <NavigateButton
                linkName={'/project'}
                variant={'contained'}
                color={'primary'}
                children={'PROJECTS'}
                fullWidth
              />
            </div>
            <div mt="2rem">
              <NavigateButton
                linkName={'/contact'}
                variant={'contained'}
                color={'secondary'}
                children={'Hire me'}
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
