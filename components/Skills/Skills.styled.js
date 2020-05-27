import styled from "styled-components";
import * as Styled from "../../styles/styled";

export const SkillsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 25%;
  margin-bottom: 100px;
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
`;

export const Heading = styled(Styled.PageTitle)`
  font-size: ${({ theme }) => theme.fontSize};
  text-align: center;
`;
