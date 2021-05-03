const fs = require("fs");
const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) =>
    fs.writeFile("result/post.json", JSON.stringify(json), () => {
      console.log("Upload Successful");
    })
  );
