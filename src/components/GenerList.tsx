import React from "react";
import usGeners from "../hooks/useGeners";

const GenerList = () => {
  const { geners } = usGeners();
  return (
    <ul>
      {geners.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenerList;
