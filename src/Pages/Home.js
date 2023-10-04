import React, { useState } from 'react';
import Login from './Login';
import Landing from './Landing';

const Home = () => {

const [isLoged, setisLoged] = useState(localStorage.getItem('token') ?? false)
  

    return (
        <div>
            {isLoged ? (
                <div>
                    <Landing/>
                </div>
            ):(
                 <div>
                    <Login/>
                 </div>   
            )}
            
        </div>
    );
};

export default Home;