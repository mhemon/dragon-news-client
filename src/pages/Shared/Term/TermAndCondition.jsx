import React from 'react';
import { Link } from 'react-router-dom';

const TermAndCondition = () => {
    return (
        <div className='container text-center'>
            <h2>Terms and Conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam ea, impedit cupiditate odio commodi ut dolores minus nam iure optio laboriosam nostrum nobis excepturi sunt eligendi exercitationem sint odit. <br /> Go back to <Link to='/register'>Register</Link></p>
            
        </div>
    );
};

export default TermAndCondition;