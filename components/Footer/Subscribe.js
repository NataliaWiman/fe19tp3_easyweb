import * as subscribe from "./Subscribe.styled";
import * as styles from "../../styles/styled.js";

const Footer = ({ data }) => {
  return (
    <subscribe.Container>
      <subscribe.Wrapper>
        <i className="fas fa-paper-plane"></i>
        <h4>SUBSCRIBE TO STAY IN THE LOOP</h4>
        <div>
          <form>
            <input></input>
            <styles.Button>Send</styles.Button>
          </form>
        </div>
      </subscribe.Wrapper>
    </subscribe.Container>
  );
};

export default Footer;
