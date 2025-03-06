'use client';
import React, { useEffect, useState } from 'react';
import { fetchUserData } from './api'; 
import UserInfo from './userInfo'; 

const UserCard = () => {
  const [user, setUser] = useState<any>(null); 
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    
    const loadUser = async () => {
      setLoading(true); 
      try {
        const userData = await fetchUserData(); 
        setUser(userData); 
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      } finally {
        setLoading(false); 
      }
    };

    loadUser();
  }, []); 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="loader">Cargando...</div>
      </div>
    );
  }

  return user ? <UserInfo name={user.name} picture={user.picture} /> : <div>No se pudo cargar el usuario.</div>;
};

export default UserCard;
