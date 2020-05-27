import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 50%;
  background-color: whitesmoke;
  margin-bottom: 100px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Bar = styled.div`
  background-color: ${({ theme }) => theme.primaryAccent};
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.percent ? `${props.percent}%` : "100%")};
  height: 8px;
  border-radius: 10px 0 0 10px;
  span {
    position: relative;
    top: -35px;
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
  }
  span:last-child {
    font-size: 20px;
    top: -40px;
    right: -25px;
  }
`;
