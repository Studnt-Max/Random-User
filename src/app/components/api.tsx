export const fetchUserData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?apikey=3X7V-Z16B-ADXR-VYD3');
      const data = await response.json();
      return data.results[0]; // Devuelve el primer usuario de la respuesta
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };
  