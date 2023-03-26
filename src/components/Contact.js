import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import {
  Button,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { GitHub, LinkedIn, Send } from '@material-ui/icons';
import '../App.css';

const useStyles = makeStyles((theme) => {
  return {
    contact: {
      backgroundColor: '#dee7ef',
      display: 'flex', 
      flexDirection: 'row',
      padding: '5%',
      paddingLeft: '15%',
      paddingRight: '15%',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: 0,
      },
    },
    contactForm: {
      backgroundColor: '#f8f9fa',
      border: '1px solid lightgrey',
      borderRadius: '5px',
      boxShadow: '1px 2px 10px grey',
      marginRight: '20px',
      padding: '5rem',
      textAlign: 'center',
      width: '125%',
      [theme.breakpoints.down('sm')]: {
        border: 'none',
        boxShadow: 'none',
        margin: 0,
        padding: '2rem',
        width: '100%',
      },
    },
    header: {
      color: '#4a5a68',
      fontFamily: 'Roboto, arial, sans-serif', 
      fontSize:'2em',
      textAlign: 'center', 
    },
    textfield: {
      backgroundColor: 'white',
    },
    sendBtn: {
      backgroundColor: '#8c9dad',
      color: 'white',
      marginTop: '2em', 
      width: '75%',
    },
    contactInfo: {
      marginLeft: '20px',
      padding: '20px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginTop: '10px',
        padding: 0, 
        paddingBottom: '20px',
      },
    },
    contactText: {
      color: '#8c9dad',
      fontFamily: 'Verdana, sans-serif',
      fontSize: '20px',
      lineHeight: 2,
      marginLeft: '75px',
      marginRight: '75px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '15px',
        margin: '15px',
      },
    },
    icons: {
      color: '#8c9dad',
      fontSize: '50px',
      margin:  '10px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '35px',
        margin: '5px',
      },
      "&:hover": {
        color: 'white'
      },
    },
  }
});

export default function Contact() {
  
  const form = useRef();
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_77k6jx1',
      'template_oap7mor', 
      form.current, 
      'ARvsHxTAmEMI8QDzv'
    )
    .then(
      (result) => {
        console.log(result.text);
        toast("Message successfully sent", { type: "success" });
    }, (error) => {
      console.log(error.text);
      toast("Unable to send message", { type: "error" });
    });
      setName('');
      setEmail('');
      setMessage('');
    };

  return (
    <div id="contact" className={classes.contact}>
      <div className={classes.contactForm}>
        <Typography className={classes.header}>Send a Message</Typography>
        <form ref={form}>
          <TextField
            name="user_name"
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={event => setName(event.target.value)}
            fullWidth
            required
            className={classes.textfield}
          />
          <TextField
            type="email"
            name="user_email"
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={event => setEmail(event.target.value)}
            fullWidth
            required
            className={classes.textfield}
          />
          <TextField
            name="message"
            label="Message"
            multiline={true}
            rows={8}
            variant="outlined"
            margin="normal"
            value={message}
            onChange={event => setMessage(event.target.value)}
            fullWidth
            required
            className={classes.textfield}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={sendEmail}
            endIcon={<Send />}
            className={classes.sendBtn}
            >Send Message
          </Button>
        </form>
        </div>
        <div className={classes.contactInfo}>
        <Typography className={classes.header}>Get in Touch</Typography>
        <Typography className={classes.contactText}>
          Whether you want to get in touch, talk about a project collaboration, 
          or just say hi, I'd love to hear from you. Simply fill the from to send me
          an email or let's connect on LinkedIn!
        </Typography>
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
  );
};