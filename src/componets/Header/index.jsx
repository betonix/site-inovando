import React, { useEffect, useState } from 'react';
import './index.scss'

import Logo from '../../assets/img/Logo Inovando_Positivo.png'

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
            <nav>
            <ul className='nav'>
                <li> <a className='hover-underline-animation' href="">Quem somos</a> </li>
                <li><a className='hover-underline-animation' href=""> Nosso processo</a></li>
                <li> <a className='hover-underline-animation' href="">Tecnologias</a> </li>
            </ul>
            </nav>
            <a target="_blank" href="https://web.whatsapp.com/send?phone=5581996408766&text=Olá gostaria de saber mais sobre desenvolvimento de site ou aplicativo." className='fale-conosco text'>Fale conosco</a>
        </div>
        </div>
    );
};

export default Header;
