import React from 'react';
import { withProps } from 'recompose';

import { SIGN_IN, SIGN_UP } from '../../constants/types';

import NavLink from './NavLink';
import NavLinksRight from './NavLinksRight';


const ListItemWrapper = withProps(({ style, onClick }) => {style, onClick })('li');

const NavLinkAuth = ({ toggleModal }) => {
  return (
    <NavLinksRight>
      <ListItemWrapper className={'nav-item'} onClick={toggleModal(SIGN_UP)}>
        <NavLink label={'Sign Up'} style={'nav-link'} />
      </ListItemWrapper>
      <ListItemWrapper className={'nav-item'} onClick={toggleModal(SIGN_IN)} key={1}>
        <NavLink label={'Sign In'} style={'nav-link'} />
      </ListItemWrapper>
    </NavLinksRight>
  )
};

export default NavLinkAuth;