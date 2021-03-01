import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
  const { img ,name, salary} = props.player;

  return (
    <div className="Player">
      <div className="image">
        <img src={img} alt="user-img" />
      </div>
      <div className="details">
        <h4>{name}</h4>
        <div className="addPlayer-button">
          <h5>Salary:${salary}</h5>
          <button type="button" onClick={() =>props.handleAddPlayer(props.player)}>
            <FontAwesomeIcon icon={faUserPlus} /> Add Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
