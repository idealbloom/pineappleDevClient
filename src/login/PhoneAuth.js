/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
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
// import bcryptjs from 'bcryptjs';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function PhoneAuth() {
  const classes = useStyles();

  const [signInEmail, setSignInEmail] = useState();
  const [signInPassword, setSignInPassword] = useState();

  useEffect(() => {
    console.log(`signInEmail: ${signInEmail}`);
    console.log(`signInPassword: ${signInPassword}`);
  }, [signInEmail, signInPassword]);

  const handleEmailChange = e => {
    setSignInEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setSignInPassword(e.target.value);
  };

  const handleSignInSubmit = async event => {
    event.preventDefault();

    // const saltRounds = 10;
    // const salt = await bcryptjs.genSalt(saltRounds);
    // const hash = await bcryptjs.hash(signInPassword, salt);

    const data = {
      email: signInEmail,
      password: signInPassword,
    };
    console.log(data);

    axios
      .post('/login/signIn', data)
      .then(response => {
        const { accessToken } = response.data;
        console.log(response.data);
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
      })
      .catch(error => {
        // ... 에러 처리
        console.log(`signIn error: ${error}`);
      });

    // axios
    //   .post("http://localhost:3000/login/signIn", {
    //     email: signInEmail,
    //     password: signInPassword,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((response) => {
    //     console.log(response);
    //   });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Phone Authenticate
        </Typography>
        <form onSubmit={handleSignInSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleEmailChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
