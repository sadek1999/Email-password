import React from 'react';

const Home = () => {
    return (
        <div>
            <p className='font-bold text-3xl'>tis is home page.....</p>
            <Link to={'/singin'}>
            <button className='btn btn-primary'>Sing in</button>
            </Link>
            <Link to={'/singup'}>
            <button className='btn btn-secondary'>Sing up</button></Link>
        </div>
    );
};

export default Home;