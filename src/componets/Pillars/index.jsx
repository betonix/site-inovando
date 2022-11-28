import React from 'react';

import './index.scss'

import LogoMarketing from '../../assets/img/marketing.png'
import FeedBack from '../../assets/img/perspective_matte (4).png'
import People from '../../assets/img/perspective_matte (5) 1.png'
import Design from '../../assets/img/Add_apps_perspective_matte.png'

import Arrow from '../../assets/img/Arrow 3.png'

const cards = [
    {
        img : Design,
        title: 'Design e Tecnologia',
        desc: 'Construimos um produto ou serviço a partir das necessidades do usuário, trazendo uma experiência mais completa e agradável.'
    },
    {
        img : People,
        title: 'Gestão de Pessoas',
        desc: 'Usamos técnicas que tem como objetivo o desenvolvimento do capital humano na nossa organização'
    },
    {
        img : LogoMarketing,
        title: 'Marketing e Estratégia',
        desc: 'Estudamos a necessidade dos nosso clientes para criar estratégias e construir a melhor solução viável para eles.'
    },
    {
        img : FeedBack,
        title: 'Feedbacks e Humanização',
        desc: 'Buscamos uma melhoria continua dos nossos processos implementando uma cultura de feddbacks.'
    },
]

const Pillars = () => {
    return (
        <div className='pillars full-w g-w '>
            <div className='container'>
            <h1>Nossos pilares da Inovação</h1>
            <p>O nosso objetivo é o desenvolvimento de tecnologias que possam resolver problemas reais dos nossos clientes de modo que o seu desempenho e competitividade sejam otimizadas, através da implementação de aplicativos e plataformas sistemáticas e adequadas às suas respectivas necessidades.</p>
        <div className='cards'>
            {cards.map(item => (
                <div className='card'>
                <img src={item.img} alt="" />
                <p className='title'>{item.title}</p>
                <p className='desc'>{item.desc}</p>
                </div>
            ))}
          
        </div>
        </div>
        <img className='arrow-h' src={Arrow} alt="" />
        </div>
    );
};

export default Pillars;