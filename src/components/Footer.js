import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Copyright, FiberManualRecord } from '@material-ui/icons';

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      color: '#8c9dad',
      fontFamily: 'Verdana, sans-serif',
      paddingBottom: '1em',
      paddingTop: '1em',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        padding: '1.5em',
      },
    },
    link: {
      color: '#8c9dad',
      textDecoration: 'none',
      "&:hover": {
        color: '#4a5a68',
        textDecoration: 'underline',
        textDecorationStyle: 'wavy',
      },
    },
    dot: {
      fontSize: '0.5em',
      margin: '2em',
    },
    copyright: {
      fontSize: '1em'
    },
  }
});

export default function Footer() {
    
  const classes = useStyles();
  
  return (
    <div className={classes.footer}>
      <a href="#" className={classes.link}>Home</a>
      <FiberManualRecord className={classes.dot} />
      <a href="#about" className={classes.link}>About</a>
      <FiberManualRecord className={classes.dot} />
      <a href="#projects" className={classes.link}>Recent Projects</a>
      <FiberManualRecord className={classes.dot} />
      <a href="#contact" className={classes.link}>Contact</a>
      <FiberManualRecord className={classes.dot} />
      <Copyright className={classes.copyright}/> 2023 Marlisa Rebaum
    </div>
  );
};