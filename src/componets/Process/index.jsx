import React from 'react';
import './index.scss'

import ImgProcess from '../../assets/img/process.png'
import ImgProcessH from '../../assets/img/process-h.png'


const Process = () => {
    return (
        <div className='process container'>
            <h1 className='title'>Processo de ponta-a-ponta</h1>
            <p className='desc'>Começamos o processo com o framework do Duplo Diamante para Descobrimento, Ideação e Validação, e implementamos utilizando a metodologia Scrum, para otimizar e dar mais eficiência ao processo de construção de produtos. </p>
            <div className='container-process-img'>
            <img className='img-v' src={ImgProcess} alt="imagem do processo" />
            <img className='img-h' src={ImgProcessH} alt="imagem do processo" />
            </div>
        </div>
    );
};

export default Process;