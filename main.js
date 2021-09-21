const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "folder");

fs.readdir(path.resolve(__dirname, "folder"), (err, files) => {
  if (err) throw err;

  files.forEach(function (file, index) {

    file = file.substring(0, file.length - 6);

    fs.rename(
      `./folder/${file}#${index + 1}.txt`,
      `./folder/#${index + 1}read.txt`,
      (err) => {
        if (err) throw err;
        // console.log("rename complete");
      }
    );
    // console.log(file);
  });
});
