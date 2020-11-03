import styled from "styled-components"
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    position: sticky;
    top: 0px;
    background-color: #111;
`;

export const Logo = styled.img`
    width: 136px;
    height: 36px;
    display: none;
    ${mediaQueries("xs")`
    display: block;
`};
`;

export const LogoMobile = styled.img`
    height: 36px;
    width: 25px;
    display: block;
    ${mediaQueries("xs")`
    display: none;
`};
`;

export const LoginButton = styled.button`
    min-width: 112px;
    padding: 9px 20px;
    font-size: 16px;
    margin: 0 0 0 8px;
    color: #fff;
    background-color: #e50914;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: .1px;
    border-radius: 3px;
    border: none;
    opacity: 0.9;

    &:hover {
        opacity: 1;
    }
`;

export const LogIn = styled(LoginButton)`
    font-weight: 400;
    border: 1px solid #888;
    background-color: transparent;

    &:hover {
        text-decoration: none;
        background-color: rgba(150,150,150,.3);
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
`;