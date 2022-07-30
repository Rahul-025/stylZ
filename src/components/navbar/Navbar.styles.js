import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 7vh;
  background-color: var(--navbar-color);
  padding: 3.2rem 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  user-select: none;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  position: fixed;
  top: 0;
  z-index: 1;
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-items: center;
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary-blue);
  cursor: pointer;
`;

export const Logo = styled.img`
  margin: 0.5rem 0 0 0.5rem;
  width: 5.5rem;
`;

export const CartIconContainer = styled.div`
  position: relative;
  color: var(--text-primary-blue);
`;
export const CartCount = styled.span`
  position: absolute;
  top: -9px;
  right: -13px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;
  font-size: 1.4rem;
  background-color: var(--text-primary-blue);
  color: var(--body-yellow);
  border-radius: 100%;
  cursor: pointer;
  user-select: none;
`;
