import styled from "styled-components";

const BoxBasic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 75px;
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 48px;
    font-weight: 400;
    color:  ${({ theme }) => theme.primaryAccent};
    text-transform: uppercase;
    margin: 0;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    color: black;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
  }
  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
    color: black;
  }
  @media (max-width: 1024px) {
    padding: 20px;
    text-align: center;
  }
`;

export default BoxBasic;