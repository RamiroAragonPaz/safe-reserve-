import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../Api'; 


const FormLogIn = () => {
 
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [respuestaAPI, setRespuestaAPI] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {      
      Email_User: email,
      Password_User: contrasena,
    };
  
  try {
    const response = await loginUser(userData);
    if(response.login === false){
      throw new Error('Usuario y/o contraseña incorrectos');

    }else{
    setRespuestaAPI(response);
    localStorage.setItem('userId', response.data.ID_User_Pk);
    localStorage.setItem('userName', response.data.Name_User);
    navigate('/mainpage'); 
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    setErrorMessage('Usuario y/o contraseña incorrectos');

  }
};
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'usuario':
        setUsuario(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'contrasena':
        setContrasena(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className="div-form" onSubmit={handleSubmit}>
    
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />
      <br />
      <label htmlFor="contrasena">Contraseña:</label>
      <input type="password" id="contrasena" name="contrasena" value={contrasena} onChange={handleInputChange} required />
      <br />
      <button type="submit">Ingresar</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default FormLogIn;