import React, { useState } from "react";
import { ImageWithDetails } from "./ImageWithDetails";
import { getFavouriteImages } from "./storage";
import { useAPOD } from "./useAPOD";

interface GalleryImageProps {
  imageDate: string;
}

const GalleryImage = ({ imageDate }: GalleryImageProps) => {
  const { data, error } = useAPOD(imageDate);

  if (error) {
    return <>Nie udało się nam pobrać zdjęcia :(</>;
  }

  return <ImageWithDetails image={data} />;
};

export const FavouritesPage = () => {
  const [favouriteImages] = useState(getFavouriteImages() || []);
  return (
    <>
      {favouriteImages.map((date) => (
        <GalleryImage key={date} imageDate={date} />
      ))}
    </>
  );
};
