import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {

    const Header = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2%
    `;

    const NavLinkItem = styled.div`
        min-width: 9em;
        padding: 10%;
        display: flex;
        justify-content: space-between;
        margin-right: 2em;

        a {
            text-decoration: none;
        }

        .active {
            text-decoration: underline;
        }
    `;
    
    return(
        <Header className="App-header">
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='NavLink'>
                <NavLinkItem>
                    {/* activeClassName prop : when a link is active ie currentPage, will have the active className */}
                    <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
                    <NavLink to="/about" activeClassName="active">A propos</NavLink>
                </NavLinkItem>
            </div>
        </Header>
    );
}

export default Header;