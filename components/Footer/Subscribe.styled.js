import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://images.unsplash.com/photo-1530022351670-4caa0efc0b4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
  width: 100%;
  height: 420px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  opacity: 0.9;
  justify-content: center;
  align-items: center;
  z-index: -10000;
`;

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    color: ${({ theme }) => theme.primaryDark};
  }

  h4 {
    margin: 0;
    margin-bottom: 25px;
    padding: 10px 20px;
    text-align: center;
    background-color: ${({ theme }) => theme.primaryAccent};

    /*     @media (max-width: 760px) {
      font-size: 15px;
      width: 50%;
      margin-left: 25%;
    }

    @media (max-width: 550px) {
      font-size: 13px;
      width: 60%;
      margin-left: 20%;
    } */
  }

  i {
    display: block;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.primaryAccent};
  }

  input {
    display: inline;
    height: 40px;
    color: white;
    font-size: 17px;
    font-weight: bold;
    background: none;
    margin: 0;
    padding: 0;
    border: 1px solid ${({ theme }) => theme.primaryAccent};
  }
  button {
    height: 40px;
    font-size: 13px;
    padding: 10px;
    margin-left: 5px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.primaryLight};
    border: none;
  }
`;

//https://images.unsplash.com/photo-1540431947874-7626a155252a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80

//https://images.unsplash.com/photo-1495651779359-881fde1808a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80

export const Box = styled.div`
  width: 100%;
  text-align: center;
  list-style: none;
  margin: 0;
  height: 200px;
`;

//https://images.unsplash.com/photo-1444623151656-030273ddb785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80
