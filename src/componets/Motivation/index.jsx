import React from 'react';
import './index.scss'
import ImgMan from '../../assets/img/unsplash_rxpThOwuVgE.png'


const Motivation = () => {
    return (
        <div className='motivation container bg-w '>
          <div className='box-img'>
            <img src={ImgMan} alt="imagem homem explicando" />
            </div>
            <div className='box-text'>
            <h1 className='title'> Por que desenvolver uma estratégia de inovação para seu négocio?</h1>
            <p className='desc'>
            Ter uma planejamento de estratégia nos negócios auxilia no esclarecimento dos objetivos a serem atingidos.
            </p>
            <p className='talk'>
            <span>“</span>O processo de criação de uma estratégia de negócios permite identificar, bem como avaliar os pontos fortes e fracos da sua empresa, criando uma estratégia que capitaliza seus pontos fortes e supera ou elimina seus pontos fracos. <span>”</span></p>
            </div>
        </div>
    );
};

export default Motivation;