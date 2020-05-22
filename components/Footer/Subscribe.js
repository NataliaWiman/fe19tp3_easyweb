import * as subscribe from "./Subscribe.styled";

const Footer = ({ data }) => {
  return (
    <subscribe.Container>
      <subscribe.Wrapper>
        <i className="fas fa-paper-plane"></i>
        <h4>SUBSCRIBE TO STAY IN THE LOOP</h4>
        <div>
          <form>
            <input></input>
            <button>SEND</button>
          </form>
        </div>
      </subscribe.Wrapper>
    </subscribe.Container>
  );
};

export default Footer;
