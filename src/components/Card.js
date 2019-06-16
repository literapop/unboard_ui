import React from 'react';

const Card = ({imageUrl, activityName, type, toggleModal, activity}) => {
  return (
    <figure onClick={() => toggleModal(activity)}>
      <img src={imageUrl.toString()} alt={activityName} />
      <figcaption>
        <p>{activityName}</p>
        <p className="cardType">{type}</p>
      </figcaption>
    </figure>
   );
}

export default Card;