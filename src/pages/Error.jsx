import Header from "../components/Header";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Error() {

  const ErrorDiv = styled.div`
    color: #FF6060;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const ErrorCode = styled.h1`
    font-size: 18em;
    margin-block: 0em;
  `;

  const ErrorText = styled.h1`
    font-size: 2.25em;
  `;

  const ErrorReturn = styled.p`
    margin-block-start: 5.5em;
    
    a {
      color: #FF6060;
    }
  `;

  return (
    <div>
      <Header />
      <ErrorDiv>
        <ErrorCode>404</ErrorCode>
        <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
        <ErrorReturn>
          <NavLink exact to="/">
            Retourner sur la page d'accueil
          </NavLink>
        </ErrorReturn>
      </ErrorDiv>
    </div>
  );
}

export default Error;