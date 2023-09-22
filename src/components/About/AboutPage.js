import style from './AboutPage.module.css';
import React from 'react';
import NavigateButton from '../ReusableComponents/NavigateButton/NavigateButton';
import HTML5Icon from '../../assets/HTML5_icon.png';
import CSSIcon from '../../assets/CSS_icon.png';
import BootstrapIcon from '../../assets/bootstrap_icon.png';
import MaterialUiIcon from '../../assets/material-ui-logo.png';
import JavaScriptIcon from '../../assets/javascript-icon.png';
import ReactIcon from '../../assets/react_icon.png';
import ReduxIcon from '../../assets/redux_icon.png';
import GithubIcon from '../../assets/github_icon.png';
import SqlIcon from '../../assets/sql_icon.png';

const AboutPage = () => {
  return (
    <>
      <div className={style['about-container']}>
        <div className={style['left-content']}>
          <h2>Getting to Know Me Better</h2>
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
          {/* <aside> */}
          <div className={style['right-content-heading']}>
            <h2>My Key Skills</h2>
          </div>
          <div className={style['container']}>
            <div className={style['skill-box-container']}>
              <div className={style['skill-title']}>
                <div className={style['img']}>
                  <img
                    src={JavaScriptIcon}
                    className={style['skill-icon']}
                    alt="JavaScript"
                  />{' '}
                </div>
                <p>JavaScript</p>
              </div>
            </div>
            <div className={style['skill-box-container']}>
              <div className={style['skill-title']}>
                <div className={style['img']}>
                  <img
                    src={ReactIcon}
                    className={style['skill-icon']}
                    alt="React"
                  />
                </div>
                <p>React</p>
              </div>
            </div>
            <div className={style['skill-box-container']}>
              <div className={style['skill-title']}>
                <div className={style['img']}>
                  <img
                    src={ReduxIcon}
                    className={style['skill-icon']}
                    alt="Redux"
                  />
                </div>
                <p>Redux</p>
              </div>
            </div>
            <div className={style['skill-box-container']}>
              <div className={style['skill-title']}>
                <div className={style['img']}>
                  <img
                    src={HTML5Icon}
                    className={style['skill-icon']}
                    alt="HTML5"
                  />
                </div>
                <p>HTML5</p>
              </div>
            </div>
            <div className={style['skill-box-container']}>
              <div className={style['skill-title']}>
                <div className={style['img']}>
                  <img
                    src={CSSIcon}
                    className={style['skill-icon']}
                    alt="CSS"
                  />
                </div>
                <p>CSS</p>
              </div>
            </div>
            <div className={style['skill-box-container']}>
              <div className={style['skill-title']}>
                <div className={style['img']}>
                  <img
                    src={BootstrapIcon}
                    className={style['skill-icon']}
                    alt="Bootstrap"
                  />{' '}
                </div>
                <p>Bootstrap</p>
              </div>
            </div>
            <div className={style['skill-box-container']}>
              <div className={style['skill-title']}>
                <div className={style['img']}>
                  <img
                    src={MaterialUiIcon}
                    className={style['skill-icon']}
                    alt="Material-ui"
                  />{' '}
                </div>
                <p>Material-ui</p>
              </div>
            </div>
            <div className={style['skill-box-container']}>
              <div className={style['skill-title']}>
                <div className={style['img']}>
                  <img
                    src={GithubIcon}
                    className={style['skill-icon']}
                    alt="Github"
                  />
                </div>
                <p>Github</p>
              </div>
            </div>

            <div className={style['skill-box-container']}>
              <div className={style['skill-title']}>
                <div className={style['img']}>
                  <img
                    src={SqlIcon}
                    className={style['skill-icon']}
                    alt="Sql"
                  />
                </div>
                <p>SQL</p>
              </div>
            </div>
          </div>
        </div>
        {/* </aside> */}
      </div>
    </>
  );
};

export default AboutPage;
