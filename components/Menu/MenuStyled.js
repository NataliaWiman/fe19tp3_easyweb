import styled from "styled-components";

export const MenuCover = styled.div`
  width: ${({ open }) => (open ? "100%" : "0")};
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 1);
  transform: translateX(100%);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: 400ms linear;
  z-index: -1;
  overflow: auto;
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.primaryDark};
  overflow: auto;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
/*     width: ${({ open }) => (open ? "100%" : "0")};
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    transform: translateX(100%);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: 400ms linear;
    /* transition: ${({ open }) =>
    open ? "transform 0.8s" : "transform 0s"}; */
    /* background: rgba(0, 0, 0, 1); */

    width: ${({ open }) => (open ? "100%" : "0")};
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    background-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    overflow: auto;

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }

  li {
    margin-right: 35px;
    text-align: center;

    :last-child {
      margin-right: 0;
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
      margin: 0;
      opacity: ${({ open }) => (open ? "1" : "0")};
      transform: ${({ open }) => (open ? "translateY(0)" : "translateY(3rem)")};
      transition: all 600ms ease-in-out;

      :nth-child(1) {
        transition-delay: ${({ open }) => (open ? "200ms" : "600ms")};
      }
      :nth-child(2) {
        transition-delay: ${({ open }) => (open ? "300ms" : "600ms")};
      }
      :nth-child(3) {
        transition-delay: ${({ open }) => (open ? "400ms" : "600ms")};
      }
      :nth-child(4) {
        transition-delay: ${({ open }) => (open ? "500ms" : "600ms")};
      }
      :nth-child(5) {
        transition-delay: ${({ open }) => (open ? "600ms" : "600ms")};
      }
      :nth-child(6) {
        transition-delay: ${({ open }) => (open ? "700ms" : "600ms")};
      }
      :nth-child(7) {
        transition-delay: ${({ open }) => (open ? "800ms" : "600ms")};
      }
      :nth-child(8) {
        transition-delay: ${({ open }) => (open ? "900ms" : "600ms")};
      }
      :nth-child(9) {
        transition-delay: ${({ open }) => (open ? "1000ms" : "600ms")};
      }
      :nth-child(10) {
        transition-delay: ${({ open }) => (open ? "1100ms" : "600ms")};
      }
    }
  }

  a {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryDark};
    transition: color 0.2s ease-in-out;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.secondaryDark};
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 10px 0;
      padding: 0;
      color: ${({ theme }) => theme.primaryLight};
    }
  }
`;
