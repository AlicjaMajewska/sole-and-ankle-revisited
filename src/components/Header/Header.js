import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, WEIGHTS, QUERIES} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);


    return (
        <header>

            <SuperHeader/>
            <DecorativeLine/>
            <MainHeader>
                <Side>
                    <Logo/>
                </Side>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections with very very very very very very long suffix</NavLink>
                </Nav>
                <Side/>
                <MobileIconNav>
                    <UnstyledButton>
                        <Icon id="shopping-bag" strokeWidth={1} size={24}/>
                        <VisuallyHidden>Shopping cart</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton>
                      <Icon id="search" strokeWidth={1} size={24} />
                        <VisuallyHidden>Search</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" strokeWidth={1} size={24}/>
                        <VisuallyHidden>Menu</VisuallyHidden>
                    </UnstyledButton>
                </MobileIconNav>

            </MainHeader>
            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};


const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;
  
  @media ${QUERIES.phoneAndSmaller} {
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  }
`;

const MobileIconNav = styled.nav`
  display: none;  

    @media ${QUERIES.tabletAndSmaller} {
      display: flex;
      gap: 32px;
    }
    
    @media ${QUERIES.phoneAndSmaller} {
      gap: 16px;
    }
    
`;

const DecorativeLine = styled.div`
  display: none;

 @media ${QUERIES.tabletAndSmaller} {
  display: block;
  height: 4px;  
  background-color: var(--color-gray-900);
    }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8vw  - 4rem, 3rem);
  margin: 0px 48px;
  //overflow: auto;
   @media ${QUERIES.tabletAndSmaller} {
    display: none;
}
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
