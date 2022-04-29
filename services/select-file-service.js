const fs = require('fs');
const path = require('path');


unction getDirectoryContents(files, currentDir, query) {
}

function isDirectory(currentDir, file) {
  const fileInfo = fs.statSync(path.join('./'));
  return fileInfo.isDirectory();
}

function readDir(currentDir, res, query) {
}

exports.get = (req, res) => {
};
