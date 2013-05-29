Description
===========

tualo-code39 is a small and simple code 3 of 9 library written in javascript.
This library creates simple text representation of the barcode for the given string.
The function getCode(data) returns the barcode representation as string. "n" or "N" means you 
have to draw a narrow bar. "w" or "W" means you have to draw a normal bar. If the letter is 
in upper case you must draw a black bar. You don't need to draw the lower case letters, but 
you have to skip narrow or wide bar size ahead. Based on the width of the normal (or wide) 
bar's width, the narrow bar width must be the third part of that.

Requirements
============

* [node.js](http://nodejs.org/) -- v0.8.0 or newer


Installation
============

    npm install tualo-code39

How to Use
==========

From nodejs:

    var Code39 = require('tualo-code39').Code39;
    var code39 = new Code39();
    var ascii = code39.getCode('tualo.de');
    console.log(ascii);

In a Browser:

    <script src="lib/code39.js" type="text/javascript"></script>
    <script type="text/javascript">
        var code39 = new Code39();
        var ascii = code39.getCode('tualo.de');
        console.log(ascii);
    </script>

The output will be:

    NwNnWnWnNnNnNnWnWwNnWwNnNnNnWnWnNnNwNnWnNnWnNnNwWnWnNnWnNwNnWwNnNnWnNnNnNnWwNnWnWnNnWwNnNnNwNnWnWnNn

