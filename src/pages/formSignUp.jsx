import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Api'; 


const FormSignIn = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [respuestaAPI, setRespuestaAPI] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      Name_User: usuario,
      Email_User: email,
      Password_User: contrasena,
    };
  
  try {
    const response = await registerUser(userData);
    if(response.estado === false){}
    else{
      setRespuestaAPI(response);
      localStorage.setItem('userId', response.data.ID_User_Pk);
      localStorage.setItem('userName', usuario); 
      navigate('/mainpage');
   }
  } catch (error) {
    // Handle errors
    console.error(error);
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
      <label htmlFor="usuario">Usuario:</label>
      <input type="text" id="usuario" name="usuario" value={usuario} onChange={handleInputChange} required />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />
      <br />
      <label htmlFor="contrasena">Contraseña:</label>
      <input type="password" id="contrasena" name="contrasena" value={contrasena} onChange={handleInputChange} required />
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default FormSignIn;