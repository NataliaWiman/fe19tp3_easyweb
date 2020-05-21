import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const Item = styled.li`
  list-style: none;
  width: 33%;
  padding: 80px 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 30px;
`;

export const Image = styled.img`
  width: 130px;
  border-radius: 20%;
`;
export const List = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;

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
  }

  i {
    font-size: 12px;
  }
`;

export const Headline = styled.h4`
  font-weight: 200;
  position: absolute;
  margin-top: 0px;
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
    background-color: ${({ theme }) => theme.primaryLight};
    padding: 0 25px;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
