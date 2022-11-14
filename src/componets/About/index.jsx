import React from 'react';
import './index.scss'
import ArrowDown from '../../assets/img/arrow-down.png'

const About = () => {
    return (
        <div className='about container'>

            <h1>Soluções perfeitas
para o seu negócio.</h1>
<p>A Inovando é uma empresa que tem como negócio desenvolver organizações através de consultorias, palestras, treinamentos e implantação de ferramentas de gestão e estruturas organizacionais.</p>
<img className='m-t-20 arrow' src={ArrowDown} alt="" />
        </div>
    );
};

export default About;