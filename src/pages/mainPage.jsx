import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import data from '../components/data.json'

const MainPage = () => {

  const housesData = data;
  const userName = localStorage.getItem('userName');

  return(
      <>
      <div className='button-container'>
        <ConnectButton />
      </div>
      <h1 className="title-index">Bienvenido {userName} </h1>
      <p>Encontrar un lugar seguro para disfrutar tus momentos, nunca fue más seguro y fácil gracias a la Web3</p>
      
      
      <h3>ESTAS SON TUS PROPIEDADES</h3>
      <div className='houses-container'>
      {housesData.map((house, index)=>{
        return(
          <div className='card' key={index}>
            <div className='img-container'>
              <img className='img-element' src={`./${house.images}`} alt={index}/>
            </div>
            <div>
            <p>Tipo: {house.type}</p>
            </div>
            <div>
              <p>Habitaciones: {house.rooms}</p>
            </div>
            <div>
              <p>Ubicación: {house.location}</p>
            </div>
            <div></div>
          </div>
        )
      })}
      </div>
    </>
    )
};

export default MainPage;
