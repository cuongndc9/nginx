const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) =>
  res.json([
    { name: "Kitty", age: 2, image: "https://i.postimg.cc/8zKgLbx1/cat12.jpg" },
    { name: "Tom", age: 3, image: "https://i.postimg.cc/4NGGGyzT/cat4.jpg" },
    {
      name: "Garfield",
      age: 4,
      image: "https://i.postimg.cc/65V94n93/cat17.jpg",
    },
  ])
);

app.listen(3300, () => 
    console.log('cat_service is listening on port 3300.')
);
