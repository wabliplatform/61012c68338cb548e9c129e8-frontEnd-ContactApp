const path = require('path');

module.exports = {
  entry: {
	'homepage' : './javascript/homepage.js',
	'addcontact' : './javascript/addcontact.js',
	'contactinfo' : './javascript/contactinfo.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};