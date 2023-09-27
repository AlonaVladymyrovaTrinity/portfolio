import ProjectCard from './ProjectCard';
import ProjectsList from './ProjectsList';
import React from 'react';
//import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Projects = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid
        container
        alignItems="stretch"
        spacing={2}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        marginLeft={0}
        style={{ marginTop: '30px', marginBottom: '30px' }}
      >
        {ProjectsList.map((val, ind) => (
          <Grid
            item
            xs={10}
            sm={8}
            md={6}
            key={ind}
            paddingLeft={2}
            paddingRight={2}
            paddingBottom={2}
            display={'flex'}
            justifyContent="center"
            alignItems={'center'}
          >
            <ProjectCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Projects;
