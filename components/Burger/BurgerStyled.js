import styled from "styled-components";


export const StyledBurger = styled.div`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

   &:focus {
    outline: none;
  }


  span {
    display: block;
    width: 2rem;
    height: 0.25rem;
    margin: 2px 0;
    transform-origin: 21px;
    background: ${({ open, theme }) =>
      open ? theme.secondaryLight : theme.primaryLight};
    border-radius: 3px;
  
    animation-duration: 0.8s;
    animation-fill-mode: both;
    transition: background 0.8s;
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

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    
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
