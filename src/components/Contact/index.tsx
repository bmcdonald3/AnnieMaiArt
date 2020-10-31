import React from 'react';
import { TextField, Grid } from '@material-ui/core';

const Contact: React.FC = () => {
    return (<>
    <Grid container spacing={4}>
        <Grid item sm={2} />
        <Grid item xs={12} sm = {8}>
            <TextField id="standard-basic" label="Name *" fullWidth />
        </Grid>
        <Grid item sm={2} />
        <Grid item sm={2} />
        <Grid item xs={12} sm = {8}>
            <TextField id="standard-basic" label="Email Address *" fullWidth />
        </Grid>
        <Grid item sm={2} />
        <Grid item sm={2} />
        <Grid item xs={12} sm = {8}>
            <TextField id="standard-multiline-flexible" label="Message" multiline rows={5} fullWidth />
        </Grid>
        <Grid item sm={2} />
    </Grid>
    </>);
}

export default Contact;
