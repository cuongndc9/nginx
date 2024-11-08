const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/", (req, res) =>
  // return 3 dogs as JSON

  res.json([
    { name: "Buddy", age: 3, image: "https://i.postimg.cc/VvjGbZBZ/image.jpg" },
    { name: "Max", age: 4, image: "https://i.postimg.cc/VvjGbZBZ/image.jpg" },
    {
      name: "Charlie",
      age: 5,
      image: "https://i.postimg.cc/VvjGbZBZ/image.jpg",
    },
  ])
);

app.listen(3200, () => console.log("dog_service is listening on port 3200."));
