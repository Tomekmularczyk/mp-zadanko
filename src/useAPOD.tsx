import useSWR from "swr";
import { APOD } from "./types";

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

export const useAPOD = (date: string) => {
  return useSWR<APOD>(["/api.nasa.gov/planetary/apod", date], () =>
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`
    ).then((res) => res.json())
  );
};
