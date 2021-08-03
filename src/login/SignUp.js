import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [signUpEmail, setSignUpEmail] = useState();
  const [signUpPassword, setSignUpPassword] = useState();
  const [signUpPasswordCheck] = useState();
  const [radioValue, setRadioValue] = React.useState('female');
  const [checkValue, setCheckValue] = React.useState(0);

  useEffect(() => {
    console.log(`signUpPassword: ${signUpPassword}`);
  }, [signUpPassword]);

  useEffect(() => {
    console.log(`signUpEmail: ${signUpEmail}`);
  }, [signUpEmail]);

  useEffect(() => {
    console.log(radioValue);
  }, [radioValue]);

  useEffect(() => {
    console.log(checkValue);
  }, [checkValue]);

  const handleEmailChange = e => {
    setSignUpEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setSignUpPassword(e.target.value);
  };

  const handleSignUpSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/login/signUp', {
        email: signUpEmail,
        password: signUpPassword,
        uType: radioValue,
        marketingPolicy: checkValue,
      })
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  };

  const handleRadioChange = event => {
    setRadioValue(event.target.value);
  };
  const handleChackChange = () => {
    setCheckValue(checkValue === 0 ? 1 : 0);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSignUpSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              /> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleEmailChange}
                value={signUpEmail}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handlePasswordChange}
                value={signUpPassword}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordCheck"
                label="PW Check"
                type="password"
                id="passwordCheck"
                value={signUpPasswordCheck}
                autoComplete="current-password"
              />
            </Grid>
            <RadioGroup
              aria-label="userType"
              name="userType"
              value={radioValue}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="0" control={<Radio />} label="일반인" />
              <FormControlLabel value="1" control={<Radio />} label="실연자" />
              <FormControlLabel value="2" control={<Radio />} label="작곡가" />
              <FormControlLabel value="3" control={<Radio />} label="작사가" />
              <FormControlLabel value="4" control={<Radio />} label="연습생" />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="엔지니어"
              />
              <FormControlLabel
                value="6"
                control={<Radio />}
                label="퍼포먼서"
              />
              <FormControlLabel
                value="7"
                control={<Radio />}
                label="인플루언서"
              />
            </RadioGroup>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                value={checkValue}
                onChange={handleChackChange}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="http://localhost:30000" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
