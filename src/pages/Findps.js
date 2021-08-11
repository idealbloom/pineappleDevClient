import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AnnouncementIcon from '@material-ui/icons/Announcement';

const useStyles = makeStyles({
  box: {
    borderRadius: 8,
    backgroundColor: '#a5a8ae',
    width: 300,
    height: 114,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fafafa',
    margin: 40,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'pink',
  },

  BoxText: {
    flexDirection: 'row',
    margin: 30,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.11,
  },

  TextStyle1: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1a1b1c',
    margin: 10,
  },

  TextStyle2: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1a1b1c',
    margin: 50,
  },

  btn: {
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

  avatar: {
    marginBottom: 0,
  },
});

export default function Findps() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Box>
          <Typography component="h1" variant="h5" margin={20}>
            <AnnouncementIcon className={classes.TextStyle1} /> ID / Password
            Authentication
          </Typography>
        </Box>
        <Typography className={classes.TextStyle1}>
          아이디는 아래와 같습니다.
        </Typography>

        <Box className={classes.box}>
          <Typography className={classes.BoxText}> user@gmail.com </Typography>
        </Box>
        <Box>
          <Typography className={classes.TextStyle2}>
            비밀번호를 분실하셨다면 다음을 눌러 초기화를 진행해주세요.
          </Typography>
        </Box>
        <Box className={classes.btn}>
          <Button className={classes.btn1}>로그인</Button>
          <Button className={classes.btn1}>다음</Button>
        </Box>
      </Box>
    </Container>
  );
}
