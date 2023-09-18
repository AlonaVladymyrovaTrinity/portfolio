import style from './ProjectCard.module.css';

import React from 'react';
// import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className={style['project-card']}>
      <img src={props.imgsrc} alt={props.title} />
      <h2 className={style['project-title']}>{props.title}</h2>
      <div className={style['pro-details']}>
        <p>{props.text}</p>
        <div className={style['pro-btns']}>
          <a href={props.view} target="_blank" rel="noreferrer" className="btn">
            View Project
          </a>
          <a
            href={props.source}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Github Source
          </a>
          {/* <NavLink to={props.view} className="btn">
            Page
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
