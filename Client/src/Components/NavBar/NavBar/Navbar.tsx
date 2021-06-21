import React, { useState } from "react";
import { NavItems } from "../NavItems/NavItem";
import "./Navbar.scss";
import * as AiIcons from "react-icons/ai";

const Navbar: React.FC = () => {
  const [menuMobile, setMenuMobile] = useState<boolean>(false);

  return (
    <div className="ContainerNavbar">
      <div
        className={
          menuMobile ? "NavbarMobileOpen NavBar" : "NavBar NavbarMobileClose"
        }
      >
        <div className="MenuIcons" onClick={() => setMenuMobile(!menuMobile)}>
          <AiIcons.AiOutlineMenu />
        </div>
        <ul className={menuMobile ? "ul ulMobileOpen" : "ul ulMobileClose"}>
          {NavItems.map((item) => (
            <li
              className={menuMobile ? "li liMobileOpen" : "li liMobileClose"}
              key={item.id}
            >
              <a className="a" href={item.link}>
                {item.itemName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
