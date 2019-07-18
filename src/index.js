/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import './styles.css'
import { DefaultButton } from './button';
// import Dsbutton from './button'

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'none',
//   },
// }));

// export { default as Dsbutton, DefaultButton, PrimaryButton, SecondaryButton, DisabledButton } from './button';
// export { default as TextFields, StandardTextField, ExtendedSelectField } from './input';
// export { default as theme } from './theme';



// export default function ExampleComponent() {
//   const classes = useStyles();

//   return (
//     <div>
//       <Button variant="contained" className={classes.button}>
//         Default
//       </Button>
//       <Button variant="contained" color="primary" className={classes.button}>
//         Primary
//       </Button>
//       <Button variant="contained" color="secondary" className={classes.button}>
//         Secondary
//       </Button>
//       <Button variant="contained" color="secondary" disabled className={classes.button}>
//         Disabled
//       </Button>
//       <Button variant="contained" href="#contained-buttons" className={classes.button}>
//         Link
//       </Button>
//       <input
//         accept="image/*"
//         className={classes.input}
//         id="contained-button-file"
//         multiple
//         type="file"
//       />
//       <label htmlFor="contained-button-file">
//         <Button variant="contained" component="span" className={classes.button}>
//           Upload
//         </Button>
//       </label>
//     </div>
//   );
// }

class Index extends React.Component {

    render() {
        return (
            <div>
                {/* buttons */}
                <DefaultButton text="DEFAULT" />
                <DefaultButton color="primary" text="primary" />
                <DefaultButton color="secondary" text="SECONDARY" />
                <DefaultButton color="primary" text="text" />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))