import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsItem from '../components/places/DetailsItem';
import Spinner from '../components/Spinner';
import { getPlace } from '../services/placesApi';

export default function Details() {
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState({});

  const { id } = useParams();

  useEffect(() => {
    //fetch by name
    getPlace(id)
      .then(setPlace)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="details-container">
      {loading ? <Spinner /> : <DetailsItem place={place} />}
    </div>
  );
}
