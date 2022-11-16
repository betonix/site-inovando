import React from 'react';
import './index.scss'

import BGHome from '../../assets/img/unsplash_IgUR1iX0mqM.png'

const Apresentation = () => {
    return (
        <div className='apresentation m-t-30 container'>
            <div className='box-text'>
            <h1 className='text m-b-20'>Utilizando tecnologia para criar produtos inovadores para sua empresa</h1>
            <p className='text m-b-20'>Uma equipe especialista em desenvolvimento de produtos para trazer evolução e impacto para seu negócio</p>
            <a href="" className='text'>Solicitar uma proposta</a>
            </div>
            <div className='img-bg'>
                <img src={BGHome} alt="" />
            </div>
        </div>
    );
};

export default Apresentation;