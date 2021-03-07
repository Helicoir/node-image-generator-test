const sharp = require("sharp");

const image = sharp("./image/IMG_9567.PNG")
  .composite({
    input: "./images/image-generator-base.png",
    blend: "dest-in",
  })
  .toFile("./test.png");
