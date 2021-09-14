import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generateRandomDate } from "./generateRandomDate";
import { ImageWithDetails } from "./ImageWithDetails";
import {
  getAllViewedImages,
  saveToAllViewedImages,
  saveToFavouriteImages,
} from "./storage";
import { useAPOD } from "./useAPOD";

const generateRandomAndUniqueDate = () => {
  const images = getAllViewedImages();

  if (!images) {
    return generateRandomDate();
  }

  while (true) {
    const date = generateRandomDate();
    if (!images.includes(date)) {
      return date;
    }
  }
};

export const MainPage = () => {
  const [date, setDate] = useState(generateRandomAndUniqueDate());
  const { data, error } = useAPOD(date);
  const [isSaved, setIsSaved] = useState(false);
  const isFetching = !error && !data;

  const nextImage = useCallback(() => {
    setDate(generateRandomAndUniqueDate());
    setIsSaved(false);
  }, []);

  useEffect(() => {
    saveToAllViewedImages(date);
  }, [date]);

  const handleSaveToFavourites = useCallback(() => {
    if (data && !isSaved) {
      // prevent saving same images more than once
      saveToFavouriteImages(data.date);
      setIsSaved(true);
    }
  }, [data, isSaved]);

  if (error) {
    return <>Przepraszamy coś poszło nie tak :(</>;
  }

  return (
    <>
      <ImageWithDetails image={data} />
      <br />
      <button onClick={nextImage} disabled={isFetching}>
        Następne
      </button>
      <button onClick={handleSaveToFavourites} disabled={isFetching || isSaved}>
        Zapisz
      </button>
      <br />
      <Link to="/zapisane">Zapisane</Link>
    </>
  );
};
