let jsdom = require('jsdom').JSDOM,
uri = 'public/index.html',
options = {
    runScripts: 'dangerously'
};

// load from an external file
jsdom.fromFile(uri, options).then(function (dom) {

    let window = dom.window,
    document = window.document;

    console.log(document.querySelectorAll('h1')[0].innerHTML);

}).catch (function (e) {

    console.log(e);

});
