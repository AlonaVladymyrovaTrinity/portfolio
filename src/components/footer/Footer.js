import React from 'react';
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';
import { Icon } from '@iconify/react';
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  CssBaseline,
  /*Paper AppBa
  TableFooter,r*/
} from '@mui/material';
import { styled } from '@mui/material/styles';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// const FooterContainer = styled('footer')({
//   padding: '3rem 0 0.7rem 0',
//   color: '#ffffff',
//   position: 'relative',
//   bottom: '0',
//   width: '100%',
//   left: '0',
//   // position: 'sticky',
//   // bottom: '0',
//   // minHeight: '30vh',
// });

// const FooterContainer = styled('footer')({
//   backgroundColor: '#000', //(theme) => theme.palette.primary.main,
//   color: '#fff',
//   display: 'flex',
//   flexDirection: 'column',
//   // minHeight: '30rem',
// });

const ContentColumn = styled('div')({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
});

const Social = styled('div')({
  marginTop: '1rem',
  display: 'flex',
});

const ContactWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: '0.7rem',
});

const IconStyle = {
  color: '#ffffff',
  marginRight: '1rem',
  minWidth: '1.25rem',
};

const BoldText = {
  fontWeight: 'bold',
  // marginRight: '0.4rem',
  color: '#ffffff',
};

const CodewarsIconStyle = {
  width: '2.2rem',
  height: 'auto',
  color: '#ffffff',
  borderRadius: '0.2rem',
  marginTop: '0.15rem',
};

const Footer = () => {
  return (
    // <AppBar position="static" color="primary">
    // <Box
    //   sx={{
    //     backgroundColor: (theme) => theme.palette.primary.main,
    //     p: '1rem 0',
    //   }}
    //   component="footer"
    // >
    // <TableFooter
    //   sx={{
    //     backgroundColor: (theme) => theme.palette.primary.main,
    //   }}
    //   style={{ width: '100%' }}
    // >
    // <FooterContainer
    //   sx={{
    //     backgroundColor: (theme) => theme.palette.primary.main,
    //   }}
    // >
    <>
      <CssBaseline />

      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          height: '100%',
          display: 'flex',
          WebkitBoxPack: 'center',
          msFlexPack: 'center',
          WebkitJustifyContent: 'center',
          justifyContent: 'center',
        }}
        component="footer"
      >
        {/* <FooterContainer> */}
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: '0', sm: '0', md: 2 }}>
            <Grid item xs={12} sm={12} md={5}>
              <ContentColumn>
                <Typography variant="h6" style={BoldText} gutterBottom>
                  About Me
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                    paddingBottom: '0.7rem',
                  }}
                  color="white"
                >
                  • Front-end developer
                </Typography>
                <Typography
                  color="white"
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                    paddingBottom: '0.7rem',
                  }}
                >
                  • Master's degree in Computer Science
                </Typography>
                <Typography
                  color="white"
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                    paddingBottom: '0.7rem',
                  }}
                >
                  • Fully Work Authorized
                </Typography>
                <Typography
                  color="white"
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                    paddingBottom: '0.7rem',
                  }}
                >
                  • No Visa Sponsorship Required
                </Typography>
              </ContentColumn>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <ContentColumn>
                <Typography variant="h6" style={BoldText} gutterBottom>
                  Contact Me
                </Typography>
                <ContactWrapper>
                  <FaHome size={20} style={IconStyle} />
                  <Box>
                    <Typography variant="h6" style={BoldText} display="inline">
                      Location:
                    </Typography>
                    <Typography
                      variant="body1"
                      display="inline"
                      sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                      }}
                      color="white"
                    >
                      San Francisco Bay Area, California
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                      }}
                      color="white"
                    >
                      United States
                    </Typography>
                  </Box>
                </ContactWrapper>

                <ContactWrapper>
                  <FaMailBulk size={20} style={IconStyle} />
                  <Box>
                    <Link
                      href="mailto:alona.vladymyrova@gmail.com"
                      color="inherit"
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        variant="h6"
                        style={BoldText}
                        display="inline-block"
                        color="white"
                      >
                        Email:
                      </Typography>
                      <Typography
                        variant="body1"
                        display="inline"
                        sx={{
                          fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                        }}
                        color="white"
                      >
                        alona.vladymyrova@gmail.com
                      </Typography>
                    </Link>
                  </Box>
                </ContactWrapper>
                <ContactWrapper>
                  <FaPhone size={20} style={IconStyle} />
                  <Box>
                    <Link
                      href="tel:+19259995013"
                      color="inherit"
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        variant="h6"
                        style={BoldText}
                        display="inline-block"
                        color="white"
                      >
                        Phone:
                      </Typography>
                      <Typography
                        variant="body1"
                        display="inline-block"
                        sx={{
                          fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                        }}
                        color="white"
                      >
                        +1 (925) 999-5013
                      </Typography>
                    </Link>
                  </Box>
                </ContactWrapper>
              </ContentColumn>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <ContentColumn>
                <Typography
                  variant="h6"
                  style={BoldText}
                  // gutterBottom
                >
                  Follow Me
                </Typography>
                <Social>
                  {/* <Link
                  href="https://github.com/AlonaVladymyrovaTrinity"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <BottomNavigationAction
                    label="Recents"
                    icon={<FaGithub size={40} style={IconStyle} />}
                  />
                </Link> */}
                  <Link
                    href="https://github.com/AlonaVladymyrovaTrinity"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={40} style={IconStyle} />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/alona-vladymyrova"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={40} style={IconStyle} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://www.codewars.com/users/AlonaVladymyrova"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Codewars Profile"
                  >
                    <Icon
                      icon="simple-icons:codewars"
                      style={CodewarsIconStyle}
                    />
                    <span className="sr-only">Codewars</span>
                  </Link>
                </Social>
              </ContentColumn>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            color="white"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              margin: '0 1rem 1rem 0',
            }}
          >
            &copy; {new Date().getFullYear()} All rights reserved
          </Typography>
        </Container>
      </Box>
    </>
    // {/* </FooterContainer> */}
    // </TableFooter>
    // {/* </Box> */}
    // </AppBar>
  );
};

export default Footer;
