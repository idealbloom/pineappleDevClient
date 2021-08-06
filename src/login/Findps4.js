import React, { Button } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minwidth: '650%',
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen Yogurt', 159, 6.0, 24, 4.0),
  createData('Icecream sandwich', 159, 6.0, 24, 4.0),
  createData('Eclair', 159, 6.0, 24, 4.0),
  createData('Cupcake', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 159, 6.0, 24, 4.0),
];

export default function Findps4() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert(100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat</TableCell>
            <TableCell align="right">Carbs</TableCell>
            <TableCell align="rigt">Protein</TableCell>
            <TableCell align="right">Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell>
                <Button>click this button</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
