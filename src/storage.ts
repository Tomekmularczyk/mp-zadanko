const ALL_VIEWED_IMAGES_KEY = "all-viewed-images";
const FAVOURITE_IMAGES = "favourite-images";

export const getAllViewedImages = (): string[] | undefined => {
  const list = localStorage.getItem(ALL_VIEWED_IMAGES_KEY);

  if (list) {
    return JSON.parse(list);
  }
};

export const saveToAllViewedImages = (imageDate: string): void => {
  const allViewedImages = getAllViewedImages();
  if (allViewedImages) {
    allViewedImages.push(imageDate);
    localStorage.setItem(
      ALL_VIEWED_IMAGES_KEY,
      JSON.stringify(allViewedImages)
    );
  } else {
    localStorage.setItem(ALL_VIEWED_IMAGES_KEY, JSON.stringify([imageDate]));
  }
};

export const getFavouriteImages = (): string[] | undefined => {
  const list = localStorage.getItem(FAVOURITE_IMAGES);

  if (list) {
    return JSON.parse(list);
  }
};

export const saveToFavouriteImages = (imageDate: string): void => {
  const favouriteImages = getFavouriteImages();
  if (favouriteImages) {
    favouriteImages.push(imageDate);
    localStorage.setItem(FAVOURITE_IMAGES, JSON.stringify(favouriteImages));
  } else {
    localStorage.setItem(FAVOURITE_IMAGES, JSON.stringify([imageDate]));
  }
};
