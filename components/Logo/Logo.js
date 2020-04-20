  
import { StyledLogo } from "./LogoStyled";

const Logo = ({ site }) => {
  return (
    <StyledLogo>
      <a href="/">{site.label}</a>
    </StyledLogo>
  );
};

export default Logo;
