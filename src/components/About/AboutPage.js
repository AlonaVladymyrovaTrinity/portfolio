import style from './AboutPage.module.css';
import React from 'react';
// import { Link } from 'react-router-dom';

// import Frontend from "../../assets/Frontend.jpg";
// import Desktop from "../../assets/Desktop.jpg";

const AboutPage = () => {
  return (
    <div className={style['about-container']}>
      <div className={style['left-content']}>
        <h1>About me</h1>
        <main>
          <article>
            I'm a Frontend Developer with a Master's in Computer Science,
            specializing in HTML, CSS, JavaScript, and React. My focus is on
            creating accessible, responsive, and visually captivating designs
            that seamlessly adapt to various devices. With a keen eye for detail
            and a passion for user-centric experiences, I merge technology and
            creativity to craft seamless and engaging web interfaces. Let's
            bring your ideas to life through innovative design and impeccable
            code.
          </article>
        </main>
        {/* <Link to="/contact">
          <button className={style['btn']}>CONTACT</button>
        </Link> */}
      </div>
      <div className="right-content">
        <aside>
          {/* <div className="img-container">
          <div className="img-stack top">
            <img src={Frontend} className={style['img']} alt="Front-end" />
          </div>
          <div className="img-stack bottom">
            <img src={Desktop} className={style['img']} alt="Desktop" />
          </div>
        </div> */}
        </aside>
      </div>
    </div>
  );
};

export default AboutPage;
