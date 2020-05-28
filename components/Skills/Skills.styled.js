import styled from "styled-components";
import * as Styled from "../../styles/styled";

export const SkillsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 50%;
  margin: 100px 0;
  padding: 0 30px;
  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-transform: uppercase;
    margin-top: 100px;
  }
  p {
    margin-top: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.667;
  }
  
   @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      max-width: 100%;
    }
`;

export const Heading = styled.h4`
    position: relative;
    max-width: 550px;
    margin: 0 auto;
    padding: 0 0 25px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    color: #303030;
    border-bottom: 2px dotted #989898;
    text-align: center;
    margin-bottom: 20px;

  :after {
    content: "\f078";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    height: 20px;
    font-family: "Font Awesome 5 Free";
    font-size: 1em;
    font-weight: 900;
    text-align: center;
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryLight};
    padding: 0 25px;
  }
`;