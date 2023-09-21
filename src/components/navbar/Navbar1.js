import style from './Navbar.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import myResume from '../../assets/Resume_Alona_Vladymyrova 07_19_23.pdf';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div
      className={
        color ? `${style['header']} ${style['header-bg']}` : style['header']
      }
    >
      <Link to="/">
        <h1>Alona Vladymyrova</h1>
      </Link>
      <ul
        className={
          click ? `${style['nav-menu']} ${style['active']}` : style['nav-menu']
        }
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a target="_blanc" href={myResume} download>
            Resume
          </a>
        </li>
      </ul>
      <div className={style['hamburger']} onClick={handleClick}>
        {click ? (
          <FaTimes size={20} className={style['icon']} />
        ) : (
          <FaBars size={20} className={style['icon']} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
