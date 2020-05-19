import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 30px;
  width: 100%;
  z-index: 10;
`;

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  padding: 0 100px;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0 30px;
    align-items: center;
  }
`;

export const BurgerWrapper = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
