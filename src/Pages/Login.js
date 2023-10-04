import React, { useState, useEffect } from 'react';

const LoginPage = () => {
    // États pour stocker les données du formulaire
    const [Username, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Loged, setLoged] = useState(false)

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Password, Username);
       
        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            
            username: Username,
            password: Password,
            // expiresInMins: 60, // optional
        })
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            // Si l'authentification réussit, stockez les informations d'authentification dans le localStorage
            localStorage.setItem('token', response.token);
            // Redirigez l'utilisateur vers la page de commentaire (ou autre page protégée)
            window.location.reload(); // Rafraîchissez la page pour re-render le composant CommentForm
        })
        .catch(error => {
            // Gérez les erreurs d'authentification ici
            console.error("Erreur d'authentification :", error);
        });

    
    }
    return (
        <div className="mb-4 border container row col-6 mx-auto d-flex flex-column login-page">
            <h2>Connexion</h2>
            <form className='container' onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input
                        
                            className="form-control"
                            type="text"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)} // Utilise onChange pour mettre à jour l'état
                            required
                            placeholder='Email address'
                        />
                <label for="email">Email address</label>
            </div>
                <div className="form-floating">
                    
                    <input
                    className='form-control'
                        type="password"
                        id="password"
                        placeholder='Mot de passe'
                        name="password"
                        onChange={(e) => setPassword(e.target.value)} // Utilise onChange pour mettre à jour l'état
                        required
                    />
                    <label For="password">Mot de passe</label>
                </div>

        


                <button className='btn btn-primary d-flex justify-content-center mx-auto mt-3 mb-3' type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default LoginPage;