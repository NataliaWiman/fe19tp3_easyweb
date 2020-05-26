import styled from "styled-components";
import * as Styled from "../../styles/styled";
export const Wrapper = styled.div`
  padding: 100px 30px 125px;
  background-color: ${({ theme }) => theme.secondaryLight};
`;
export const Heading = styled(Styled.PageTitle)`
  text-align: center;
  margin-bottom: 60px;
  :after {
    background-color: ${({ theme }) => theme.secondaryLight};
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled(Styled.PageText)`
  width: 80%;
  text-align: center;
`;
