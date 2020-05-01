import React from 'react';
import Carrousell from './Carrousell';
import Timeuntill from './Timeuntill'

const Featured = () => {
    return (
        <div style={{position:"relative"}}>
        <Carrousell/>
        <div className='artist_name'>
        <div className='wrapper'>Machine Learning</div>
        </div>
            <Timeuntill/>
        </div>
    );
};

export default Featured;