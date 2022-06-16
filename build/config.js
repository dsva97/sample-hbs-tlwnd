const path = require("path")

const rootPath = path.resolve(__dirname, "..")
const srcPath = path.resolve(rootPath, "src")
const distPath = path.resolve(rootPath, "dist")
const dataPath = path.resolve(rootPath, "data")

const viewsPath = path.resolve(srcPath, "views")

module.exports = {
  rootPath,
  srcPath,
  distPath,
  dataPath,

  viewsPath
}
