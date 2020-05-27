import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  padding: 100px 30px;
  // height: 600px;
  // display: flex;
  // justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.secondaryLight};
`;

export const Headline = styled.h4`
    position: relative;
    max-width: 550px;
    margin: 0 auto;
    padding: 0 0 25px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    color: #303030;
    border-bottom: 2px dotted #989898;
    text-align: center;
    margin-bottom: 60px;

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

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      flex-wrap: wrap;
      width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.primaryLight};
    width: 30%;
    padding: 5px;
    height: 140px;

     @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      margin: 16px 0;
    }
  }

  h4 {
    color: ${({ theme }) => theme.primaryAccent};
    margin: 10px;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    font-size: 13px;
    color: ${({ theme }) => theme.secondaryDark};
    text-transform: uppercase;
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

    :hover {
      background-color: ${({ theme }) => theme.secondaryAccent};
    }
  }
`;

export const WrapperTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Address = styled.p`
  text-transform: uppercase;
`;

export const AddressHeadline = styled.h4`
  text-transform: uppercase;
`;

export const PhoneHeadline = styled.h4`
  text-transform: uppercase;
`;

export const Email = styled.p`
  text-transform: uppercase;
`;
