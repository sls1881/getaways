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
        <li>Property Name: {name}</li>
        <li>{description}</li>
        <li>City: {location}</li>
        <li>Price Per Night: {pricePerNight}</li>
        <img alt={name} src={image} />
        <li>Max Guests: {maxGuests}</li>
        <li>Pets: {petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
        {pool ? <li>Has a Pool!</li> : null}
        {wifi ? <li>Free Wifi</li> : null}
      </ul>
    </div>
  );
}

DetailsItem.propTypes = {
  place: PropTypes.object.isRequired,
};

export default DetailsItem;
