import React from 'react';
import PropTypes from 'prop-types';

function DetailsItem({
  place: {
    name,
    description,
    location,
    pricePerNight,
    image,
    maxGuests,
    petFriendly,
    pool,
    wifi,
  },
}) {
  return (
    <div className="details-display">
      <ul aria-label="place">
        <li>
          <p>Property Name: {name}</p>
          <p>{description}</p>
          <p>City: {location}</p>
          <p>Price Per Night: {pricePerNight}</p>
          <p>Max Guests: {maxGuests}</p>
          <p>Pets: {petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
          {pool ? <p>Has a Pool!</p> : null}
          {wifi ? <p>Free Wifi</p> : null}
          <img alt={name} src={image} />
        </li>
      </ul>
    </div>
  );
}

DetailsItem.propTypes = {
  place: PropTypes.object.isRequired,
};

export default DetailsItem;
