import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Spinner from '../components/Spinner';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="getaway-container">
      {loading ? <Spinner /> : <PlaceList places={places} />}
    </div>
  );
};

export default Getaways;
