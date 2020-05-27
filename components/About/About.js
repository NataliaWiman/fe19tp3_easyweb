import * as about from "./About.styled";
import Divider from "./Divider";

const About = () => {
  return (
    <about.AboutWrapper id="about">
      <about.Content>
        <h2>About Us</h2>
        <h3>Some simple word about our company</h3>
        <p>
          Ad graeci omnium minimum sit, augue discere complectitur est te. Mea
          expetenda intellegebat no, reque signiferumque qui te, ad denique
          omittam mei. Veri numquam inciderint pri ad, saepe essent ut sea, nam
          ei civibus denique eleifend. Dicat pertinax ut vix, mazim platonem ea
          has. Partiendo intellegam ex eos, eos putant alienum ea. Ut malorum
          ponderum vituperata eum.
        </p>
      </about.Content>
      <Divider />
    </about.AboutWrapper>
  );
};

export default About;
