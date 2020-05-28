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

  @media (max-width: 500px) {
    width: 60%;
    display: flex;
    justify-content: center; //centrerat horisontellt
    align-items: center; //centrerat vertikalt
  }
  @media (max-width: 750px) {
    width: 40%;
    display: flex;
    justify-content: center; //centrerat horisontellt
    align-items: center; //centrerat vertikalt
  }

  h4 {
    margin: 14px;
    padding: 0;

    @media (max-width: 500px) {
      font-size: 13px;
      display: inline-box;
      margin: 0;

      @media (max-width: 750px) {
        display: inline-box;
      }
    }
  }
`;
