import React from "react";
import { NavBar, LogoMobile, Logo, ButtonWrapper, LoginButton, LogIn } from "./Nav.styled"

const Nav = () => {
  return (
    <NavBar>
      <LogoMobile
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg"
        alt="Netflix Logo"
      />
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <ButtonWrapper>
        <LoginButton>Sing In</LoginButton>
        <LogIn>Login In</LogIn>
      </ButtonWrapper>
    </NavBar>
  );
};

export default Nav;
