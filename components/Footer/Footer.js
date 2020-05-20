import * as footer from "./Footer.styled";
import Subscribe from "./Subscribe";

const Footer = ({ data, contact }) => {
  const contacts = contact.viewTemplate.children[0];

  console.log(contacts.children[0].children[0].value);
  console.log(contacts.children[0].children[1].value);
  console.log(contacts.children[1].children[0].value);
  console.log(contacts.children[1].children[1].value);
  console.log(contacts.children[2].children[0].value);
  console.log(contacts.children[2].children[1].value);

  return (
    <footer.Footer>
      <Subscribe />
      <footer.Container>
        <footer.Headline>DROP US A LINE</footer.Headline>

        <footer.BoxWrapper>
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
        </footer.BoxWrapper>

        <footer.UlList>
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
        </footer.UlList>
      </footer.Container>
      <footer.Wrapper>
        <footer.BottomContainer>
          <p>Terms & Conditions | Legals</p>
        </footer.BottomContainer>
      </footer.Wrapper>
    </footer.Footer>
  );
};

export default Footer;
