// Sample Text
var Code39 = require('./lib/code39').Code39;
var code39 = new Code39();
var ascii = code39.getCode('tualo.de');
console.log(ascii);
