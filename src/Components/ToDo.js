import React from 'react';
import { Link } from 'react-router-dom';
import { CardPost } from 'reactstrap';

const ToDo = ({content, completed, id}) => {
    return (
        <div>
            <Link to={`/detail/${id}`}>
                        <p className=' border p-3 h4 mt-4'>{content}</p>
                        
            </Link>   
        </div>
    );
};

export default ToDo;