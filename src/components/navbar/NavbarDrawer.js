import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BadgeIcon from '@mui/icons-material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import myResume from '../../assets/Resume_Alona_Vladymyrova_09_09_2025.pdf';
import { Link } from 'react-router-dom';

const NavbarDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    textTransform: 'uppercase',
  };
  const iconStyle = {
    marginRight: '5px',
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <List style={{ margin: '0 3rem' }}>
          {/* Home */}
          <ListItemButton key={0} onClick={() => setOpenDrawer(false)}>
            <HomeIcon style={iconStyle} aria-label="Home" />
            <ListItemText>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </ListItemText>
          </ListItemButton>
          {/* Projects */}
          <ListItemButton key={1} onClick={() => setOpenDrawer(false)}>
            <BusinessCenterIcon style={iconStyle} aria-label="Projects" />
            <ListItemText>
              <Link to="/project" style={linkStyle}>
                Projects
              </Link>
            </ListItemText>
          </ListItemButton>
          {/* About */}
          <ListItemButton key={2} onClick={() => setOpenDrawer(false)}>
            <BadgeIcon style={iconStyle} aria-label="About" />
            <ListItemText>
              <Link to="/about" style={linkStyle}>
                About
              </Link>
            </ListItemText>
          </ListItemButton>
          {/* Contact */}
          <ListItemButton key={3} onClick={() => setOpenDrawer(false)}>
            <EmailIcon style={iconStyle} aria-label="Contact" />
            <ListItemText>
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </ListItemText>
          </ListItemButton>
          {/* Resume (PDF) */}
          <ListItemButton key={4} onClick={() => setOpenDrawer(false)}>
            <PictureAsPdfIcon style={iconStyle} aria-label="Resume" />
            <ListItemText>
              <Link
                style={linkStyle}
                target="_blank"
                rel="noreferrer"
                to={myResume}
              >
                Resume
              </Link>
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: 'white', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-label="Open menu"
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
export default NavbarDrawer;
