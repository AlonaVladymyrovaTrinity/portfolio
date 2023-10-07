import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const ProjectCard = (props) => {
  return (
    <Card
      sx={{
        maxWidth: '25rem',
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // boxShadow: 15,
        padding: '10 px',
        alignItems: 'center',
        height: '100%',
        border: 0,
        boxShadow: 0,
      }}
    >
      <CardMedia
        component="img"
        alt="screen shot of project"
        height="40%"
        image={props.imgsrc}
        title={props.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
        <Typography variant="body1">Built with: </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.builtWith}
        </Typography>
      </CardContent>

      <CardActions
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '0.5rem',
        }}
      >
        <Button
          href={props.view}
          target="_blank"
          rel="noreferrer"
          variant="contained"
          color="primary"
          /*size="small"*/
        >
          View Project
        </Button>
        <Button
          href={props.source}
          target="_blank"
          rel="noreferrer"
          variant="contained"
          color="secondary"
        >
          View Source
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProjectCard;
