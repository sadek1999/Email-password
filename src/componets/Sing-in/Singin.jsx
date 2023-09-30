import React from 'react';

const Singin = () => {
    return (
        <div className='w-full '>
            <div className='mx-auto w-2/4 space-y-2'>
            <p className='text-5xl font-bold placeholder:'>please sing in </p>
            <form >
                <input className='p-1 mb-3 w-3/4 text-2xl' placeholder='Your Email' type="email" name="" id="" /><br />
                <input className='p-1 mb-3 w-3/4 text-2xl' placeholder='Password' type="password" name="" id="" /><br />
                <input className='btn btn-secondary w-3/4' type="submit" value="Sing in" />
            </form>
            </div>
            
        </div>
    );
};

export default Singin;