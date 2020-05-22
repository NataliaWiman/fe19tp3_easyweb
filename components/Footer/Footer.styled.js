import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.secondaryLight};
`;

export const Headline = styled.h4`
  font-weight: 200;
  position: absolute;
  margin-top: 80px;
  height: 50px;
  min-width: 550px;
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
    background-color: ${({ theme }) => theme.secondaryLight};
    padding: 0 25px;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.primaryAccent};
  display: flex;
  align-items: center;

  p {
    position: absolute;
    left: 15%;
    color: ${({ theme }) => theme.primaryLight};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const BoxWrapper = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.primaryLight};
    width: 30%;
    padding: 5px;
    height: 140px;
  }

  h4 {
    color: ${({ theme }) => theme.primaryAccent};
    margin: 10px;
  }

  p {
    margin: 0;
    font-size: 13px;
    color: ${({ theme }) => theme.secondaryDark};
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  margin: 20px;
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  align-items: flex-end;
  justify-content: center;

  div {
    margin: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primaryAccent};
  }
`;

// export const theme = {
//     primaryDark: "#303030",
//     secondaryDark: "#989898",
//     primaryLight: "#fff",
//     secondaryLight: "#f2f2f2",
//     primaryAccent: "#f3c840",
//     secondaryAccent: "#efb600",

//     fontSize: "16px",
//     lineHeight: "1.5",

//     mobile: "500px",
//     tablet: "1024px",
//   };

export const WrapperTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
