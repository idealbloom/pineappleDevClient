import React from 'react';
import { Box, makeStyles, List, Typography, img } from '@material-ui/core';
// import Checkbox from '@material-ui/core/Checkbox';
// import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import survey from '../Img/survey.jpg';

const useStyles = makeStyles({
  bg: {
    width: '100%',
    height: 830,
    justifyContent: 'center',
    margin: 150,
    backgroundColor: 'pink',
    borderRadius: 16,
  },

  submit: {
    margin: 20,
    height: '60%',
  },
  button: {
    margin: 40,
    backgroundColor: 'pink',
  },
  button2: {
    margin: 20,
    backgroundColor: 'black',
    color: 'white',
  },
  TextStyle1: {
    fontSize: 45,
    fontWeight: '600',
    margin: 60,
    color: '#1a1b1c',
  },
});

export default function Covtrap() {
  // const [item, setItem] = useState(0);
  // const incrementitem = () => setItem(item + 1);
  // const decrementItem = () => setItem(item - 1);
  const classes = useStyles();

  return (
    <Box className={classes.bg}>
      <Box>
        <Typography className={classes.TextStyle1}>
          This is covid19 symtomps survey. Covtrap
        </Typography>
        <Box>
          <img src={survey} alt="" width={800} height={750} />
          <Box>
            <Typography>
              {' '}
              Covtrap provides you with a fast and accurate health asssesment{' '}
            </Typography>
            <List>
              <ListItemIcon>Check your symtoms</ListItemIcon>
              <Box>
                <RadioGroup
                  aria-label="userType"
                  name="userType"
                  // value={radioValue}
                  // onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="Fever"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Cough"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Shortness of breath"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Difficulty breathing"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Nasal Congestion"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="Runny nose"
                  />
                  <FormControlLabel
                    value="6"
                    control={<Radio />}
                    label="Pressure of chest"
                  />
                  <FormControlLabel
                    value="7"
                    control={<Radio />}
                    label="Loss of smell or Taste "
                  />
                </RadioGroup>
              </Box>
              <Box>
                <Button className={classes.button}>submit the test</Button>
                <Button className={classes.button2}> next </Button>
              </Box>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
