import React from 'react';
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';
import { Icon } from '@iconify/react';
import { Container, Grid, Typography, Link, Box, AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled('div')({
  padding: '3rem 0 0.7rem 0',
  color: '#ffffff',
});

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
  marginRight: '0.4rem',
  color: '#ffffff',
};

const CodewarsIconStyle = {
  width: '1.83rem',
  height: 'auto',
  color: '#ffffff',
  borderRadius: '0.2rem',
  marginTop: '0.10rem',
};

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <FooterContainer>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6}>
              <ContentColumn>
                <ContactWrapper>
                  <FaHome size={20} style={IconStyle} />
                  <Box style={BoldText}>
                    <Typography variant="subtitle1">
                      <Box component="span" style={BoldText}>
                        Location:
                      </Box>
                      San Francisco Bay Area, California
                    </Typography>
                    <Typography variant="subtitle1">United States</Typography>
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
                      <Box component="span" style={BoldText}>
                        Phone:
                      </Box>
                      +1 (925) 999-5013
                    </Link>
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
                      <Box component="span" style={BoldText}>
                        Email:
                      </Box>
                      alona.vladymyrova@gmail.com
                    </Link>
                  </Box>
                </ContactWrapper>
              </ContentColumn>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContentColumn>
                <Typography variant="h6" style={BoldText}>
                  About Me
                </Typography>
                <Typography variant="body1">
                  Front-end developer • Master's in Computer Science
                </Typography>
                <Typography variant="body1">
                  Fully Work Authorized • No Visa Sponsorship Required
                </Typography>
                <Social>
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
        </Container>
      </FooterContainer>
      <Typography
        variant="body1"
        color="inherit"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: '0 1rem 1rem 0',
        }}
      >
        &copy; {new Date().getFullYear()} Alona Vladymyrova
      </Typography>
    </AppBar>
  );
};

export default Footer;
