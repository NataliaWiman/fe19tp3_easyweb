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
        <footer.WrapperTwo>
          <footer.BoxWrapper>
            <div>
              <i className="fas fa-map-marker-alt"></i>
              <h4>{contacts.children[1].children[0].value}</h4>
              <p>{contacts.children[1].children[1].value}</p>
              <p>111 23 STOCKHOLM</p>
            </div>
            <div>
              <i className="fas fa-mobile-alt"></i>
              <h4>{contacts.children[0].children[0].value}</h4>
              <p>{contacts.children[0].children[1].value}</p>
            </div>
            <div>
              <i className="fas fa-paper-plane"></i>
              <h4>{contacts.children[2].children[0].value} </h4>
              <p>{contacts.children[2].children[1].value}</p>
            </div>
          </footer.BoxWrapper>

          <footer.IconWrapper>
            <div>
              <i className="fas fa-globe"></i>
            </div>

            <div>
              <i className="fab fa-twitter"></i>
            </div>

            <div>
              <i className="fas fa-envelope"></i>
            </div>
          </footer.IconWrapper>
        </footer.WrapperTwo>
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
