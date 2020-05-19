import Link from "next/link";
import { bool } from "prop-types";
import { StyledMenu, MenuCover } from "./MenuStyled";

const Menu = ({ menu, open }) => {
  const MainMenu = menu.map((item) => (
    <li key={item.id}>
      <a href={item.refUrl}>{item.label}</a>
    </li>
  ));

  return (
    <StyledMenu open={open}>
      <ul>{MainMenu}</ul>
      <MenuCover open={open} />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;