import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';

const NewTask = () => {

const [Task, setTask] = useState(localStorage.getItem('todo'));

const newTask = (e)=>{
    e.preventDefault();
   
        let content = document.querySelector('input').value;
        const storedComments = JSON.parse(Task);
        const user = jwtDecode(localStorage.getItem('token'))
        // Ajoute le nouveau commentaire au tableau existant
        console.log(storedComments)
        storedComments.push({'todo' : content, 'id' : '21212', 'completed' : false});

        // // Enregistre le tableau de commentaires mis à jour dans le localStorage
        localStorage.setItem('todo', JSON.stringify(storedComments));
        // setStorage(localStorage.setItem('comment', JSON.stringify(storedComments)));
}

    return (
        <div>
            
            <form  className='container' onSubmit={newTask}>
                <input type='text' id='task'/>
                <button className='btn btn-primary'> nouvelle task</button>
            </form>

        </div>
    );
};

export default NewTask;