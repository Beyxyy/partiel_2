import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import ToDo from '../Components/ToDo';
import { Link } from 'react-router-dom';

const Landing = () => {


    
    const [isLoading, setisLoading] = useState(true);
    const [toDo, settoDo] = useState(localStorage.getItem('todo') ?? []);
    const [inter, setinter] = useState([]);

    useEffect(()=>{
        axios.get('https://dummyjson.com/todos')
            .then(res=>{
                console.log(res);
                localStorage.setItem('todo', JSON.stringify(res.data.todos));
                // console.log(res.data.todos);
                setinter([res.todos]);
                settoDo(res.data.todos);
                console.log(res.data.todos);
                setisLoading(false);
            })   
    }, []);





        



    return (
        <div>
            <div className='container'>
            <h1>Bienvenue sur mon site évalué</h1>
            <h2>Tâches enregistrées</h2>

            <Link to='/newtask'> New Task</Link>
            {isLoading ? (
                <div>
                    <Spinner color="primary">
                        Loading...
                    </Spinner>
                </div>
            ) : (
                <div>
                    {toDo.map((elt, index)=>(
                        <div>
                        <ToDo content={elt.todo} completed={elt.completed} id={elt.id}/>    
                       </div>
                        // elt.map((e, i)=>{
                        //     <div className='test'>
                                
                        //     </div>
                        // })
                   
               ))}
                </div>
            )}
        </div>
        </div>
    );
};

export default Landing;