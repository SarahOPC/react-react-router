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
    min-width: 13em;
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

const StyledImage = styled.img`
    @media (max-width: 550px) {
        width: 7em;
    }
`;

function Header() {

    return (
        <HeaderContainer className="App-header">
            <div className='logo'>
                <StyledImage src={logo} alt="logo" />
            </div>
            <div className='NavLink'>
                <NavLinkItem>
                    {/* activeClassName prop : when a link is active ie currentPage, will have the active className */}
                    <NavLink exact={true.toString()} to="/" activeclassname="activeclassname">Accueil</NavLink>
                    <NavLink to="/about" activeclassname="activeclassname">À propos</NavLink>
                </NavLinkItem>
            </div>
        </HeaderContainer>
    );
}

export default Header;