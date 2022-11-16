import React from 'react';
import './index.scss'
import ArrowDown from '../../assets/img/arrow-down.png'
import ImagesCode from '../ImagesCode';

const About = () => {
    return (
        <div className='about container'>
            <div className='about-row'>
            <div className='box-img'>
                <ImagesCode/>
            </div>
            <div className='box-text'>
                <h1>Soluções perfeitas para o seu negócio.</h1>
                <p>A Inovando é uma empresa que tem como negócio desenvolver organizações através de consultorias, palestras, treinamentos e implantação de ferramentas de gestão e estruturas organizacionais.</p>
            </div>
           
            </div>
            <img className='m-t-20 arrow' src={ArrowDown} alt="" />
        </div>
    );
};

export default About;