import React from 'react';
import './index.scss'

import Logo from '../../assets/img/logo.png'

const Header = () => {
    return (
        <div className='header container'>
            <div className='logo' src={Logo} alt=""></div>
            <a className='fale-conosco text'>Fale conosco</a>
        </div>
    );
};

export default Header;
