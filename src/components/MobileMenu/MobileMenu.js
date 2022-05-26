/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({isOpen, onDismiss}) => {
    return (
        <MenuDialogOverlay isOpen={isOpen}
                           onDismiss={onDismiss}>
            <MenuDialogContent>
                <CloseButton onClick={onDismiss}>
                    <Icon id="close"/>
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                </CloseButton>

                <SpaceFiller/>

                <MobileSideNav>
                    <NavLink href="/sale" aria-current="true" isCurrent={true}>Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </MobileSideNav>

                <MenuDialogFooter>
                    <FooterLink href="/terms">Terms and Conditions</FooterLink>
                    <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    <FooterLink href="/contact">Contact Us</FooterLink>
                </MenuDialogFooter>
            </MenuDialogContent>
        </MenuDialogOverlay>
    );
};

export default MobileMenu;

const SpaceFiller = styled.div`
margin-bottom: auto;
`;

const CloseButton = styled(UnstyledButton)`
padding: 16px;
position: absolute;
top: 6px;
right: 0;

`;

const MenuDialogOverlay = styled(DialogOverlay)`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
background-color: var(--color-backdrop);
display: flex;
justify-content: flex-end;
`;

const MenuDialogContent = styled(DialogContent)`
display: flex;
height: 100%;
flex-direction: column;
justify-content: space-between;
padding: 36px;
background-color: var(--color-white);
width: 300px;


`;

const MobileSideNav = styled.nav`
display: flex;
flex-direction: column;
gap: 16px;
`;

const NavLink = styled.a`
font-weight: ${WEIGHTS.medium};
text-decoration: none;
color: ${p => p.isCurrent ? 'var(--color-secondary)' : 'var(--color-gray-900)'};
text-transform: uppercase;
`;

const MenuDialogFooter = styled.footer`
margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
      font-size: ${18 / 16} rem;
`;


const FooterLink = styled.a`
  color: var(--color-gray-700);
  font-size: ${14 / 16} rem;
  text-decoration: none;
`;