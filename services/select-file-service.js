const fs = require("fs");
const path = require("path");

function getDirectoryContents(files, currentDir, query) {
  const data = [];
  data.forEach((files) => {
    isDirectory(if(files == currentDir){
      data.push({
        name: file,
        isDirectory: true,
        path: path.join(query, file)
      })
    } else {
      data.push({
        name: file,
        isDirectory: false,
        path: path.join(query, file, currentDir)
      })
    })
    return data;
  });
  return data;
}

function isDirectory(currentDir, file) {
  const fileInfo = fs.statSync(path.join(currentDir, file));
  return fileInfo.isDirectory();
}

function readDir(currentDir, res, query) {}

exports.get = (req, res) => {};
