import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <Link to="/" className='home'>Home</Link>
                <Link to="/about" className='about'>About</Link>
                <Link to="/blog" className='blog'>Blog</Link>
                <Link to="/projects" className='projects'>Projects</Link>
            </nav>
        </div>
    );
}

export default NavigationBar;