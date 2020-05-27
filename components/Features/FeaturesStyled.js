import styled from "styled-components";
import * as Styled from "../../styles/styled";

export const Wrapper = styled.div`
  padding: 80px 30px;
`;

export const Heading = styled(Styled.PageTitle)`
  text-align: center;
`;

export const List = styled(Styled.ListReset)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 33%;
  padding: 80px 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

 @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

`;

export const IconWrapper = styled.div`
  margin-bottom: 10px;
  height: 95px;
  width: 100px;
  background-color: ${({ theme }) => theme.primaryAccent};
  border-radius: 50%;
  box-shadow: 0px 5px 0px ${({ theme }) => theme.secondaryAccent};
`;

export const ItemTitle = styled(Styled.SmallTitle)`
  margin: 60px 0;
`;

export const ItemText = styled(Styled.PageText)``;

export const Icon = styled.i`
  font-size: 60px;
  line-height: 100px;
  color: ${({ theme }) => theme.primaryLight};

  :hover {
    transform: rotate(360deg);
    transition: transform 0.5s;
  }
`;
