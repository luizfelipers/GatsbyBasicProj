import React from 'react';
import { Button } from '../Button/ButtonElements';
import './HeroSection.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            <h1>Manchester is Red!</h1>
            
            <p>Home of the Red Devils!</p>
            <div className='hero-btns'>
            <Button fontBig primary big>Explorar!</Button>

            </div>
        </div>
    )
}

export default Hero
