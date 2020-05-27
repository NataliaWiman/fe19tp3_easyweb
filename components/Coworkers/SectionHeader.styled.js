import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.primaryAccent};
  display: flex;
  justify-content: center; //centrerat horisontellt
  align-items: center; //centrerat vertikalt
`;

export const TextBox = styled.div`
  width: 30%;
  height: 50px;
  margin: 0;
  padding: 0;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.secondaryAccent};

  h4 {
    margin: 14px;
    padding: 0;
  }

   @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: 80%;
    }
`;
