import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Nav from '../navbar/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
           <Outlet></Outlet>
            
        </div>
    );
};

export default Main;