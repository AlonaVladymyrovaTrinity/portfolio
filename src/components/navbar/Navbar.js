import React /*, { useState }*/ from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import myResume from '../../assets/Resume_Alona_Vladymyrova 07_19_23.pdf';

const Navbar = () => {
  // const [open, setOpen] = useState(false);

  // const toggleMenu = () => {
  //   setOpen(!open);
  // };

  // const [color, setColor] = useState(false);

  // const changeColor = () => {
  //   if (window.scrollY >= 100) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  // window.addEventListener('scroll', changeColor);

  return (
    // <AppBar position="static" style={{ marginBottom: '2rem' }}>
    <AppBar
      position="fixed" /*className={color ? 'header header-bg' : 'header'}*/
    >
      <Toolbar>
        {/* <Link to="/"> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Alona Vladymyrova
        </Typography>
        {/* </Link> */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/project">
          Projects
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        {/* <a target="_blank" rel="noreferrer" href={myResume} download>
          Resume
        </a> */}
        <Link target="_blank" rel="noreferrer" to={myResume} download>
          <Typography>RESUME</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
