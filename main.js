const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "js");

fs.readdir(path.resolve(__dirname, "js"), (err, files) => {
  if (err) throw err;


  files.sort(function(x,y){
    var xp = x.substr(-6, 4);
    var yp = y.substr(-6, 4);
    return xp == yp ? 0 : xp < yp ? -1 : 1;
  });
  // console.log(files);

  files.forEach(function (file, index) {
    
    file = file.substring(0, file.length - 7);

    fs.rename(
      `./js/${file}#${index + 1}.mp4`,
      `./js/${index + 1 +" "+ file}.mp4`,
      (err) => {
        if (err) throw err;
        // console.log("rename complete");
      }
    );
    // console.log(file);
  });
});
