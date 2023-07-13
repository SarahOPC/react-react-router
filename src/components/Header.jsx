import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4%;
`;

const NavLinkItem = styled.div`
    min-width: 11em;
    padding: 10%;
    display: flex;
    justify-content: space-between;
    margin-right: 2em;
    
    a {
        text-decoration: none;
        color: #FF6060;
        font-size: 1.5em;
    }

    .active {
        text-decoration: underline;
    }
`;

const NavNonActive = styled.div`
    text-decoration: none;
    color: #FF6060;
    font-size: 1.5em;
`;

function Header() {

    return (
        <HeaderContainer className="App-header">
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='NavLink'>
                <NavLinkItem>
                    {/* activeClassName prop : when a link is active ie currentPage, will have the active className */}
                    <NavLink exact={true.toString()} to="/" activeclassname="activeclassname">Accueil</NavLink>
                    <NavNonActive>À propos</NavNonActive>
                </NavLinkItem>
            </div>
        </HeaderContainer>
    );
}

export default Header;