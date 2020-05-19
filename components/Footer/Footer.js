import * as presentation from "./Footer.styled";
import Subscribe from "./Subscribe";

const Footer = ({ data }) => {
  console.log(data);
  return (
    <presentation.Footer>
      <Subscribe />
      <presentation.Container>
        <presentation.Headline>DROP US A LINE</presentation.Headline>
        <presentation.BoxWrapper>
          <div>
            <i className="fas fa-map-marker-alt"></i>
            <h4>ADDRESS</h4>
            <p>ADRESSVÄGEN 1A</p>
            <p>111 23 STOCKHOLM</p>
          </div>
          <div>
            <i className="fas fa-mobile-alt"></i>
            <h4>PHONE</h4>
            <p>08 123 456 789</p>
          </div>
          <div>
            <i className="fas fa-paper-plane"></i>
            <h4>EMAIL</h4>
            <p>SUPPORT@EASYWEB.SE</p>
          </div>
        </presentation.BoxWrapper>

        <presentation.UlList>
          <li>
            <div>
              <i className="fas fa-globe"></i>
            </div>
          </li>
          <li>
            <div>
              <i className="fab fa-twitter"></i>
            </div>
          </li>
          <li>
            <div>
              <i className="fas fa-envelope"></i>
            </div>
          </li>
        </presentation.UlList>
      </presentation.Container>
      <presentation.Wrapper>
        <presentation.BottomContainer>
          <p>Terms & Conditions | Legals</p>
        </presentation.BottomContainer>
      </presentation.Wrapper>
    </presentation.Footer>
  );
};

export default Footer;
