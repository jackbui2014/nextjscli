#!/usr/bin/env node

//Grab provided args
const [,, ...args] = process.argv

const c = require('./index');
const allowArray = ['create:component'];
if( typeof args['0'] !== 'undefined'){
	switch (args['0']){
		case 'create:component': 
			if( allowArray.indexOf(args['0'].toLowerCase()) != -1 ){
				if( typeof args['1'] !== 'undefined'){
					c.createComponent('src/components/', args['1']);
				}
				else{
					console.log('Error!');
					return false;
				}
				return true;
			}

		 break;
		default: 
			console.log('Invalid syntax!');
			return false;
	}
}
console.log('Invalid command!');
return false;