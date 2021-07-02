import React from 'react'
import { Button } from './Button'
import './Hero.css';


function Hero() {
    return (
        <div className="hero-container">
            <video src='./videos/video-2.mp4' autoPlay loop muted />
            <h1>Your next adventure awaits...</h1>
            <p>Let us plan your journey</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Start Here</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch Video<i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default Hero
