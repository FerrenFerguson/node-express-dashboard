const { json } = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const dir = process.cwd();

function getDirectoryContents(files, currentDir, query) {
  const data = [];
  files.forEach((file) => {
    if (isDirectory(currentDir, file)) {
      data.push({
        name: file,
        isDirectory: true,
        path: path.join(query, file),
      });
    } else {
      data.push({
        name: file,
        isDirectory: false,
        path: path.join(query, file),
        currentDir: currentDir,
      });
    }
  });
  return data;
}

function isDirectory(currentDir, file) {
  const fileInfo = fs.statSync(path.join(currentDir, file));
  return fileInfo.isDirectory();
}

function readDir(currentDir, res, query) {
  fs.readdir(currentDir, (err, files) => {
    let directoryContents = [];
    if (!err) {
      const directoryContent = getDirectoryContents(files, currentDir, query);
    }
  });
  res.json(directoryContents);
}

exports.get = (req, res) => {
  const currentDir = dir;
  const query = req.query.path || "";
  if (!req.query.path) {
    query = "";
  } else if (query) {
    currentDir = currentDir.query.path;
  }
  readDir(currentDir, res, query);
};
