import React from 'react';

const Button = (props) => {
    return (
        <button className='bg-indigo-600 font-[Poppins] text-white py-2 px-6 rounded md:ml-4 hover:bg-indigo-400 duration-500'>
            {props.children}
        </button>
    );
};

export default Button;