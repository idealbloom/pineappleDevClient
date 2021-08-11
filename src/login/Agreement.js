/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

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
  button: {
    margin: theme.spacing(2, 0, 2),
    height: '70%',
  },
}));

// state는 기본적으로 getter / setter의 개념이다.
// set변수명으로 지정하는것은 변경가능한 변수명으로 사용하기위해.
// key 는 지정 문자열로 어떤 아이템이 업데이트/삭제/변경되는지 정의하기위해 사용된다,
// key는 반드시 변하지않고 예상가능하고 유알해야한다.
// this는 해당클래스 자체를 의미하며. state를 두번 선언하는 것은 첫번째는 리턴값이고 set변수명은
// 작성중 함수값을 갱신하기위해 사용하는 것이다
// useEffect 사용예제
// function Example() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

export default function PhoneAuth() {
  const classes = useStyles();
  const [phoneNo, setPhoneNo] = useState('+821020595137');
  const [authNo, setAuthNo] = useState();

  useEffect(() => {
    console.log(`phoneNo: ${phoneNo}`);
  }, [phoneNo]);

  const handlePhoneNoChange = e => {
    setPhoneNo(e.target.value);
  };

  const handleAuthNoChange = e => {
    setAuthNo(e.target.value);
  };

  const handleGetAuthNoClick = async event => {
    event.preventDefault();

    // const saltRounds = 10;
    // const salt = await bcryptjs.genSalt(saltRounds);
    // const hash = await bcryptjs.hash(signInPassword, salt);

    const data = {
      phoneNo,
    };
    console.log(data);
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      'token',
    )}`;

    axios
      .post('/auth/phone', data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        // ... 에러 처리
        console.log(`signIn error: ${error}`);
      });
  };

  const handleAuthNoSubmitClick = () => {
    const data = {
      authNo,
    };
    console.log(data);

    axios.post('/auth/submitAuthNo', data).then(response => {
      console.log(response);
    });
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

        <Grid container spacing={1}>
          <Grid item xs={8}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              required
              id="phoneNo"
              label="Phone Number"
              name="phoneNo"
              autoComplete="phoneNo"
              placeholder="+821020595137"
              onChange={handlePhoneNoChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={handleGetAuthNoClick}
              className={classes.button}
            >
              인증번호 요청
            </Button>
          </Grid>
          <Grid item xs={8}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              required
              id="authNo"
              label="Auth Number"
              name="authNo"
              autoComplete="authNo"
              placeholder="118278"
              onChange={handleAuthNoChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={handleAuthNoSubmitClick}
              className={classes.button}
            >
              인증
            </Button>
          </Grid>
        </Grid>

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
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
