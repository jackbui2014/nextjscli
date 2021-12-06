var handlebars = require("handlebars");
var fs = require("fs"),
  path = require("path");

const fileControl = require('./inc/filesControl');

const createComponent = (dir, componentName)=>{
	fileControl.createDir('/'+dir+componentName);
	fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component-typescript.hbs'), dir+componentName+'/index.tsx', componentName);
	fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component.test.hbs'), dir+componentName+'/index.spec.tsx', componentName);
  fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component.scss.hbs'), dir+componentName+'/'+componentName+'.module.scss', componentName);
}
exports.createComponent = createComponent;