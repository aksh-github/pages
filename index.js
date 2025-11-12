const mustache = require("mustache");
const fs = require("fs");
const path = require("path");

function main() {
  const baseTemp = fs.readFileSync(
    path.resolve(__dirname, "./must/base.mustache"),
    "utf8"
  );

  const json = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./must/data.json"))
  );

  if (Array.isArray(json?.data)) {
    const arr = json.data;

    json.data.forEach((datum, i) => {
      let htmlContent = null;

      if (i === 0) {
        htmlContent = mustache.render(baseTemp, datum);
      } else {
        htmlContent = mustache.render(baseTemp, {
          ...json.data[0],
          ...datum,
          cssFiles: datum?.cssFiles
            ? [...json.data[0].cssFiles, ...datum?.cssFiles]
            : json.data[0].cssFiles,
          jsFiles: datum?.jsFiles
            ? [...json.data[0].jsFiles, ...datum?.jsFiles]
            : json.data[0].jsFiles,
        });
      }
      // console.log(htmlContent);
      fs.writeFile(`${datum.file}index.html`, htmlContent, (err) => {
        if (err) {
          console.log(`Probile while writing to ${datum.file}`);
          return;
        }
        // console.log(err);
      });
    });
  }
}

main();
