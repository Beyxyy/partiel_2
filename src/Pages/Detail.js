import React, { useEffect, useState } from 'react';
import ToDo from '../Components/ToDo';
import { useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Detail = () => {

    const [Uniq, setUniq] = useState(JSON.parse(localStorage.getItem('todo')));
    const id = useParams(); 
    const [Message, setMessage] = useState(JSON.parse(localStorage.getItem('message')) ?? '' );
    console.log(Message);

    const handleclick= (e)=>{
        e.preventDefault();
        Uniq.filter(u=> u.id == id.id).map((task, index)=>(
            task.completed ? (task.completed =false) : (task.completed =true)
        ))
        localStorage.setItem('todo', JSON.stringify(Uniq));
        setUniq(Uniq);
        console.log(JSON.parse(localStorage.getItem('todo')));
    }

    
    const handlesupp= (e)=>{
        e.preventDefault();
        const index = document.querySelector('#index').value
        Message.splice(index,1);
        localStorage.setItem('message', JSON.stringify(Message));
        setMessage(JSON.parse(localStorage.getItem('message')));
        console.log(JSON.parse(localStorage.getItem('message')));
    }
    
    const handleadd= (e)=>{
        e.preventDefault();
        let content = document.querySelector('input').value;
        const storedComments = JSON.parse(localStorage.getItem('message')) || [];
        const user = jwtDecode(localStorage.getItem('token'))
        // Ajoute le nouveau commentaire au tableau existant
        console.log(storedComments)
        storedComments.push({'content' : content, 'id' : `${id.id}`, 'user' : user.username});

        // // Enregistre le tableau de commentaires mis à jour dans le localStorage
        localStorage.setItem('message', JSON.stringify(storedComments));
        // setStorage(localStorage.setItem('comment', JSON.stringify(storedComments)));
        setMessage(JSON.parse(localStorage.getItem('message')));
       
        
    }
    
    
        


    return (
        <div>
            {Uniq.map((task, index)=>(
                <div>

                    {task.id==id.id ? (
                    <div>
                        <p>{task.todo}</p>
                        
                        <button className='btn btn-primary' onClick={handleclick}> changer le statut</button>
                        <form className='mx-4 mt-4 container d-flex justify-content-center flex-column' onSubmit={handleadd}>
                            <input id='message' type='text' placeholder='entrez votre commentaire'/><br></br>
                        <button className='btn btn-primary' >ajouter le commentaire</button>
                        </form>
                        {/* <button onClick={handlesupp}>supprimer le commentaire</button> */}
            
                        
                        {Message !=='' ? (
                            Message.filter(e=> e.id===id.id)
                            .map((elt,index) =>(
                                <p id={index}>de {elt.user} <br></br>{elt.content}
                                <button onClick={handlesupp} id='index' value={index} className='btn btn-alert'> supprimer
                                    </button></p>
                            ))
                        ) : (
                            <p></p>
                        )}



                        {/* {console.log(task)} */}
                    </div>
                    ) :(

                        <p>
                            {/* {console.log(task.id)}
                            {console.log(id.id)} */}
                        </p>

                    )}
                    
                </div>
            ))}
        </div>
    );
};

export default Detail;