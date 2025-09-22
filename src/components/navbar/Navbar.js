import React, { useEffect, useState, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { Link, useLocation } from 'react-router-dom';
import NavbarDrawer from './NavbarDrawer';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import myResume from '../../assets/Resume_Alona_Vladymyrova_09_09_2025.pdf';
import { useColorContext } from '../../context/ColorContext';
import PaletteIcon from '@mui/icons-material/Palette';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const CustomButton = styled(Button)(({ theme }) => ({
  marginLeft: '1rem',
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: 'hsla(0, 0%, 100%, 0.3)',
  borderRadius: '1.25rem',
  textShadow: '0 0 2px #000',
  transition: 'background-color 0.5s',
  '&:hover': {
    backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
  },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  marginRight: '1rem',
  backgroundColor: 'hsla(0, 0%, 100%, 0.3)',
  transition: 'background-color 0.5s',
  '&:hover': {
    backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
  boxShadow:
    '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
}));

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    marginRight: theme.spacing(1),
    color: '#fff',
    textShadow: '0 0 2px #000',
    fontWeight: 'bold',
    opacity: '1',
    '&.Mui-selected': {
      color: '#fff',
      fontWeight: 'bold',
      textShadow: '0 0 2px #000',
    },
  })
);

const transparentNavbarStyle = {
  backgroundColor: 'transparent',
  boxShadow: 'none',
  backgroundImage:
    'linear-gradient(to bottom, hsla(251, 96%, 56%, 0.7), hsla(251, 96%, 56%, 0.5), hsla(251, 96%, 56%, 0.4),hsla(251, 96%, 56%, 0.3),hsla(251, 96%, 56%, 0.2), hsla(251, 96%, 56%, 0.1),transparent)',
};

const Navbar = () => {
  const { handleColorChange } = useColorContext();
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [value, setValue] = useState(false);

  useEffect(() => {
    setTooltipOpen(false);
  }, [handleColorChange]);

  useEffect(() => {
    setTooltipOpen(true);
    setTimeout(() => setTooltipOpen(false), 2000);
  }, []);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  // A flag to check if it's the first render
  const isFirstRender = useRef(true);
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const pathToValue = {
      '/': 0,
      '/project': 1,
      '/about': 2,
      '/contact': 3,
    };
    if (!isFirstRender.current) {
      if (location.pathname in pathToValue) {
        setValue(pathToValue[location.pathname]);
      }
    } else {
      isFirstRender.current = false;
    }
  }, [location.pathname]);

  const CustomLogoLink = styled(Typography)({
    textTransform: 'uppercase',
    textShadow: '0 0 2px #000',
    fontFamily:
      'Audiowide, Russo One, Black Han Sans, Rowdies, ADLaM Display, Archivo Black, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '400',
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textShadow: '3px 3px 20px #ff99cc, -2px 1px 30px #ff99cc',
    },
  });

  return (
    <>
      <AppBar position="absolute" style={transparentNavbarStyle}>
        <Toolbar>
          <Tooltip title="Change Colors" arrow open={tooltipOpen}>
            <CustomIconButton
              onClick={handleColorChange}
              aria-label="Change Colors" // ARIA label for accessibility
              onMouseEnter={() => {
                setTimeout(() => setTooltipOpen(true), 800); // Delay on mouse enter for Tooltip show
              }}
              onMouseLeave={() => setTooltipOpen(false)}
              //title="Change Colors" // title attribute
            >
              <PaletteIcon fontSize="small" sx={{ color: '#fff' }} />
            </CustomIconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }}>
            <CustomLogoLink variant="h7" label="Home" component={Link} to="/">
              Alona
            </CustomLogoLink>
          </Box>
          {isMatch ? (
            <>
              <Typography>Menu</Typography>
              <NavbarDrawer />
            </>
          ) : (
            <>
              <StyledTabs
                textColor="inherit"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
              >
                <StyledTab label="Home" component={Link} to="/" />
                <StyledTab label="Projects" component={Link} to="/project" />
                <StyledTab label="About" component={Link} to="/about" />
                <StyledTab label="Contact" component={Link} to="/contact" />
              </StyledTabs>
              <CustomButton
                variant="contained"
                color="secondary"
                aria-label="Open resume"
                endIcon={<KeyboardArrowRightIcon />}
                href={myResume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </CustomButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
