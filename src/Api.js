// Función para enviar una solicitud POST al endpoint de registro
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`https://safe-reserve-api.onrender.com/v1/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error al registrar el usuario');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (userData) => {
    try {
      const response = await fetch(`https://safe-reserve-api.onrender.com//v1/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Error al registrar el usuario');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  export const getHouses = async (userId) => {
    try {
      const response = await fetch(`https://safe-reserve-api.onrender.com/v1/user/${userId}/houses`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Error al obtener las casas del usuario');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };