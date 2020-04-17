import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.primaryLight};

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    background-color: ${({ theme }) => theme.primaryAccent};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.8s;
    background: rgba(0, 0, 0, 0.85);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }

  li {
    margin-right: 35px;

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
      margin: 0;
      opacity: ${({ open }) => (open ? "1" : "0")};
      transform: ${({ open }) => (open ? "translateY(0)" : "translateY(3rem)")};
      transition: all 0.6s ease-in-out;
      transition-delay: 1200ms;

      :last-child {
        margin-right: 0;
      }

      :nth-child(1) {
        transition-delay: 200ms;
      }
      :nth-child(2) {
        transition-delay: 300ms;
      }
      :nth-child(3) {
        transition-delay: 400ms;
      }
      :nth-child(4) {
        transition-delay: 500ms;
      }
      :nth-child(5) {
        transition-delay: 600ms;
      }
      :nth-child(6) {
        transition-delay: 700ms;
      }
      :nth-child(7) {
        transition-delay: 800ms;
      }
      :nth-child(8) {
        transition-delay: 900ms;
      }
      :nth-child(9) {
        transition-delay: 1000ms;
      }
      :nth-child(10) {
        transition-delay: 1100ms;
      }
    }
  }

  a {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryLight};
    transition: color 0.3s ease-in-out;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.primaryAccent};
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
      margin: 0;
      padding: 25px 100px 25px 60px;
      color: ${({ theme }) => theme.primaryLight};
    }
  }
`;
