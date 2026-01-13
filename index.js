const mustache = require("mustache");
const fs = require("fs");
const path = require("path");

// except for main content
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
        // htmlContent = mustache.render(baseTemp, datum);
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
      if (htmlContent) {
        fs.writeFile(`${datum.file}index.html`, htmlContent, (err) => {
          if (err) {
            console.log(`Probile while writing to ${datum.file}`);
            return;
          }
          // console.log(err);
        });
      }
    });
  }
}

async function content() {
  const fs = require("fs");
  // const marked = await import("marked");
  const { marked } = await import("marked");
  const path = require("path");
  const cheerio = require("cheerio");

  const injectionSelector = "main .main-section"; // CSS selector for the injection point
  const menuInjectionSelector = "nav.real-menu"; // for menu

  const basePath = path.resolve(__dirname, "./data");
  const inputDirs = [
    // path.resolve(__dirname, "./data/html"),
    path.resolve(basePath, "./code"),
    // path.resolve(basePath, "./dharm"),
    // path.resolve(basePath, "./history"),
    // path.resolve(basePath, "./sanskrit"),
  ];

  // const mapJson = [
  //   {
  //     rootPath: "",
  //     text: "< Back to Home",
  //     href: "/pages",
  //   },
  // ];

  for (const inputDir of inputDirs) {
    let globfilepath = "";
    let needToUpdateMapJson = false;

    const newMapJson = [];

    try {
      // const inputDir = path.resolve(__dirname, "./data/code");
      const outputDir = inputDir;
      const indexHtmlPath = path.join(outputDir, "index.html");

      console.log(inputDir, outputDir, indexHtmlPath);

      // Read the existing index.html
      const indexHtmlContent = fs.readFileSync(indexHtmlPath, "utf8");
      const $ = cheerio.load(indexHtmlContent);

      // build menu

      // console.log(buildMenu(inputDir));

      const menulist = buildMenu(inputDir);
      $(menuInjectionSelector).html(menulist);

      // end menu

      // Read all markdown files from the input directory
      const files = fs
        .readdirSync(inputDir)
        .filter((file) => file.endsWith(".md"));

      files.forEach((file) => {
        const filePath = (globfilepath = path.join(inputDir, file));
        const markdownContent = fs.readFileSync(filePath, "utf8");
        const htmlContent = marked.parse(markdownContent);

        // Create a container div for each markdown file's content
        // const containerDiv = `<div class="markdown-content" id="${path.basename(file, '.md')}">\n${htmlContent}\n</div>`;

        // Inject the HTML content into the specified section
        $(injectionSelector).html(htmlContent);

        // Extract h2 tag content and update title
        const subTitle = $("main .main-section h2").first().text();
        const mainTitle = $("header .site-header").first().text();
        if (mainTitle || subTitle) {
          $("title").text(mainTitle + ": " + subTitle);
        }

        // Write the modified HTML to corresponding html file
        const outputFilePath = path.join(
          outputDir,
          path.parse(file).name + ".html"
        );
        // fs.writeFileSync(outputFilePath, $.html(), "utf8");

        if (fs.existsSync(outputFilePath)) {
          // console.log(`File already exists: ${outputFilePath}`);
          const existContent = fs.readFileSync(outputFilePath, "utf8");
          if (existContent !== $.html()) {
            fs.writeFileSync(outputFilePath, $.html(), "utf8");
            console.log("File updated: " + outputFilePath);
          }
        } else {
          needToUpdateMapJson = true;
          newMapJson.push({
            rootPath: "",
            text: path.parse(file).name,
            href: "./" + path.parse(file).name + ".html",
          });
          fs.writeFileSync(outputFilePath, $.html(), "utf8");
          console.log("New file added: " + outputFilePath);
        }

        // fs.writeFileSync(path.join(outputDir, file), $.html(), 'utf8');
        // console.log(`content written to ${outputFilePath}`);
      });

      // Update map.json if needed
      if (needToUpdateMapJson) {
        // fs.writeFileSync(
        //   path.join(outputDir, "map.json"),
        //   JSON.stringify({ list: [mapJson] }, null, 2),
        //   "utf8"
        // );
        // console.log(
        //   `map.json written / updated to ${path.join(outputDir, "map.json")}`
        // );
        console.log("Update map.json with:");
        console.log(newMapJson, JSON.stringify(newMapJson, null, 2));
      }

      console.log(`Processed directory: ${inputDir}`);
      console.log("================================");
    } catch (error) {
      console.log(
        `Error processing directory ${inputDir}: file: ${globfilepath}`,
        error
      );
    }
  }

  console.log("Content processing completed.");
}

const Li = (item) => {
  return `<li><a href="${item.rootPath + item.href}">${item.text}</a></li>`;
};

function buildMenu(inputDir) {
  const fs = require("fs");
  // const marked = await import("marked");

  const path = require("path");
  // const cheerio = require("cheerio");
  // const injectionSelector = "main .main-section"; // CSS selector for the injection point

  const basePath = path.resolve(__dirname, "./data");
  const inputDirs = [
    // path.resolve(__dirname, "./data/html"),
    path.resolve(basePath, "./code"),
    // path.resolve(basePath, "./dharm"),
    // path.resolve(basePath, "./history"),
    // path.resolve(basePath, "./sanskrit"),
  ];

  let globfilepath = "";
  let needToUpdateMapJson = false;
  const mapJson = fs.existsSync(path.join(inputDir, "map.json"))
    ? JSON.parse(fs.readFileSync(path.join(inputDir, "map.json"), "utf8")).list
    : [];

  // console.log(mapJson);

  let template = "";

  for (let item of mapJson) {
    template += Li(item);
  }

  const List = `<ul class="list">
      ${template}
    </ul>`;

  return List;
}

// main();
content();
