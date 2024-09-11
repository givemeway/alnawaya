import fs from "node:fs";

fs.readdir("./", { recursive: true }, (err, files) => {
  console.log(err);
  console.log(files);

  if (!err) {
    const images = files.filter(
      (file) =>
        file.split(".")[1]?.toLowerCase() === "jpg" ||
        file.split(".")[1]?.toLowerCase() === "png" ||
        file.split(".")[1]?.toLowerCase() === "webp" ||
        file.split(".")[1]?.toLowerCase() === "jpeg"
    );
    const imgPaths = images.map(
      (image) => "../../assets/" + image.replace(/\\/g, "/")
    );
    console.log(imgPaths);
  }
});
