import style from './AboutPage.module.css';
import React from 'react';
import NavigateButton from '../ReusableComponents/NavigateButton/NavigateButton';
import GoldenGateBridge from '../../assets/GoldenGateBridge.png';
import HTML5Icon from '../../assets/HTML5_icon.png';
import CSSIcon from '../../assets/CSS_icon.png';
import BootstrapIcon from '../../assets/bootstrap_icon.png';
import JavaScriptIcon from '../../assets/javascript-icon.png';
import ReactIcon from '../../assets/react_icon.png';
import GithubIcon from '../../assets/github_icon.png';
import SqlIcon from '../../assets/sql_icon.png';

const AboutPage = () => {
  return (
    <>
      <img
        src={GoldenGateBridge}
        className={style['banner-img']}
        alt="Golden Gate Bridge"
      />
      <div className={style['about_banner_content']}>
        <div className={style['heading']}>
          <h1>ABOUT ME</h1>
          <p>I'm a Font-End Developper</p>
        </div>
      </div>
      <div className={style['about-container']}>
        <div className={style['left-content']}>
          <h2>I'm Alona</h2>
          <main>
            <article>
              I'm a Frontend Developer with a Master's in Computer Science,
              specializing in HTML, CSS, JavaScript, and React. My focus is on
              creating accessible, responsive, and visually captivating designs
              that seamlessly adapt to various devices. With a keen eye for
              detail and a passion for user-centric experiences, I merge
              technology and creativity to craft seamless and engaging web
              interfaces. Let's bring your ideas to life through innovative
              design and impeccable code.
            </article>
          </main>
          <NavigateButton
            linkName={'/contact'}
            children={'CONTACT'}
            className="btn"
          />
        </div>
        <div className={style['right-content']}>
          <aside>
            <h2>My Key Skills</h2>
            <div className={style['img-container']}>
              <div>
                <img src={HTML5Icon} className={style['img']} alt="HTML5" />
                <p>HTML5</p>
              </div>
              <div>
                <img src={CSSIcon} className={style['img']} alt="CSS" />
                <p>CSS</p>
              </div>
              <div>
                <img
                  src={BootstrapIcon}
                  className={style['img']}
                  alt="Bootstrap"
                />
                <p>Bootstrap</p>
              </div>
              <div>
                <img
                  src={JavaScriptIcon}
                  className={style['img']}
                  alt="JavaScript"
                />
                <p>JavaScript</p>
              </div>
              <div>
                <img src={ReactIcon} className={style['img']} alt="React" />
                <p>React</p>
              </div>
              <div>
                <img src={GithubIcon} className={style['img']} alt="Github" />
                <p>Github</p>
              </div>
              <div>
                <img src={SqlIcon} className={style['img']} alt="Sql" />
                <p>SQL</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
