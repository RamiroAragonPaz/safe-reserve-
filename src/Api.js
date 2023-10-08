//const BASE_URL = 'http://3.15.29.166:3002/v1';

// Función para enviar una solicitud POST al endpoint de registro
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`http://3.15.29.166:3002/v1/user/signup`, {
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

// Otras funciones y endpoints pueden agregarse de manera similar