const { settings } = require("cluster");
const { json } = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const settingsFilePath = path.join("json/settings.json");

function getSettings() {
  return {};
}

function writeSettings(newSettings) {}

function getDefaultDir() {}

function isValidDir(dirPath) {}

module.exports = {
  getSettings,
  writeSettings,
  getDefaultDir,
  isValidDir,
};
