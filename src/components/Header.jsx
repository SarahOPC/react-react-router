import logo from '../assets/logo.svg';
import backgroundImage from "../assets/bkgdImg.svg"
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <header className="App-header">
            <div className='logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='backgroundImage'>
                <img src={backgroundImage} className="backgroundImage" alt="Vue de mer et rochers" />
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className='NavLink'>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </div>

        </header>
    )
}

export default Header