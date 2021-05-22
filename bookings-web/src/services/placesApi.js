export const getPlaces = async () => {
  const response = await fetch(`${process.env.BASE_URL}/places`);
  if (response.ok) {
    const result = await response.json();
    return result.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};

export const getPlace = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/places/${id}`);

  if (res.ok) {
    const {
      name,
      description,
      location,
      image,
      pool,
      wifi,
      price_per_night,
      max_guests,
      pet_friendly,
    } = await res.json();

    return {
      name,
      description,
      location,
      image,
      pool,
      wifi,
      pricePerNight: price_per_night,
      maxGuests: max_guests,
      petFriendly: pet_friendly,
    };
  } else {
    throw new Error(await response.json());
  }
};
