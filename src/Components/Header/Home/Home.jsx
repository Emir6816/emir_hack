import React from 'react';
// import './Home/Home.css'
// import './Header/Home/Home.css';
import './h.css'

const Home = () => {
    return (
        <div>
            <div class="intro">
        <div class="container">
            <div class="intro__inner">
                <h2 class="intro__suptitle">Creative Template</h2>
                <h1 class="intro__title">Welcome to Space</h1>

                <a class="btn" href="#">Learn More</a>
            </div>
        </div>

        <div class="slider">
            <div>
                <div class="slider__inner">
                    <div class="slider__item active">
                        <span class="slider__num">01</span>
                        <span class="slider__text">Intro</span>
                    </div>
                    <div class="slider__item">
                        <span class="slider__num">02</span>
                        <span class="slider__text">Work</span>
                    </div>
                    <div class="slider__item">
                        <span class="slider__num">03</span>
                        <span class="slider__text">About</span>
                    </div>
                    <div class="slider__item">
                        <span class="slider__num">04</span>
                        <span class="slider__text">Contacts</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
        </div>
    );
};

export default Home;