import React from 'react';
import { Grid, Typography, createStyles, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import blue from '../../pictures/blue.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    test: {
        width: '100%',
    },
  }),
);

const ClosePainting = (asd) => {
    const classes = useStyles();
    asd = asd ? asd : {

    }
    const { title } = asd;
    console.log(title);
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <img src={blue} alt='blue' className={classes.test} />
                </Grid>
                <Grid item sm={6}>
                    <Typography variant='h3'>
                        {asd.location.state.props.title}
                    </Typography>
                    <Typography>
                        ${asd.location.state.props.cost} <br/><br/>
                        {asd.location.state.props.size} <br/>
                        {asd.location.state.props.description}
                    </Typography>
                    <br/>
                    <Link to='/purchase'>
                        <Button size='large' variant='contained'>Purchase</Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}

export default ClosePainting;
