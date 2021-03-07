"use strict";

const express = require("express");
const sharp = require("sharp");
const uuid = require("uuid");

// Constants
const PORT = 6543;
const HOST = "0.0.0.0";

const testFunc = () => {
  sharp("./src/image/IMG_9567.PNG")
    .resize(1200, 630)
    .composite([
      {
        input: "./src/image/base_1.png",
        blend: "darken",
      },
    ])
    .toFile(`${uuid.v4()}.png`)
    .then(() => {
      console.log("ok");
      return;
    })
    .catch((e) => console.log(e));
};

// App
const app = express();
app.get("/", (req, res) => {
  testFunc();
  console.log("done");
  return {
    message: "ok",
  };
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
