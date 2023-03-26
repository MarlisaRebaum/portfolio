import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Container, Nav, Navbar } from 'react-bootstrap';

const useStyles = makeStyles({
  navbar: {
    fontFamily: 'Verdana, sans-serif',
    marginLeft: '5em',
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  navbarBrand: {
    color: '#4a5a68',
    fontSize: '25px',
    textShadow: '2px 2px #dee7ef',
  },
  navbarItem: {
    color: '#8c9dad',
    fontSize: '20px',
    marginLeft: '10em',
    "&:hover": {
      color: '#4a5a68',
      textDecoration: 'underline',
      textDecorationStyle: 'wavy',
    },
  }
});

export default function NavbarComponent() {
  
  const classes = useStyles();
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow'>
      <Container className={classes.navbar}>
        <Navbar.Brand href="#" className={classes.navbarBrand}>Marlisa Rebaum</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto justify-content-end">
              <Nav.Link href="#about" className={classes.navbarItem}>About</Nav.Link>
              <Nav.Link href="#projects" className={classes.navbarItem}>Recent Projects</Nav.Link>
              <Nav.Link href="#contact" className={classes.navbarItem}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};