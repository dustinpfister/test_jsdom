let jsdom = require('jsdom').JSDOM;

jsdom.fromFile('public/index.html').then(function (dom) {

    let window = dom.window,
    document = window.document;

    console.log(document.querySelectorAll('h1')[0].innerHTML);

}).catch (function (e) {

    console.log(e);

});
