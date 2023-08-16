import style from '../footer/Footer.module.css';

import React from 'react';
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div className={style['footer']}>
      <div className={style['footer-container']}>
        <div className={style['content-column']}>
          <div className={style['location']}>
            <FaHome size={20} className={style['fa-icon']} />
            <div>
              <p>
                <strong>Location:</strong> San Francisco Bay Area, California
              </p>
              <p>United States</p>
            </div>
          </div>
          <div className={style['phone']}>
            <div className={style['bold-text']}>
              <FaPhone size={20} className={style['fa-icon']} />
              <a href="tel:+1925999XXXX">
                <strong>Phone:</strong> +1 (925) 999 - XXXX
              </a>
            </div>
          </div>
          <div className={style['email']}>
            <div className={style['bold-text']}>
              <FaMailBulk size={20} className={style['fa-icon']} />
              <a href="mailto:alona.XXX@gmail.com">
                <strong>Email:</strong> alona.XXX@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className={style['content-column']}>
          <div className={style['bold-text']}>About Me</div>
          <p>
            Front-end developer • Fully Work Authorized • No Visa Sponsorship
            Required
          </p>
          <div className={style['social']}>
            <a
              href="https://github.com/AlonaVladymyrovaTrinity"
              target="_blanc"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub size={40} className={style['icon']} />
              <span className={style['sr-only']}>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alona-vladymyrova"
              target="_blanc"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={40} className={style['icon']} />
              <span className={style['sr-only']}>LinkedIn</span>
            </a>
            <a
              href="https://www.codewars.com/users/AlonaVladymyrova"
              target="_blanc"
              rel="noopener noreferrer"
              aria-label="Codewars Profile"
            >
              <Icon
                icon="simple-icons:codewars"
                className={style['icon-codewars']}
              />
              <span className={style['sr-only']}>Codewars</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
