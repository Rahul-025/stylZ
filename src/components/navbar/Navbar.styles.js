import {Link} from 'react-router-dom'
import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 7vh;
    background-color: var(--navbar-color);
    padding: 0 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

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
    font-weight: 600;
    color: var(--text-primary-blue);
`;

export const Logo = styled.img`
    width: 25px;
`;

export const CartIconContainer = styled.div`
   position: relative;
   color: var(--text-primary-blue);
`;  
export const CartCount = styled.span`
   position: absolute;
   top: 26%;
   left: 36%;
   font-size: 1.4rem;
   user-select: none;
   cursor: pointer;
`;  