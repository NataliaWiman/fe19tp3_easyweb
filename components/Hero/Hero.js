import {
  StyledHero,
  HeroBgWrapper,
  HeroBg,
  HeroContent,
  HeroTitle,
  HeroText,
  RotateInWrapper,
  BounceInWrapper,
  SlideInDownWrapper,
} from "./HeroStyled";
import { useSpring, animated, useTransition } from "react-spring";

const Hero = ({ data }) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  return (
    <StyledHero>
      <HeroBgWrapper>
        <HeroBg />
      </HeroBgWrapper>

      <HeroContent>
        <animated.div style={fade} delay={300}>
          <HeroTitle>{data["hero-top"].demoEntryH1.value}</HeroTitle>
          <HeroText>{data["hero-top"].demoEntryTag.value}</HeroText>
        </animated.div>
      </HeroContent>
    </StyledHero>
  );
};

export default Hero;
