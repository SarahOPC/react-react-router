import Header from "../components/Header";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import Footer from "../components/Footer";

const ErrorDiv = styled.div`
  color: #FF6060;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorCode = styled.h1`
  font-size: 18em;
  margin-block: 0em;

  @media (max-width: 550px) {
    font-size: 7em;
    margin-top: 1em;
  }
`;

const ErrorText = styled.h1`
  font-size: 2.25em;

  @media (max-width: 550px) {
    font-size: 1.5em;
    font-weight: 400;
    text-align: center;
  }
`;

const ErrorReturn = styled.p`
  margin-block-start: 5.5em;

  a {
    color: #FF6060;
    font-size: 0.75em;
  }
`;

function Error() {

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
      <Footer />
    </div>
  );
}

export default Error;