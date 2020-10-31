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

const ClosePainting: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <img src={blue} alt='blue' className={classes.test} />
                </Grid>
                <Grid item sm={6}>
                    <Typography variant='h3'>
                        Painting
                    </Typography>
                    <Typography>
                        $100.00 <br/><br/>
                        25 in x 12 in <br/>
                        Mixed medium on Belgian linen canvas.
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
