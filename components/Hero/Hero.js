import {
  StyledHero,
  HeroBgWrapper,
  HeroBg,
  HeroContent,
  HeroTitle,
  HeroText,
} from "./HeroStyled";

const Hero = ({ data }) => {
  return (
    <StyledHero>
      <HeroBgWrapper>
        <HeroBg />
      </HeroBgWrapper>
      <HeroContent>
        {/* <HeroTitle>{data["hero-top"].demoEntryH1.value}</HeroTitle> */}
        {/* <HeroText>{data["hero-top"].demoEntryTag.value}</HeroText> */}
      </HeroContent>
    </StyledHero>
  );
};

export default Hero;
