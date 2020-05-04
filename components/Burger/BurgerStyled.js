import styled from "styled-components";

export const StyledBurger = styled.div`
  display: none;
  width: 30px;
  min-height: 28px;
  flex-direction: column;
  transform: rotate(180deg);
  overflow: hidden;
  align-self: flex-start;
  cursor: pointer;
  z-index: 100;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
  }

  :hover span {
    background-color: ${({ theme }) => theme.secondaryAccent};
    transition: background-color 300ms;
  }

  span {
    display: block;
    width: 100%;
    height: 3px;
    margin: 2px 0;
    border-radius: 3px;
    background: ${({ open, theme }) =>
      open ? theme.secondaryLight : theme.primaryLight};
    border-radius: 3px;

    animation-fill-mode: both;
    transition: background 800ms;
    animation-duration: 800ms;
    animation-delay: ${({ open }) => (open ? "0" : "400ms")};
  }

  span:first-child {
    animation-name: ${({ open }) => (open ? "a" : "b")};
  }

  span:nth-child(2) {
    animation-name: ${({ open }) => (open ? "c" : "d")};
    animation-delay: ${({ open }) => (open ? "400ms" : "500ms")};
    animation-duration: 300ms;
    width: 1.5rem;
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
      transform: translateY(8px) rotate(-45deg);
    }
    50% {
      transform: translateY(8px);
    }
    to {
      transform: translateY(0);
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
      transform: translateY(-6px) rotate(45deg);
    }
    50% {
      transform: translateY(-6px);
    }
    to {
      transform: translateY(0);
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
      opacity: 0;
    }
    to {
      opacity: ${({ open }) => (open ? "1" : "1")};
    }
  }
`;
