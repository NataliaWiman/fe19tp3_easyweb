import styled from "styled-components";

export const StyledLogo = styled.div`
  a {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryLight};
  }
`;
