import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Button,
  ButtonGroup,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core";
import news from "../../resources/imgs/parallax/lit fest.jpg";
import Events from "./events";

const useStyles = makeStyles((theme) => ({
  picture: {
    display: "grid",
    justifyContent: "center",
  },
}));

function LitFest() {
  const classes = useStyles();

  const [about, setAbout] = useState(true);
  const [gallery, setGallery] = useState(false);
  const [highlights, setHighlights] = useState(false);

  const handleAbout = () => {
    setAbout(true);
    setGallery(false);
    setHighlights(false);
  };

  const handleGallery = () => {
    setAbout(false);
    setGallery(true);
    setHighlights(false);
  };

  const handleHighlights = () => {
    setAbout(false);
    setGallery(false);
    setHighlights(true);
  };

  return (
    <React.Fragment>
      <div id='newsImgDiv'>
        <Paper>
          <a href='http://bit.ly/litfest2022' target='_blank'>
            <img
              src={news}
              style={{ height: "auto", maxWidth: "100%" }}
              alt='news'
              title='Click to Register'
            />
          </a>
        </Paper>
      </div>

      <div id='inPgNav'>
        <Paper elevation={5} id='inPgNavBtn'>
          <Button color='primary' variant='contained' onClick={handleAbout}>
            About
          </Button>
        </Paper>

        <Paper elevation={5} id='inPgNavBtn'>
          <Button
            color='primary'
            variant='contained'
            onClick={handleHighlights}
          >
            Highlights
          </Button>
        </Paper>

        <Paper elevation={5} id='inPgNavBtn'>
          <Button color='primary' variant='contained' onClick={handleGallery}>
            Gallery
          </Button>
        </Paper>
      </div>

      {about ? (
        <React.Fragment>
          <Paper id='contentDiv' elevation={5}>
            <Typography id='contentHead' variant='h6'>
              Content Heading
            </Typography>
            <hr />
            <Typography id='contentBody' paragraph>
              Content Body... lorem ipsum dolor ametlorem ipsum dolor ametlorem
              ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor amet
            </Typography>
          </Paper>
          <Events />
        </React.Fragment>
      ) : (
        ""
      )}
      {gallery ? (
        <Typography paragraph>
          Gallery <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      ) : (
        ""
      )}
      {highlights ? (
        <Typography paragraph>
          highlights
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default LitFest;
