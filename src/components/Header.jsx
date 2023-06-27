import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {

    const Logo= styled.img`
        margin: 2%;
    `

    return(
        <header className="App-header">
            <div className='logo'>
                <Logo src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='NavLink'>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </div>

        </header>
    )
}

export default Header