import * as about from "./About.styled";
import Divider from "./Divider";

const About = ({ omoss }) => {
  const string = omoss.contents;
  const strippedString = string.replace(/(<([^>]+)>)/gi, "");
  return (
    <about.AboutWrapper id="about">
      <about.Content>
        <h2>{omoss.label}</h2>
        <h3>{omoss.introduction}</h3>
        <p>{strippedString}</p>
      </about.Content>
      <Divider />
    </about.AboutWrapper>
  );
};

export default About;
