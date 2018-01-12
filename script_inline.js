let jsdom = require('jsdom').JSDOM,
 
// some hard coded html
html = ''+
'<!DOCTYPE html>'+
    '<script>'+
        'console.log(\'I am a script tag.\');' +
    '</script>';
 
// logs 'I am a script tag' in the console.
new jsdom(html,{ runScripts: 'dangerously' });
