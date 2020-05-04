import styled, { keyframes } from "styled-components";
import slideInDown from "react-animations/lib/slide-in-down";
import rotateIn from "react-animations/lib/rotate-in";
import bounceIn from "react-animations/lib/bounce-in";

export const StyledHero = styled.div`
  height: 750px;
  position: relative;
`;

export const HeroBgWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const HeroBg = styled.div`
  height: 750px;
  position: relative;
  background-image: url("https://demo-coffee.easyweb.site/upl/images/659073/rf4ohrfelnr21.jpg");
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
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  text-align: center;
  width: 60%;
  z-index: 2;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 60%;
    bottom: 50%;
    transform: translateX(-50%) translateY(50%);
  }
  @keyframes test {
    0% {
      transform: translateX(-50%) translateY(100%);
    }
    to {
      transform: translateX(-50%) translateY(10%);
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 300;

  text-transform: uppercase;
  color: ${({ theme }) => theme.secondaryAccent};
`;

export const HeroText = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.primaryLight};
`;

//*************** ANIMATIONS ********************/

export const SlideInDownWrapper = styled.div`
  animation: 1.5s ${keyframes(slideInDown)};
`;

export const RotateInWrapper = styled.div`
  animation: 1.5s ${keyframes(rotateIn)};
`;

export const BounceInWrapper = styled.div`
  animation: 1.5s ${keyframes(bounceIn)};
`;

// animation-name: test;
//   animation-delay: 0.4s;
//   animation-duration: 0.5s;
//transform: translateX(-50%);

// ${({ theme: { utils } }) => utils.slideInDown(1.5)};
