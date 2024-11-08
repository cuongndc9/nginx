import getData from "./api";
import { useState, useEffect } from "react";

export default function Fish() {
  const [fish, setFish] = useState([]);

  useEffect(() => {
    async function fetchFish() {
      const data = await getData("http://localhost/fish");
      setFish(data);
    }
    fetchFish();
  }, []);

  return (
    <div>
      <h1>Fish</h1>
      <ul>
        {fish.map((fish, index) => (
          <li key={index}>
            <h2>{fish.name}</h2>
            <p>Age: {fish.age}</p>
            <img width={250} height={200} src={fish.image} alt={fish.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
