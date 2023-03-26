import React from 'react';
import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import ProfilePhoto from '../static/marlisa-rebaum.jpg';

const useStyles = makeStyles((theme) => {
  return {
    about: {
      backgroundColor: '#f8f9fa',
      borderBottom: '2px solid lightgrey',
      paddingBottom: '5%',
      paddingTop: '5%',
    },
    container: {
      backgroundColor: '#f8f9fa',
      border: '1px solid lightgrey',
      borderRadius: '5px',
      boxShadow: '1px 2px 10px grey',
      padding: '50px',
      width: '75%',
      [theme.breakpoints.down('sm')]: {
        border: 'none',
        boxShadow: 'none',
        width: '100%',
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    image: {
      borderRadius: '50%',
      boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      height: '30%',
      margin: '30px',
      width: '30%',
      [theme.breakpoints.down('sm')]: {
        height: '75%',
        width: '75%',
      },
    },
    aboutText: {
      textAlign: 'center',
    },
    text: {
      fontFamily: 'Verdana, sans-serif',
      lineHeight: 1.75,
      marginLeft: '5%',
      textAlign: 'justify',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
    contactBtn: {
      backgroundColor: '#8c9dad',
      color: 'white',
      marginTop: '5%',
      width: '50%',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      "&:hover": {
        color: 'white',
      },
    },
  }
});

export default function About() {
    
  const classes = useStyles();
    
  return (
    <div className={classes.about} id="about">
      <Container className={classes.container}>
          <div className={classes.content}>
            <img src={ProfilePhoto} alt="Picture of me, Marlisa Rebaum" className={classes.image}/>
            <div className={classes.aboutText}>
              <Typography className={classes.text}>
                  I have always been someone who has enjoyed both creative and 
                  logical thinking. I always thought I had to choose between a 
                  creative or logical career, until I discovered web development. 
                  I love that I can use my creative side to design and my logical 
                  side to code, or a combination of both to creatively solve 
                  intricate problems.
                  <br />
                  <br />
                  My background did not traditionally start in computer science, 
                  but instead I have a master's degree in teaching. Throughout my 
                  educational journey, I always felt like something was missing. 
                  Although I loved the challenges of using creative problem 
                  solving on the spot to adjust lessons to current needs and 
                  situations, I felt a sense of stagnancy with the lack of 
                  opportunities to constantly grow and shift into new positions. 
                  I decided to embark on my journey of completing Coding Temple's 
                  full-stack web development coding bootcamp and finally found my 
                  missing puzzle piece. I realized that on my strive for a career 
                  I was passionate about, I was missing the opportunity for endless 
                  opportunities for learning and growth. Being a fast and curious 
                  learner, continuous challenges and new opportunities for learning 
                  are what keep me motivated in my work.
                  <br />
                  <br />
                  I never realized how similar skills needed for teaching and 
                  software engineering are, until I started my journey as a 
                  software engineer. As a teacher, you are constantly having to 
                  verbalize and communicate thought processes, something that as 
                  a software engineer helps improve communication within a team. 
                  As a teacher, time management is vital to ensure students are 
                  taught everything expected of them during the school year, a 
                  skill software engineers need to juggle multiple projects at 
                  once and stay on track to meet deadlines. As a teacher, 
                  observations, reflections, and feedback are used to constantly 
                  adjust and tweak lessons to strive to make them better. Those 
                  same skills help software engineers create the best user 
                  interfaces and code possible. I currently work as a full-stack
                  web developer for DKW Communications, where I develop and manage
                  web applications for the United States Department of the Interior.
                  <br />
                  <br />
                  Have an interesting project you are working on? Let's chat!
              </Typography>
              <Button margin="normal" variant="contained" className={classes.contactBtn}>
                <a href="#contact" className={classes.link}>Contact Me</a>
              </Button>
              </div>
          </div>
      </Container>
    </div>
  );
};