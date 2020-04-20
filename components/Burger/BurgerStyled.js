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

  :hover span {
    background-color: ${({ theme }) => theme.secondaryAccent};
    transition: background-color 0.3s;
  }

  span {
    display: block;
    width: 100%;
    height: 3px;
    margin: 2px 0;
    background: ${({ open, theme }) =>
      open ? theme.secondaryLight : theme.primaryLight};
    border-radius: 3px;
    transition: background 0.8s;
    animation-duration: 0.8s;
    animation-fill-mode: both;
    animation-delay: ${({ open }) => (open ? "0" : "0.4s")};
  }

  span:first-child {
    animation-name: ${({ open }) => (open ? "a" : "b")};
  }

  span:nth-child(2) {
    animation-name: ${({ open }) => (open ? "c" : "d")};
    animation-delay: 0.4s;
    animation-duration: 0.3s;
  }

  span:nth-child(3) {
    animation-name: ${({ open }) => (open ? "e" : "f")};
  }

  @keyframes a {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
    to {
      transform: translateY(8px) rotate(-45deg);
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
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
    to {
      transform: translateY(-6px) rotate(45deg);
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
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes d {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
