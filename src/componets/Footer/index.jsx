import React from 'react';
import './index.scss'
import Logo from '../../assets/img/logo.png'
import Insta from '../../assets/img/Logo 2.png'
import Linkedin from '../../assets/img/Logo 11.png'

const Footer = () => {
    return (
        <div className='footer full-w'>
            <div className='container'>
            <dir className="logo-row">
                <div className='logo' src={Logo} alt=""></div>
                <div className='midias'>
                    <img src={Insta} alt="instagram logo" />
                    <img src={Linkedin} alt="linkedin logo" />
                </div>
            </dir>
            <p>Recife, 2022 <br /> <br /></p>
            <p>Rua Alfândega, 35 – Loja 0401 <br />
                Bairro do Recife  <br />
                Shopping Paço Alfândega – Cx.PT 053  <br />
                Recife – PE | CEP: 50030-030</p>
            </div>
        </div>
    );
};

export default Footer;