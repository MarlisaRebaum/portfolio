import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, makeStyles, Typography } from '@material-ui/core';
import { Row } from 'react-bootstrap';
import PetAppVideo from '../static/pet-sitting-app.mp4';
import SpotifyClone from '../static/spotify.JPG';
import TypeTest from '../static/type-test.JPG';
import PasswordGenerator from '../static/password-generator.JPG';
import TodoList from '../static/todo-screenshot.JPG';
import Coinlayer from '../static/coinlayer-api.png';
import LibraryApp from '../static/library-app.png';
import RockPaperScissors from '../static/rock-paper-scissors.JPG';

const useStyles = makeStyles({
  bgColor: {
    backgroundColor: '#f8f9fa',
  },
  projects: {
    paddingBottom: '10%',
    paddingTop: '5%',
  },
  header: {
    color: '#4a5a68',
    fontFamily: 'Verdana, sans-serif',
    fontSize: '40px',
    textAlign: 'center',
    textShadow: '2px 2px #dee7ef',
  },
  cardMedia: {
    boxShadow: '1px 2px 10px grey'
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    "&:hover": {
      color: 'black',
    },
  }
});

export default function Projects() {
    
  const classes = useStyles();

  return (
    <div id="projects" className={classes.bgColor}>
      <div className={classes.projects}>
      <Typography className={classes.header}>Recent Projects</Typography>
      <Row className="row col-lg-12 col-md-8 col-sm-4 col-xs-2 justify-content-center">
      <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="video"
            autoPlay
            loop
            muted
            src={PetAppVideo}
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pet Sitting App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using ReactJS and Firebase, I created a full stack application that 
              allows users to create an account, create pet sitting listings, 
              update and delete listings, and message other users.
            </Typography>
            <br />
            <Chip label="React JS" variant="outlined" className="m-1"/>
            <Chip label="Firebase" variant="outlined" className="m-1"/>
            <Chip label="HTML5" variant="outlined" className="m-1"/>
            <Chip label="CSS3" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/happy-paws-pet-sitters-app.git" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
            <Button size="small"><a href="https://pet-sitting-app-a1421.web.app/" 
              target="_blank" rel="noreferrer" className={classes.link}>Live</a>
            </Button>
          </CardActions>
        </Card>
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="img"
            src={SpotifyClone}
            alt="Spotify Clone Project Screenshot"
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Spotify Clone
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using ReactJS and Spotify's public API, I created a Spotify clone
              that allows users to log in using their existing Spotify account.
            </Typography>
              <br />
              <Chip label="ReactJS" variant="outlined" className="m-1"/>
              <Chip label="HTML5" variant="outlined" className="m-1"/>
              <Chip label="CSS3" variant="outlined" className="m-1"/>
              <Chip label="Spotify API" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/spotify-clone" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
          </CardActions>
        </Card>
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="img"
            src={TypeTest}
            alt="Type Speed Test Screenshot"
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Type Speed Test
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using vanilla JavaScript, HTML, CSS, and a random text generator 
              API, I created a type speed app that lets users determine their 
              type speed and accuracy.
            </Typography>
            <br />
            <Chip label="JavaScript" variant="outlined" className="m-1"/>
            <Chip label="HTML5" variant="outlined" className="m-1"/>
            <Chip label="CSS3" variant="outlined" className="m-1"/>
            <Chip label="Random Text API" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/type-speed-test" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
            <Button size="small"><a href="https://marlisarebaum.github.io/type-speed-test/" 
              target="_blank" rel="noreferrer" className={classes.link}>Live</a>
            </Button>
          </CardActions>
        </Card>
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="img"
            src={PasswordGenerator}
            alt="Password Generator App Screenshot"
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Password Generator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using JavaScript, HTML, and CSS I created password generator app that allows
              users to generate a password, selecting specifications including
              character length and type. Users can copy the password to their 
              clipboard.
            </Typography>
            <br />
            <Chip label="JavaScript" variant="outlined" className="m-1"/>
            <Chip label="HTML5" variant="outlined" className="m-1"/>
            <Chip label="CSS3" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/password-generator" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
            <Button size="small"><a href="https://marlisarebaum.github.io/password-generator/" 
              target="_blank" rel="noreferrer" className={classes.link}>Live</a>
            </Button>
          </CardActions>
        </Card>
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="img"
            src={TodoList}
            alt="Todo List Project Screenshot"
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Todo List
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using Vue.js, HTML, and CSS, I created a todo list app that allows
              users to add, edit, and delete items from their todo list.
            </Typography>
              <br />
              <Chip label="Vue.js" variant="outlined" className="m-1"/>
              <Chip label="HTML5" variant="outlined" className="m-1"/>
              <Chip label="CSS3" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/todo-list" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
            <Button size="small"><a href="https://marlisarebaum.github.io/todo-list/" 
              target="_blank" rel="noreferrer" className={classes.link}>Live</a>
            </Button>
          </CardActions>
        </Card>
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="img"
            src={Coinlayer}
            alt="Coinlayer API screenshot"
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Current Crypto App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using Coinlayer's public API, I created an app that uses API routes
              to display current cryptocurrency prices.
            </Typography>
            <br />
            <Chip label="JavaScript" variant="outlined" className="m-1"/>
            <Chip label="HTML5" variant="outlined" className="m-1"/>
            <Chip label="Bootstrap" variant="outlined" className="m-1"/>
            <Chip label="Coinlayer API" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/coinlayer-api.git" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
          </CardActions>
        </Card>
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="img"
            src={LibraryApp}
            alt="Library App Screenshot"
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Book Inventory App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The frontend of this application is created using React TypeScript 
              and the backend using Flask, PostgreSQL, and Firebase. The app 
              allows users to log in or create an account. Once logged in, users 
              are able to view the library book inventory, and add, update, and 
              delete book entries. The app is hosted on Firebase. 
            </Typography>
            <br />
            <Chip label="React" variant="outlined" className="m-1"/>
            <Chip label="TypeScript" variant="outlined" className="m-1"/>
            <Chip label="Flask" variant="outlined" className="m-1"/>
            <Chip label="PostgreSQL" variant="outlined" className="m-1"/>
            <Chip label="HTML5" variant="outlined" className="m-1"/>
            <Chip label="CSS3" variant="outlined" className="m-1"/>
            <Chip label="Firebase" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/react-library-app.git" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
            <Button size="small"><a href="https://react-library-app-7257a.web.app/" 
              target="_blank" rel="noreferrer" className={classes.link}>Live</a>
            </Button>
          </CardActions>
        </Card>
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="img"
            src={RockPaperScissors}
            alt="Rock Paper Scissors Code Screenshot"
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rock Paper Scissors
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using Python, created a rock-paper-scissors that allows users to
              play against a computer, which randomizes its responses.
            </Typography>
            <br />
            <Chip label="Python" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/rock-paper-scissors" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
          </CardActions>
        </Card>
      </Row>
      </div>
    </div>
  );
};