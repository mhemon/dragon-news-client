import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='p-2' style={{background: '#F3F3F3'}}>
            <h5 className='p-2'>Q-Zone</h5>
            <div className='text-center'>
                <img className='img-fluid' src={qzone1} alt="" />
                <img className='img-fluid' src={qzone2} alt="" />
                <img className='img-fluid' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;