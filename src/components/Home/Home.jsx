import React from 'react';
import './Home.css'
import Profile from '../../assets/images/Profile.png';
import BlogIntro from './BlogIntro/Blogintro';

const Home = () => {
    return (
        <div className='home__container'>
            <div className='home__intro'>
                <div className='home__introcontent'>
                    <h1 className="home__title">Hi, I'm Nopparuj (Toto)</h1>
                    <h3>Physicist | Undergraduate Student |</h3>
                    <p>
                        Hi, I'm Toto. I'm second year physics student in National University of Singapore. An IPhO medalist who stay passionated to further study in physics. I'm particularly specialized in quantum physics and quantum computation. I want this space to share experience, stories.
                        Actually, I just want to yap lol.
                    </p>
                    <button className='home__contactme'>Contact me</button>
                </div>
                <img src={Profile} className="home__profile" alt="Toto's Profile"/>
            </div>

            <div className="home__blog">
                <BlogIntro/>
            </div>
            
        </div>
    );
};

export default Home;