import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.Config';

const Singin = () => {
    const [errorsee,seterrorsee]=useState('')


    const handalsingin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)
        seterrorsee('')


        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
           console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
            seterrorsee(error.message)
        })
    }
    return (
        <div className='w-full '>
            <div className='mx-auto w-2/4 space-y-2'>
            <p className='text-5xl font-bold placeholder:'>please sing in </p>
            <form onSubmit={handalsingin} >
                <input className='p-1 mb-3 w-3/4 text-2xl' placeholder='Your Email' type="email" name="email" id="" /><br />
                <input className='p-1 mb-3 w-3/4 text-2xl' placeholder='Password' type="password" name="password" id="" /><br />
                <input className='btn btn-secondary w-3/4' type="submit" value="Sing in" />
            </form>
            <p className={!errorsee && 'hidden'}>{errorsee}</p>
            </div>
             
                
               
            
        </div>
    );
};

export default Singin;