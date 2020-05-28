import styled from "styled-components";

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
`;

export const Content = styled.div`
  padding: 30px;
  text-align: center;
  max-width: 50%;
  margin-top: 40px;

  @media (max-width: 500px) {
    max-width: 80%;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
  }
  h3 {
    margin-top: 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
  }
  p {
    margin-top: 50px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.667;
  }
`;
