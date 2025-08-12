import React from 'react';
import Layout from '../Layout/Layout';
import NavigationBar from '../NavigationBar/NavigationBar';
import './About.css';

const About = () => {
    return (
        <>
        <div className="about__container">
            <section className="about__education">
                <h1>Education</h1>
                <p>
                    I am currently international student studying in National University of Singapore.
                </p>
            </section>
            <section className="about__insight">
                <h1>Vision and Insight</h1>
                <p>
                   Just coping
                </p>
            </section>
            <section className="about__personal">
                <h1>Personal Life</h1>
                <p>
                    In my free time, I love to hang out with my friends
                </p>
            </section>
        </div>
        </>
  )
};


export default About;
