let jsdom = require('jsdom').JSDOM,

// some hard coded html
html = ''+
'<!DOCTYPE html>'+
    '<html>'+
    '<head>'+
        '<title>Blank</title>'+
    '</head>'+
    '<p id="mess">nope</p>'+
    '<script>'+
        'document.getElementById(\'mess\').innerHTML=\'42\';' +
    '</script>'+
'</html>',

// get the dom by calling the jsdom constructor, and giving it the html
dom = new jsdom(html,{ runScripts: 'dangerously' }),

// get the window object @ dom.window
window = dom.window;

console.log( window.document.getElementById('mess').innerHTML );