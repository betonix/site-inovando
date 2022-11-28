import React from 'react';
import './index.scss'
import LogoSenac from '../../assets/img/senac.png'
import LogoSebrae from '../../assets/img/sebrae.png'
import LogoPortoDigital from '../../assets/img/porto-digital.png'
import LogoSubway from '../../assets/img/subway-logo-8 1 (1).png'
import LogoHarmonia from '../../assets/img/imageedit_1_4079435807 1 (2).png'
import AnjosDoPoco from '../../assets/img/imageedit_9_3481422096 1.png'
import ArrowDown from '../../assets/img/arrow-down.png'

const Partners = () => {
    return (
        <>
        <div className='partners full-w'>
            <div className='container'>
            <h1>Clientes e parceiros</h1>
            <p>Contamos com parceiros de impacto</p>
            <div className='images'>
                <img src={LogoSenac} alt="img" />
                <img src={LogoSebrae} alt="img" />
                <img src={LogoPortoDigital} alt="img" />
                <img src={LogoSubway} alt="img" />
                <img src={LogoHarmonia} alt="img" />
                <img src={AnjosDoPoco} alt="img" />
            </div>
            </div>
        </div>
          <img className='m-t-20 arrow' src={ArrowDown} alt="" />
        </>
    );
};

export default Partners;