"use strict";
var handlebars = require("handlebars");
var fs = require("fs"),
  path = require("path");

const createDir = (dirPath) => {
  fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
    if (error) {
      console.log("error");
    } else {
      console.log("created a directory");
    }
  });
};
exports.createDir = createDir;

const createFile = (filePath, fileContent) => {
  fs.writeFile(filePath, fileContent, (error) => {
    console.log(error);
    if (error) {
      console.log("error");
    } else {
      console.log("created a file");
    }
  });
};
exports.createFile = createFile;

// this will be called after the file is read
const renderToString = (source, data) => {
  var template = handlebars.compile(source, { noEscape: true });
  var outputString = template(data);
  return outputString;
};
exports.renderToString = renderToString;

const createFileFromTemplate = (templatePath, FilePath, componentName) => {
  var jsonData = {
    name: componentName,
    nameL: componentName?.toLowerCase()
  };
  // read the file and use the callback to render
  fs.readFile(templatePath, function (err, data) {
    if (!err) {
      // make the buffer into a string
      var source = data.toString();
      // call the render function
      var mainContent = renderToString(source, jsonData);
      createFile(FilePath, mainContent);
      return true;
    } else {
      return false;
    }
  });
};
exports.createFileFromTemplate = createFileFromTemplate;
