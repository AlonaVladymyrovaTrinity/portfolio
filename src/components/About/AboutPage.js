import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavigateButton from '../ReusableComponents/NavigateButton/NavigateButton';
import JavaScriptIcon from '../../assets/javascript-icon.png';
import ReactIcon from '../../assets/react_icon.png';
import ReduxIcon from '../../assets/redux_icon.png';
import HTML5Icon from '../../assets/HTML5_icon.png';
import CSSIcon from '../../assets/CSS_icon.png';
import BootstrapIcon from '../../assets/bootstrap_icon.png';
import MaterialUiIcon from '../../assets/material-ui-logo.png';
import GithubIcon from '../../assets/github_icon.png';
import SqlIcon from '../../assets/sql_icon.png';

const StyledContainer = styled('div')({
  width: '100%',
  padding: '2rem 0',
});

const LeftContent = styled('div')({
  padding: '0 8%',
  color: '#000000',
});

const RightContent = styled('div')({
  overflow: 'hidden',
  padding: '0 8%',
});

const Article = styled('div')({
  textAlign: 'justify',
  margin: '2rem 0',
});

const SkillTitle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.5rem',
  marginBottom: '0.5rem',
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    width: 0,
    height: '4px',
    backgroundColor: '#975eb0',
    transition: '0.5s',
  },
  '&::before': {
    left: '50%',
    borderRadius: '0 2px 2px 0',
  },
  '&::after': {
    right: '50%',
    borderRadius: '2px 0 0 2px',
  },
  '&:hover': {
    '&::before, &::after': {
      width: '2.188rem',
    },
  },
});

const Img = styled('div')({
  width: '4.375rem',
  height: '4.375rem',
  position: 'relative',
  borderRadius: '2.813rem',
  backgroundColor: '#e2e2e2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '0.5s',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '4.375rem',
    background: 'hsla(282, 34%, 53%, 0.5)',
    borderRadius: '2.813rem 0 0 2.813rem',
    transition: '0.5s',
  },
});

const SkillBoxContainer = styled('div')({
  color: '#ddd',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-0.625rem)',
    transition: '0.5s',
  },
});

const SkillIcon = styled('img')({
  width: '3.125rem',
  zIndex: 2,
});

const AboutPage = () => {
  return (
    <StyledContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <LeftContent>
            <Typography variant="h5" style={{ fontWeight: 400 }}>
              Getting to Know Me Better
            </Typography>
            <main>
              <Article>
                <Typography
                  /*variant="h6"*/ sx={{
                    margin: '0.5rem',
                    color: '#000000',
                    fontSize: '1rem',
                  }}
                >
                  I'm a Frontend Developer with a Master's in Computer Science,
                  specializing in HTML, CSS, JavaScript, and React. My focus is
                  on creating accessible, responsive, and visually captivating
                  designs that seamlessly adapt to various devices.
                  <br />
                  <br />
                  With a keen eye for detail and a passion for user-centric
                  experiences, I merge technology and creativity to craft
                  seamless and engaging web interfaces. Let's bring your ideas
                  to life through innovative design and impeccable code.
                </Typography>
              </Article>
            </main>
            <NavigateButton
              linkName={'/contact'}
              variant={'contained'}
              color={'secondary'}
              children={'CONTACT'}
              fullWidth
            />
          </LeftContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <RightContent>
            <Typography variant="h5" style={{ fontWeight: 400 }}>
              My Key Skills
            </Typography>
            <Grid container spacing={2} style={{ margin: '1rem 0' }}>
              {[
                { icon: JavaScriptIcon, label: 'JavaScript' },
                { icon: ReactIcon, label: 'React' },
                { icon: ReduxIcon, label: 'Redux' },
                { icon: HTML5Icon, label: 'HTML5' },
                { icon: CSSIcon, label: 'CSS' },
                { icon: BootstrapIcon, label: 'Bootstrap' },
                { icon: MaterialUiIcon, label: 'Material-ui' },
                { icon: GithubIcon, label: 'Github' },
                { icon: SqlIcon, label: 'SQL' },
              ].map((skill, index) => (
                <Grid item xs={4} key={index}>
                  <SkillBoxContainer>
                    <SkillTitle>
                      <Img>
                        <SkillIcon src={skill.icon} alt={skill.label} />
                      </Img>
                      <Typography
                        sx={{
                          margin: '0.5rem',
                          color: '#000000',
                          fontSize: '1rem',
                        }}
                      >
                        {skill.label}
                      </Typography>
                    </SkillTitle>
                  </SkillBoxContainer>
                </Grid>
              ))}
            </Grid>
          </RightContent>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AboutPage;
