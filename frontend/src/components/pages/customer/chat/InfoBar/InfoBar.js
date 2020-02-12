
import React from 'react';

import onlineIcon from './../icons/onlineIcon.png';

import './infobar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>Sala {room}</h3>
    </div>
  </div>
);

export default InfoBar;