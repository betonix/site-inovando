import React from 'react';
import './index.scss'
import ArrowDown from '../../assets/img/arrow-down.png'
import ImagesCode from '../ImagesCode';

const About = () => {
    return (
        <div className='about container bg-w '>
            <div className='about-row'>
            <div className='box-img'>
                <ImagesCode/>
            </div>
            <div className='box-text'>
                <h1>Soluções adapatadas para o seu negócio.</h1>
                <p>A Inovando Tecnologia é uma empresa que tem como objetivo desenvolver organizações através do desenvolvimento de <bold>aplicativos</bold> e <bold>sistemas</bold> para solucionar problemas dentro das organizações, ajudando assim a expandir seus negócios através de soluçoes costumizadas.</p>
            </div>
           
            </div>
            <img className='m-t-20 arrow' src={ArrowDown} alt="" />
        </div>
    );
};

export default About;