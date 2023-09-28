import React, { useEffect, useState, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import NavbarDrawer from './NavbarDrawer';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import myResume from '../../assets/Resume_Alona_Vladymyrova_07_19_23.pdf';

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState(false);
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

  return (
    <>
      <AppBar position="fixed">
        {/* className={color ? 'header header-bg' : 'header'} */}
        <Toolbar>
          <Typography
            variant="h8"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ textTransform: 'uppercase' }}
          >
            Alona Vladymyrova
          </Typography>
          {isMatch ? (
            <>
              <Typography>Menu</Typography>
              <NavbarDrawer />
            </>
          ) : (
            <Tabs
              textColor="inherit"
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
            >
              <Tab label="Home" component={Link} to="/" />
              <Tab label="Projects" component={Link} to="/project" />
              <Tab label="About" component={Link} to="/about" />
              <Tab label="Contact" component={Link} to="/contact" />
              <Tab
                label={
                  <>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        fontSize: '0.875rem',
                        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                      }}
                    >
                      <DownloadForOfflineIcon
                        style={{ fontSize: 'inherit', marginRight: '2px' }}
                      />
                      Resume
                    </div>
                  </>
                }
                component="a"
                href={myResume}
                download
              />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
