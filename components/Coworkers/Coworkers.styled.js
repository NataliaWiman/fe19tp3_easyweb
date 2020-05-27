import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
`;
export const Item = styled.li`
  list-style: none;
  width: 33%;
  padding: 20px 15px;
  text-align: center;
  margin: 30px; 

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      margin: 30px 0; 
    }
`;

export const Image = styled.img`
  width: 130px;
  border-radius: 20%;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding:0;
  margin-bottom:80px;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      flex-wrap: wrap;
    }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    margin: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primaryAccent};

    :hover {
      background-color: ${({ theme }) => theme.secondaryAccent};
    }
  }

  i {
    font-size: 12px;
  }
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
    margin-bottom: 20px;

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

export const Wrapper = styled.div`
  // position: absolute;
  margin-top: 120px;
  padding: 0 30px;
  // display: flex;
  // justify-content: center;
  // text-align: center;
`;
