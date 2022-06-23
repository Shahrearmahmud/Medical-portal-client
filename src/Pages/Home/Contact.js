import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import contact from '../../assets/images/appointment.png';

const Contact = () => {
    return (

        <section style={{

            background: `url(${contact})`
        }} >

            <div className='flex flex-col justify-center items-center my-8 py-5'>
                <h2 className='text-primary'>Contact us</h2>
                <p className='text-2xl text-white'>Stay connected with us</p>

                <input type="text" placeholder="Email Address" className="input input-bordered input-xs w-full max-w-xs my-3" />


                <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs my-3" />



                <input type="text" placeholder="Your message" className="input input-bordered input-lg w-full max-w-xs my-3" />

                <PrimaryButton >Submit</PrimaryButton>

            </div>
        </section>

    );
};

export default Contact;