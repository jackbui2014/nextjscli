var handlebars = require("handlebars");
var fs = require("fs"),
  path = require("path");

const fileControl = require('./inc/filesControl');

const createComponent = (dir, componentName)=>{
	const componentDir = dir+'components/'+componentName+'/';
	const interfacesDir = dir+'interfaces/';
	fileControl.createDir('/'+componentDir);
	//fileControl.createDir('/'+interfacesDir);
	fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component-typescript.hbs'), componentDir+'index.tsx', componentName);
	fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component.test.hbs'), componentDir+'index.spec.tsx', componentName);
  fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component.scss.hbs'), componentDir+componentName+'.module.scss', componentName.toLowerCase());
	//fileControl.createFileFromTemplate(path.join(__dirname, '/templates/interfaces/index.hbs'), interfacesDir+componentName+'.tsx', componentName);
}
exports.createComponent = createComponent;

const createComponentList = (dir, componentName)=>{
	const componentDir = dir+'components/'+componentName+'/';
	const interfacesDir = dir+'interfaces/';
	fileControl.createDir('/'+componentDir);
	fileControl.createDir('/'+interfacesDir);
	fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component-list.hbs'), componentDir+'index.tsx', componentName);
	fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component-list-item.hbs'), componentDir+'item.tsx', componentName);
	fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component.test.hbs'), componentDir+'index.spec.tsx', componentName);
  fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component.scss.hbs'), componentDir+componentName+'.module.scss', componentName.toLowerCase());
	fileControl.createFileFromTemplate(path.join(__dirname, '/templates/interfaces/index.hbs'), interfacesDir+componentName+'.tsx', componentName);
}
exports.createComponentList = createComponentList;

const createComponentLayout = (dir, componentName)=>{
	const componentDir = dir+'components/'+componentName+'/';
	fileControl.createDir('/'+componentDir);
	fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component-layout.hbs'), componentDir+'index.tsx', componentName);
	fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component.test.hbs'), componentDir+'index.spec.tsx', componentName);
  fileControl.createFileFromTemplate(path.join(__dirname, '/templates/components/component.scss.hbs'), componentDir+componentName+'.module.scss', componentName.toLowerCase());
}
exports.createComponentLayout = createComponentLayout;