import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Container from '@material-ui/core/Container';
// import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  bg: {
    width: 600,
    height: 80,
    margin: 480,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#0fefbd',
  },
  box: {
    borderRadius: 8,
    backgroundColor: '#a5a8ae',
    width: 240,
    height: 304,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fafafa',
    margin: 40,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'pink',
  },

  TextStyle2: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1a1b1c',
  },

  TextStyle3: {
    margin: 70,
    textAlign: 'center',
    fontSize: 11,
    fontStyle: 'normal',
  },

  btn: {
    margin: 50,
    textAlign: 'center',
    fontSize: 11,
    justifyContent: 'space-between',
    borderRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },

  btn1: {
    background: '#5545ba',
    border: 0,
    borderRadius: 8,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#fafafa',
    height: 48,
    padding: '0 30px',
    justifyContent: 'space-between',
    marginRight: 40,
  },
});

export default function Findps2() {
  const classes = useStyles();
  const [Findps, setFindps] = useState('+password');

  useEffect(() => {
    console.log(`Findps: ${Findps}`);
  }, [Findps]);

  const handleFindpsChange = e => {
    setFindps(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Box>
          <Typography component="h1" variant="h5">
            <AnnouncementIcon /> ID / Password Authentication
          </Typography>
        </Box>
        <Box>
          <Typography> ????????? ??????????????? ??????????????????. </Typography>
        </Box>
        <Box>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              required
              id="Find"
              label="Enter your new password"
              name="Findps"
              autoComplete="Findps"
              type="password"
              placeholder="enter your new password"
              onChange={handleFindpsChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              required
              id="Find"
              label="Confirm your new password"
              name="Findps"
              autoComplete="Findps"
              type="password"
              placeholder="confirm your password"
              onChange={handleFindpsChange}
              autoFocus
            />
          </Grid>
          <Box>
            <span className={classes.TextStyle3}>
              * ???????????? ???????????? ?????? ??????????????? ???????????????.
            </span>
          </Box>
          <Box className={classes.btn}>
            <Button className={classes.btn1}> ?????? </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
