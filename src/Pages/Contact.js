import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';



const Email = ()=> {
    const [formData, setFormData] = useState({
        from_name: '',
        to_name: '',
        message: '',
    });

    const [isValid, setisValid] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(
            {
            ...formData,
            [name]: value,
        }
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_ebgtpb4',
            'template_xiamnvw',
            formData,
            '_SOX3hmhUxFUeAsZJ'
        )
        .then((result) => {
            console.log(result.text);
            setFormData(
                {
                    from_name: '',
                    to_name: '',
                    message: '',
                }
        )
        setisValid(true);
        }, (error) => {
            console.log(error.text);
        });
    };



    return (
        <div className='container'>

        {isValid ? (
            <>
            <h4>Mail Envoyé avec succès</h4>
            </>
        ) : (
            <>

            </>
        )}
        <form className='row' onSubmit={handleSubmit}>
            <input className='form-control mx-5 mt-3 mb-3' type="text" value={formData.from_name} name="from_name" onChange={handleInputChange}
            placeholder="votre nom" required />
            <input  className='form-control mx-5 mt-3 mb-3' value={formData.to_name}  type="text" name="to_name" onChange={handleInputChange}
            placeholder="destinataire" required />
            <textarea  className='form-control mx-5 mt-3 mb-3' value={formData.message} name="message" onChange={handleInputChange} placeholder="Votre message" required />
            <button className='btn btn-primary mx-5 mt-3 mb-3' type="submit">Envoyer</button>
        </form>
        </div>
);
}
export default Email;