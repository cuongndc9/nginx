import React, { useState, useEffect } from "react";
import getData from "./api";

export default function Cat() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function fetchCats() {
      const data = await getData("http://localhost/cat");
      setCats(data);
    }
    fetchCats();
  }, []);

  return (
    <div>
      <h1>Cat</h1>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>
            <h2>{cat.name}</h2>
            <p>Age: {cat.age}</p>
            <img width={250} height={200} src={cat.image} alt={cat.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
