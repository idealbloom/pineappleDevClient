import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 28,
    width: '9%',
    padding: '0 30px',
    margin: 10,
  },
  TextStyle1: {
    width: '15%',
    height: 200,
    color: 'white',
    backgroundColor: '#a5a8ae',
    borderRadius: 16,
  },
  TextStyle2: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.11,
    color: 'white',
  },

  View: {
    backgroundColor: 'pink',
  },
});

export default function Findps() {
  const classes = useStyles();

  return (
    <Box backgroundColor="pink">
      <Box>
        <span> 임시비밀번호는 아래와 같습니다. </span>
      </Box>
      <Box className={classes.TextStyle1}>
        <span className={classes.TextStyle2}>user@gmail.com</span>
      </Box>
      <Button className={classes.root}> 로그인 </Button>
      <Button className={classes.root}> 다음 </Button>
    </Box>
  );
}
