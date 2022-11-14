import React from 'react';
import './index.scss';
import ImgCode from '../../assets/img/unsplash_4hbJ-eymZ1o.png'
import ImgMan from '../../assets/img/unsplash_fotKKqWNMQ4.png'
import ImgCicle from '../../assets/img/Ellipse 837.png'

const ImagesCode = () => {
    return (
        <div className='imagesCode'>

            <div className='container-img'>
            <img className='man' src={ImgMan} alt="" />
            <img className='code' src={ImgCode} alt="" />
            <img className='circle' src={ImgCicle} alt="" />
            </div>
            
        </div>
    );
};

export default ImagesCode;