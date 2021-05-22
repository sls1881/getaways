import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Place = ({
  id,
  name,
  description,
  location,
  pricePerNight,
  image,
  maxGuests,
}) => {
  return (
    <Link className="link" to={`/${id}`}>
      <div className="item-container">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Location: {location}</p>
        <p>Price per Night: {pricePerNight}</p>
        <p>Max Guest: {maxGuests}</p>
        <img alt={name} src={image} />
      </div>
    </Link>
  );
};

Place.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
