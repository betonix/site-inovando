import React from 'react';
import './index.scss'

import ImgProcess from '../../assets/img/process.png'
const Process = () => {
    return (
        <div className='process container'>
            <h1 className='title'>Processo de ponta-a-ponta</h1>
            <p className='desc'>Começamos o processo com o framework do Duplo Diamante para Descobrimento, Ideação e Validação, e implementamos utilizando a metodologia Scrum, para otimizar e dar mais eficiência ao processo de construção de produtos. </p>
            <div className='container-process-img'>
            <img src={ImgProcess} alt="imagem do processo" />
            </div>
      
        </div>
    );
};

export default Process;