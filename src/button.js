/**
 * @class Dsbutton
 */

import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { default as theme } from './theme';
import classNames from 'classnames/bind';
import './styles.css';




const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export function DefaultButton(props){
    const classes = useStyles();
    return (
    <Button variant="contained" color = {props.color} disabled = {props.disabled} className={classNames(classes.button, 'primary11111111')}>
        {props.text}
    </Button>)
}

export function PrimaryButton(props){
    const classes = useStyles();
    return (
    <Button variant="contained" color="primary"  className={classes.button}>
          {props.text}
    </Button> )
}

export function SecondaryButton(props){
    const classes = useStyles();
    return (
    <Button variant="contained" color="secondary" className={classes.button}>
          {props.text}
    </Button> )
}

export function DisabledButton(props){
    const classes = useStyles();
    return (
    <Button variant="contained" color="secondary" disabled className={classes.button}>
        Disabled
    </Button> )
}




// all the button demos bellow
export default function Dsbutton() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled className={classes.button}>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

// style={{ color: '#f84354' }}