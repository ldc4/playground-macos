const fs = require("fs");
const path = require("path");

const configPath = path.join(__dirname, "..", "src", "configs");

fs.readdir(configPath, "utf8", (err, fileList) => {
  if (err) throw err;
  fileList.forEach((item) => {
    if (item.indexOf("template") !== -1) {
      fs.copyFile(
        path.join(configPath, item),
        path.join(configPath, item.replace(".template", "")),
        (err) => {
          if (err) {
            throw err;
          }
        }
      );
    }
  });
});
