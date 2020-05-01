import React from 'react';
import Zoom from 'react-reveal/Zoom'
import calender from '../../resources/images/icons/calendar.png';

const Venuinfo = () => {
    return (
        <div className='bck_black'>
        <div className='center_wrapper'>
        <div className='vn_wrapper'>
        <Zoom duration={500}><div className='vn_item'>
        <div className='vn_outer'>
        <div className='vn_inner'>
        <div className='vn_icon_square bck_red'></div>
        <div className='vn_icon' style={{background:`url(${calender})`}}></div>
        <div className='vn_title'>Event Date & Time</div>
        <div className='vn_desc'>2 May @6:00 pm</div>
        <div className='vn_desc'><h3>Register Now</h3><br/>
         <a style={{color:'white'}} href='https://bit.ly/roadmapToML'>Click Here</a>
        </div>
        </div>
        </div>
        
        </div>
        </Zoom>
       
        </div>
      
        </div>
            
        </div>
    );
};

export default Venuinfo;