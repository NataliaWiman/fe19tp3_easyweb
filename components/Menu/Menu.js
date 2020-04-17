import Link from "next/link";
import { bool } from "prop-types";
import { StyledMenu } from "./MenuStyled";

const Menu = ({ menu, open }) => {
  const MainMenu = menu.map((item) => (
    <li key={item.id} className="main-nav__item">
      <a href={item.refUrl} className="main-nav__link">
        {item.label}
      </a>
    </li>
  ));

  return (
    <StyledMenu open={open}>
      <ul className="main-nav__list">{MainMenu}</ul>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
