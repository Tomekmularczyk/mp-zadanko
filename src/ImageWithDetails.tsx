import React from "react";
import Skeleton from "react-loading-skeleton";
import { APOD } from "./types";

interface Props {
  image?: APOD;
}

export const ImageWithDetails = ({ image }: Props) => {
  return (
    <article style={{ width: 600 }}>
      {image ? (
        <img
          src={image.url}
          alt={image.title}
          style={{ width: 400, height: 400, objectFit: "cover" }}
        />
      ) : (
        <Skeleton
          height={400}
          width={400}
          style={{ borderRadius: 4, marginBottom: 20 }}
        />
      )}
      {image ? (
        <ul>
          {Object.entries(image).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      ) : (
        <Skeleton
          count={8}
          height={20}
          style={{ borderRadius: 4, marginBottom: 5 }}
        />
      )}
    </article>
  );
};
