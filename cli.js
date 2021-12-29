#!/usr/bin/env node

//Grab provided args
const [,, ...args] = process.argv

const c = require('./index');
const allowArray = [
	'create:component',
	'setup'
];
if( typeof args['0'] !== 'undefined'){
	switch (args['0']){
		case 'create:component': 
			if( allowArray.indexOf(args['0'].toLowerCase()) != -1 ){
				
				if( typeof args['1'] !== 'undefined'){
					if( typeof args[2] !== 'undefined' ){
						const type = args[2].split('=');
						if( type[0] === '--type' ){
							switch( type[1] ){
								case 'list':
									c.createComponentList('src/', args['1']);
									break;
								case 'layout':
									c.createComponentLayout('src/', args['1']);
									break;
								default: 
									c.createComponent('src/', args['1']);
									break;
							}
						}
						else{
							c.createComponent('src/', args['1']);
						}
					}
					else{
						c.createComponent('src/', args['1']);
					}
					console.log('Success!');

				}
				else{
					console.log('Error!');
					return false;
				}
				return true;
			}

		 break;
		case 'setup':
			break;
		default: 
			console.log('Invalid syntax!');
			return false;
	}
}
console.log('Invalid command!');
return false;