import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { style } from 'styled-system';

const useStyles = makeStyles({
  box: {
    borderRadius: 8,
    backgroundColor: '#a5a8ae',
    width: 240,
    height: 104,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.11,
    textAlign: 'center',
    color: '#fafafa',
    margin: 40,
  },
  TextStyle2: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.11,
    textAlign: 'center',
    color: '#fafafa',
  },
  TextStyle3: {
    margin: 20,
    textAlign: 'center',
    fontSize: 11,
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.11,
  },

  bg: {
    justifyContent: 'center',
    width: '100%',
    height: 844,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(237, 237, 237, 0.35)',
    shadowColor: 'rgba(133, 140, 146, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 28,
    width: '7%',
    padding: '0 30px',
    margin: 10,
  },
});

export default function Findps() {
  const classes = useStyles();

  return (
    <Box style={style.bg}>
      <Box>
        <span>{'  '} 아이디는 아래와 같습니다. </span>
      </Box>
      <Box className={classes.box}>
        <text> user@gmail.com </text>
      </Box>
      <Box>
        <span className={classes.TextStyle3}>
          비밀번호를 분실하셨다면 다음을 눌러 초기화를 진행합니다.
        </span>
      </Box>

      <Button className={classes.root}> 로그인 </Button>
      <Button className={classes.root}> 다음 </Button>
    </Box>
  );
}
