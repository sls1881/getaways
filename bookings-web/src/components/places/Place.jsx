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
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <Link className="link" to={`/${id}`}>
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{location}</p>
        <p>{pricePerNight}</p>
        <img alt={name} src={image} />
        <p>{maxGuests}</p>
        <p>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
        {pool ? <p>Has a Pool!</p> : null}
        {wifi ? <p>Free Wifi</p> : null}
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
