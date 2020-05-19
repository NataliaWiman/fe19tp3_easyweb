import * as presentation from "./Subscribe.styled";

const Footer = ({ data }) => {
  console.log(data);
  return (
    <presentation.Container>
      <presentation.UlList>
        <li>
          <i className="fas fa-paper-plane"></i>
        </li>
        <li>
          <h4>SUBSCRIBE TO STAY IN THE LOOP</h4>
        </li>
        <li>
          <form>
            <input></input>
            <button>SEND</button>
          </form>
        </li>
      </presentation.UlList>
    </presentation.Container>
  );
};

export default Footer;
