import { useState, useEffect } from "react";
import api from "./api";

export default function Dog() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    api("http://localhost/dog").then((data) => setDogs(data));
  }, []);

  return (
    <div>
      <h1>Dog</h1>
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            <h2>{dog.name}</h2>
            <p>Age: {dog.age}</p>
            <img width={250} height={200} src={dog.image} alt={dog.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
