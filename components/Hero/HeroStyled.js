import styled from "styled-components";
import * as Styled from "../../styles/styled";

export const StyledHero = styled.div`
  height: 100vh;
  position: relative;
`;

export const HeroBgWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const HeroBg = styled.div`
  height: 100%;
  position: relative;
  /* background-image: url("https://demo-space-dogs.easyweb.site/upl/images/672643.jpg"); */
  background-image: url("https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2774&q=80");
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 0 100px;
  width: 50%;
  z-index: 2;

  width: 100%;
  text-align: center;
  padding: 0 30px;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  padding: 10px 0;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryDark};
`;

export const HeroText = styled(Styled.PageText)`
  margin-bottom: 50px;
`;

export const HeroBtn = styled(Styled.ButtonA)``;
