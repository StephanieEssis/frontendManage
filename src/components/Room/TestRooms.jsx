import React, { useState, useEffect } from 'react';
import { roomService } from '../../services/roomService';

const TestRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testFetchRooms = async () => {
      try {
        console.log('Début de la récupération des chambres...');
        const data = await roomService.getAllRooms();
        console.log('Chambres récupérées:', data);
        setRooms(data);
        setError(null);
      } catch (err) {
        console.error('Erreur lors de la récupération des chambres:', err);
        setError(err.message || 'Erreur lors de la récupération des chambres');
      } finally {
        setLoading(false);
      }
    };

    testFetchRooms();
  }, []);

  if (loading) {
    return <div>Chargement des chambres...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div>
      <h2>Test de récupération des chambres</h2>
      <div>
        <h3>Nombre de chambres: {rooms.length}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {rooms.map((room) => (
            <div key={room._id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
              <h4>{room.name}</h4>
              <p>Catégorie: {room.category?.name || 'Non catégorisée'}</p>
              <p>Prix: {room.price}€</p>
              <p>Capacité: {room.capacity} personnes</p>
              <p>Disponible: {room.isAvailable ? 'Oui' : 'Non'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestRooms; 