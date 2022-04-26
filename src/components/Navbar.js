import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import logo from '../assets/icons/logo.svg';
import menu from '../assets/icons/icon-menu.svg';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='menu'>
        <img src={menu} alt='menu' />
      </div>
    </Wrapper>
  );
};

export default Navbar;
