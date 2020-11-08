import React from 'react';
import { Grid } from '@material-ui/core';
import Painting from '../Painting';
import blue from '../../pictures/blue.jpg'

const Artwork: React.FC = () => {
    const paintings = [
        {
            img: { blue },
        }
    ]

    return (
        <>
        <Grid container spacing={4}>
            {paintings.map((p, i) => {
                const { img } = p;
                return (
                    <Grid item xs={12} sm={6}>
                        <Painting props={img} />
                    </Grid>
                );
            })}
        </Grid>
        </>
    );
}

export default Artwork;
