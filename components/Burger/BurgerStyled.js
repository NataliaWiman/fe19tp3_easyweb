import styled from "styled-components";

export const StyledBurger = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  align-self: flex-start;
  cursor: pointer;
  z-index: 100;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
  }

/*   :hover span {
    background-color: ${({ theme }) => theme.primaryAccent};
    transition: background-color 300ms;
  } */

  span {
    display: block;
    width: 100%;
    height: 3px;
    margin: 2px 0;
    background: ${({ open, theme }) =>
      open ? theme.primaryAccent : theme.primaryDark};
    border-radius: 3px;
    transition: background 800ms;
    animation-duration: 800ms;
    animation-fill-mode: both;
    animation-delay: ${({ open }) => (open ? "0" : "400ms")};
  }

  span:first-child {
    animation-name: ${({ open }) => (open ? "a" : "b")};
  }

  span:nth-child(2) {
    animation-name: ${({ open }) => (open ? "c" : "d")};
    animation-delay: ${({ open }) => (open ? "400ms" : "500ms")};
    animation-duration: 300ms;
  }

  span:nth-child(3) {
    animation-name: ${({ open }) => (open ? "e" : "f")};
  }

  @keyframes a {
    0% {
      transform: ${({ open }) => (open ? "translateY(0)" : "none")};
    }
    50% {
      transform: ${({ open }) => (open ? "translateY(8px)" : "none")};
    }
    to {
      transform: ${({ open }) =>
        open ? "translateY(8px) rotate(-45deg)" : "none"};
    }
  }

  @keyframes b {
    0% {
      transform: ${({ open }) =>
        open ? "translateY(8px) rotate(-45deg)" : "none"};
    }
    50% {
      transform: ${({ open }) => (open ? "translateY(8px)" : "none")};
    }
    to {
      transform: ${({ open }) => (open ? "translateY(0)" : "none")};
    }
  }

  @keyframes e {
    0% {
      transform: ${({ open }) => (open ? "translateY(0)" : "none")};
    }
    50% {
      transform: ${({ open }) => (open ? "translateY(-6px)" : "none")};
    }
    to {
      transform: ${({ open }) =>
        open ? "translateY(-6px) rotate(45deg)" : "none"};
    }
  }

  @keyframes f {
    0% {
      transform: ${({ open }) =>
        open ? "translateY(-6px) rotate(45deg)" : "none"};
    }
    50% {
      transform: ${({ open }) => (open ? "translateY(-6px)" : "none")};
    }
    to {
      transform: ${({ open }) => (open ? "translateY(0)" : "none")};
    }
  }

  @keyframes c {
    0% {
      opacity: ${({ open }) => (open ? "1" : "0")};
    }
    to {
      opacity: ${({ open }) => (open ? "0" : "0")};
    }
  }

  @keyframes d {
    0% {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    to {
      opacity: ${({ open }) => (open ? "1" : "1")};
    }
  }
`;
