import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

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
    margin: 50,
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
    backgroundColor: 'pink',
    justifyContent: 'space-between',
    marginRight: 50,
    color: '#fafafa',
    textAlign: 'center',
  },
});

export default function Findps() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Box>
          <span className={classes.TextStyle2}>아이디는 아래와 같습니다.</span>
        </Box>
        <Box className={classes.box}>
          <text> user@gmail.com </text>
        </Box>
        <Box>
          <span className={classes.TextStyle3}>
            비밀번호를 분실하셨다면 다음을 눌러 초기화를 진행해주세요.
          </span>
        </Box>
        <Box className={classes.btn}>
          <Button className={classes.btn1}>로그인</Button>
          <Button className={classes.btn1}>다음</Button>
        </Box>
      </Box>
    </Container>
  );
}
