import React from 'react';
import './Card.css';

const Card = ({imageUrl, activityName, type, toggleModal, activity}) => {
  return (
    <figure onClick={() => toggleModal(activity)}>
      <img src={imageUrl.toString()} />
      <figcaption>
        <p>{activityName}</p>
        <p>Type of Activity: {type}</p>
      </figcaption>
    </figure>
   );
}

export default Card;