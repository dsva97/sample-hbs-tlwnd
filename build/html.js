const fs = require("fs")
const path = require("path");
const recursive = require("recursive-readdir");
const Handlebars = require("handlebars");

const { viewsPath, distPath, dataPath } = require("./config")
const data = require(dataPath)

const ignoreFiles = ["*.js", "*.css"];

recursive(viewsPath, ignoreFiles, function (err, files) {
  for (const file of files) {
    const content = fs.readFileSync(file, "utf8")
    const compiled = Handlebars.compile(content)
    const contentCompiled = compiled(data)

    const relativePath = file.split(viewsPath)[1]
    const distFilePath = path.join(distPath, relativePath).replace("hbs", "html")

    fs.writeFileSync(distFilePath, contentCompiled)
  }
});
