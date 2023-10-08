import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
    <h1 className="title-index">Safe Reserve - Tu alquiler seguro</h1>
    <p>Encontrar un lugar seguro para disfrutar tus momentos, nunca fue más seguro y fácil gracias a la Web3</p>
    <div className="container-button">
      <Link to="/signin">
        <button className="button-49">Registrate</button>
      </Link>
      <Link to="/login">
        <button className="button-49">Ingresa</button>
      </Link>
    </div>
  </>
);

export default Home;
