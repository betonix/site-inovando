import React, { useEffect, useState } from 'react';
import './index.scss'

import Logo from '../../assets/img/logo.png'

const Header = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset)
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`header ${offset > 10  ? `shadow` : ''} `} >
            <div className='container'>
            <div className='logo' src={Logo} alt=""></div>
            <ul className='nav'>
                <li>Quem somos</li>
                <li>Nosso processo</li>
                <li>Tecnologias</li>
            </ul>
            <a className='fale-conosco text'>Fale conosco</a>
        </div>
        </div>
    );
};

export default Header;
