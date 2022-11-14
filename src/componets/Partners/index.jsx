import React from 'react';
import './index.scss'
import LogoSenac from '../../assets/img/senac.png'
import LogoSebrae from '../../assets/img/sebrae.png'
import LogoPortoDigital from '../../assets/img/porto-digital.png'
import ArrowDown from '../../assets/img/arrow-down.png'
const Partners = () => {
    return (
        <>
        <div className='partners full-w'>
            <div className='container'>
            <h1>Nossos parceiros</h1>
            <p>Contamos com parceiros de impacto</p>
            <div className='images'>
                <img src={LogoSenac} alt="img" />
                <img src={LogoSebrae} alt="img" />
                <img src={LogoPortoDigital} alt="img" />
            </div>
            </div>
        </div>
          <img className='m-t-20 arrow' src={ArrowDown} alt="" />
        </>
    );
};

export default Partners;