import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className='d-flex justify-content-between no_underline menu bg-menu'>
            <ul className='gap-4 d-flex justify-content-center'>
                <li className=''><Link to='/'>Accueil</Link></li>
                <li className=''><Link to='/contact'>Contact</Link></li>
            </ul>
            </div>
        </div>
    );
};

export default Nav;