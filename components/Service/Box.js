import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: whitesmoke;
  padding: 75px;
  text-align: center;
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    margin-bottom: 40px;
  }
  a {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primaryAccent};
    transition: color 0.3s;
    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
    }
    &:hover {
      color: black;
    }
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      margin-top: 5px;
      background: black;
      transition: width 0.3s;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

export default Box;