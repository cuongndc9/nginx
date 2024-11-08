const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", (req, res) =>
  // return json of fish
  res.json([
    { name: "Nemo", age: 1, image: "https://i.postimg.cc/HkLzpkKh/image.jpg" },
    { name: "Dory", age: 2, image: "https://i.postimg.cc/HkLzpkKh/image.jpg" },
    { name: "Bruce", age: 3, image: "https://i.postimg.cc/HkLzpkKh/image.jpg" },
  ])
);


app.listen(3100, () =>
    console.log('fish_service is listening on port 3100.')
);
