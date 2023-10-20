import React from 'react';
import { styled } from '@mui/material/styles';
import bgImage from '../../assets/AlonaDev.png';
import NavigateButton from '../ReusableComponents/NavigateButton/NavigateButton';
import { Grid, Typography, Box } from '@mui/material';

const StyledContainer = styled(Box)({
  width: '100%',
  padding: '2rem 0',
});
const LeftContent = styled(Box)({
  padding: '0 8%',
  color: '#000000',
});
const RightContent = styled(Box)({
  padding: '0 8%',
});
const Article = styled(Box)({
  textAlign: 'justify',
  margin: '2rem 0',
});
const ButtonContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.625rem',
});

const HomePageImg = styled('img')({
  width: '100%',
  height: 'auto',
});

const CustomButton = styled(NavigateButton)(({ theme }) => ({
  backgroundImage: theme.palette.custom.main.backgroundImage,
  color: theme.palette.custom.main.color,
  transition: 'background-color 0.5s',
  '&:hover': {
    opacity: '0.7',
  },
}));

const HomePage = () => {
  return (
    <StyledContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <LeftContent>
            <Typography variant="h5" style={{ fontWeight: 400 }}>
              Hey! I'm Alona
            </Typography>
            <main>
              <Article>
                <Typography
                  sx={{
                    margin: '0.5rem',
                  }}
                >
                  Welcome to my web portfolio, an insight into my journey as a
                  Front-end Developer. Here, I invite you to explore my skills
                  and expertise in web development technologies. <br /> <br />{' '}
                  With a passion for creating engaging web experiences and a
                  dedication to design and functionality, my projects showcase
                  my commitment to user-friendly web solutions.
                  <br /> <br /> From responsive design to interactive
                  interfaces, my work spans modern web development, reflecting
                  my passion for innovation and technology.
                </Typography>
              </Article>
            </main>
            <ButtonContainer>
              <Box mt="2rem">
                <NavigateButton
                  linkName={'/project'}
                  variant={'contained'}
                  color={'primary'}
                  children={'PROJECTS'}
                  fullWidth
                />
              </Box>
              <Box mt="2rem">
                <CustomButton
                  linkName={'/contact'}
                  variant={'contained'}
                  color={'secondary'}
                  children={'Hire me'}
                  fullWidth
                />
              </Box>
            </ButtonContainer>
          </LeftContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <RightContent>
            <Grid container spacing={2} style={{ margin: '1rem 0' }}>
              <HomePageImg src={bgImage} alt="Front-end developer" />
            </Grid>
          </RightContent>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
export default HomePage;
