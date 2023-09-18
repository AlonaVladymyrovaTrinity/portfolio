import style from './Projects.module.css';
import ProjectCard from './ProjectCard';
import ProjectsList from './ProjectsList';

import React from 'react';

// import project1 from "../assets/Pet Finder.png";
// import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className={style['pro-container']}>
      <h1 className={style['project-heading']}>Projects</h1>
      <div className={style['project-container']}>
        {ProjectsList.map((val, ind) => {
          return (
            <ProjectCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
