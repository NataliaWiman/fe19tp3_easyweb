import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks";
import { Header, StyledNavbar } from "./NavbarStyled";
import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";

const Navbar = ({ data, menu, site }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Header>
      <StyledNavbar>
        <Logo site={site} />
        <div ref={node}>
          <Menu open={open} setOpen={setOpen} data={data} menu={menu} />
          <Burger open={open} setOpen={setOpen} />
        </div>
      </StyledNavbar>
    </Header>
  );
};

export default Navbar;
