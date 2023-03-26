import React from 'react';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';
import BackgroundImg from '../static/background.png';
import '../App.css';

const useStyles = makeStyles((theme) => {
  return {
    hero: {
      alignItems: 'center',
      display: 'flex',
      height: '90vh',
      justifyContent: 'center',
      width: '100%',
      [theme.breakpoints.down('lg')]: {
        height: '90vh',
      },
      [theme.breakpoints.down('md')]: {
        height: '55vh',
      },
      [theme.breakpoints.down('sm')]: {
        height: '20vh',
      },
      [theme.breakpoints.down('xs')]: {
        height: '15vh',
      },
    },
    heroImg: {
      boxShadow: '0 8px 6px -6px grey',
      left: 0,
      minHeight: 'auto',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -1,
    },
    heroText: {
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      textAlign: 'center',
      width: '100%',
      zIndex: 1,
    },
    mainText: {
      fontFamily: 'Verdana, sans-serif',
      fontSize: '60px',
      marginBottom: '0.5em',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        marginBottom: '0.5em',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
        marginBottom: 0,
      },
    },
    description: {
      fontFamily: 'Verdana, sans-serif',
      fontSize: '30px',
      marginBottom: '1em',
      [theme.breakpoints.down('sm')]: {
        fontSize: '10px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '5px'
      },
    },
    icons: {
      color: 'white',
      fontSize: '50px',
      margin:  '10px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '25px',
        margin: '5px',
      },
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      "&:hover": {
        color: '#4a5a68',
      },
    },
  }
});

export default function Home() {
  
  const classes = useStyles()
  
  return (
    <>
      <div className={classes.hero}>
        <img src={BackgroundImg} alt="Blue Mountains" className={classes.heroImg}/>
        <div className={classes.heroText}>
          <h1 className={classes.mainText}>Hi, I'm Marlisa Rebaum</h1>
            <Typed strings={[
                "Full-Stack Web Developer",
            ]}
            typeSpeed={200}
            loop
            className={classes.description}
            />
            <div>
              <a href="https://www.linkedin.com/in/marlisarebaum/" 
                target="_blank" rel="noreferrer"><LinkedIn className={classes.icons}/>
              </a>
              <a href="https://github.com/MarlisaRebaum" target="_blank" 
                rel="noreferrer"><GitHub className={classes.icons}/>
              </a>
            </div>
        </div>
      </div>
    </>
  );
};