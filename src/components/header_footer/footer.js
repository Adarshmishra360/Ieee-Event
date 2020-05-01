import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <div className='bck_red'>
        <Fade delay={500}>
        <div className='font_righteous footer_logo_venu'>The Event</div>
        <div className='footer_copyright'>
        techwizardadarsh@gmail.com <br/>All Right Reserved
        </div>
        </Fade>
            
        </div>
    );
};

export default Footer;