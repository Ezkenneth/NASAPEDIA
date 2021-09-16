import React from 'react';
import {TextField} from '@material-ui/core';
import useStyles from "../Styles";


export default function FormPropsTextFields(props) {
    const classes = useStyles();
    return (
            <form noValidate autoComplete="off" onSubmit={e =>  e.preventDefault()}>
                <TextField fullWidth id="outlined-search" label={props.placeholder} type="search" variant="outlined" onChange={props.handleInputChange}/>
            </form>
    );
}
