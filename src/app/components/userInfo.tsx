import React from 'react';

// Interfaz para el tipo de datos que recibimos
interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

const UserInfo: React.FC<User> = ({ name, picture }) => {
  const fullName = `${name.first} ${name.last}`;

  return (
    <div className="w-[300px] h-[400px] rounded-xl overflow-hidden bg-gradient-to-b from-[#444] to-[#ddd] relative">
      {/* Parte superior */}
      <div className="flex flex-col items-center justify-center p-4 h-1/2 bg-[#333]">
        <img src={picture.large} alt="Perfil" className="w-[80px] h-[80px] rounded-full mb-2" />
        <p className="text-white text-xl font-bold">{fullName}</p>
      </div>

      {/* Parte inferior con iconos */}
      <div className="absolute bottom-0 w-full h-1/2 bg-[#ddd] p-4 border-t-4 border-[#444]">
        <div className="flex justify-around items-center w-full">
          {[...Array(6)].map((_, index) => (
            <span key={index} className="text-[#444] text-2xl cursor-pointer hover:text-[#222]">
              ⭐ 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
