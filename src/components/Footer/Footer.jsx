import React from 'react';
import './Footer.css';
// import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/nopparuj-sodsri/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a href="https://github.com/TO-PRARAMX" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="mailto::nopparuj050206@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
        </footer>
    );
}

export default Footer;