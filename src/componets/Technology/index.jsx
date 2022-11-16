import React from 'react';
import './index.scss'

import Ionic from '../../assets/img/ionic dark logotype blue.png'
import GitHub from '../../assets/img/GitHub-Logo.png'
import Firebase from '../../assets/img/logo-standard.png'
import Node from '../../assets/img/node-js.png'
import ReactLogo from '../../assets/img/React_logo_wordmark.png'
import Amazon from '../../assets/img/amazon-logo-10.png'

const cards = [
    {
        img : Ionic
    },
    {
        img : GitHub
    },
    {
        img : Firebase
    },  
    {
        img : ReactLogo
    },
    {
        img : Node
    },
    {
        img : Amazon
    }
]
const Technology = () => {
    return (
        <div className='tech container'>
            <div className='box-text'>
            <h1 className='title'>Tecnologias que utilizamos</h1>
            <p className='desc'>Temos uma equipe multidisciplinar e muito qualificada nas diversas áreas de tecnologia para desenvolver a solução perfeita para você, sua empresa e seu cliente.</p>
            </div>
            <div className='box-img'>
            <div className='cards'>
                {cards.map(item=>(
                    <img src={item.img} alt="" />
                ))}
            </div>
            </div>
        </div>
    );
};

export default Technology;