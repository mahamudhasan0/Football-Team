import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './AddPlayer.css';
import playerData from '../../player.json';
import Cart from '../Cart/Cart';

const AddPlayer = () => {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPlayers(playerData);
  }, []);

  const handleAddPlayer = (players) => {
    const newCart= [...cart, players];
    setCart(newCart);
  };

  return (
    <div className="AddPlayers container">
      <div className="player-content">
        {players.map((player) => (
          <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>
          ))}
      </div>
      <div className="player-count">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default AddPlayer;
