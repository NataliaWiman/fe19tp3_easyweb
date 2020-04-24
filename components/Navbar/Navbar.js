import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks";
import { Header, StyledNavbar, BurgerWrapper } from "./NavbarStyled";
import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import LoadingDots from "../LoadingDots";

const Navbar = ({ data, menu, site }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Header>
      <StyledNavbar ref={node}>
        <Logo site={site} />
        <Menu open={open} setOpen={setOpen} data={data} menu={menu} />
        <BurgerWrapper>
          <LoadingDots />
          <Burger open={open} setOpen={setOpen} />
        </BurgerWrapper>
      </StyledNavbar>
    </Header>
  );
};

export default Navbar;
