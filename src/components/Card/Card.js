import React from 'react';

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