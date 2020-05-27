import styled from "styled-components";

export const PageTitle = styled.h2`
  position: relative;
  max-width: 550px;
  margin: 0 auto;
  padding: 0 0 25px;
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryDark};
  border-bottom: 2px dotted ${({ theme }) => theme.secondaryDark};

  :after {
    content: "\f078";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    height: 20px;
    font-family: "Font Awesome 5 Free";
    font-size: 1em;
    font-weight: 900;
    text-align: center;
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryLight};
    padding: 0 25px;
  }
`;

export const SmallTitle = styled.h3`
  position: relative;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryDark};

  :after {
    content: "";
    position: absolute;
    width: 40px;
    height: 3px;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.primaryAccent};
  }
`;

export const PageText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 300;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.secondaryDark};
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 15px 35px 11px;
  font-size: calc(${({ theme }) => theme.fontSize} * 0.8);
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.primaryLight};
  background-color: ${({ theme }) => theme.primaryAccent};
  box-shadow: 0px 4px 0px ${({ theme }) => theme.secondaryAccent};
  cursor: pointer;
  transition: 0.1s ease-in;
  z-index: 1;
  border: 0;

  :hover {
    color: ${({ theme }) => theme.primaryLight};
  }

  :before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.secondaryAccent};
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.2s ease-in;
  }

  :hover:before {
    top: 0;
  }
`;

export const ButtonA = styled.a`
  position: relative;
  display: inline-block;
  padding: 15px 35px 11px;
  font-size: calc(${({ theme }) => theme.fontSize} * 0.8);
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.primaryLight};
  background-color: ${({ theme }) => theme.primaryAccent};
  box-shadow: 0px 4px 0px ${({ theme }) => theme.secondaryAccent};
  cursor: pointer;
  transition: 0.1s ease-in;
  z-index: 1;

  :hover {
    color: ${({ theme }) => theme.primaryLight};
  }

  :before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.secondaryAccent};
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.2s ease-in;
  }

  :hover:before {
    top: 0;
  }
`;

export const ListReset = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
