import { Typography } from '@material-ui/core';
import React from 'react';
import blue from '../../pictures/blue.jpg'
import './index.css';
import { Link } from 'react-router-dom'

const Painting: React.FC = () => {
    return (
        <>
            <Link to='/paint1'>
            <img src={blue} alt="blue" />
            <Typography align='center'>
                Painting
            </Typography>
            </Link>
        </>
    );
}

export default Painting;