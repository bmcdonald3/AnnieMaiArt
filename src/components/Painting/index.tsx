import { Typography } from '@material-ui/core';
import React from 'react';
import blue from '../../pictures/blue.jpg'
import './index.css';
import { Link } from 'react-router-dom'

interface Props {
    props: any
}

const Painting: React.FC<Props> = (img) => {
    const { props } = img;
    return (
        <>
            <Link to='/paint1'>
            <img src={blue} alt="blue" />
            <Typography align='center'>
                {props}
            </Typography>
            </Link>
        </>
    );
}

export default Painting;