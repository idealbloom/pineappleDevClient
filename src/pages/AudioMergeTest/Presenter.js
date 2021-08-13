/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  outerWidth: '300px',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Presenter(props) {
  const { onDrop } = props;
  const classes = useStyles();
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: 'audio/*, video/*' });

  console.log(props);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <div className="container">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p>Drag n drop some files here, or click to select files</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={3} />
        <Grid item xs={6}>
          <div className="container">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p>Drag n drop some files here, or click to select files</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  );
}

Presenter.propTypes = {
  onDrop: PropTypes.func,
};

Presenter.defaultProps = {
  onDrop: () => {},
};

export default Presenter;
