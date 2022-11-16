import React from 'react';
import './index.scss'

import LGPDImg from '../../assets/img/unsplash_webyw4NsFPg.png'

const LGPD = () => {
    return (
        <div className='lgpd container'>
            <div className='box-text'>
            <h1 className='title'>Proteção de dados e LGPD</h1>
            <p className='desc'>Nos preocupamos com a segurança de seus dados. Por isso, temos um departamendo totalmente dedicado a este tema, para que todo nosso processo siga rigorosamente a política interna e externa da Lei Geral de Proteção de Dados.</p>
            </div>
            <div className='box-img'>
                <img src={LGPDImg} alt="imagem de lgpd" />
            </div>
        </div>
    );
};

export default LGPD;