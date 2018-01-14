let jsdom = require('jsdom').JSDOM,

// the file I will be loading
uri = 'public/index.html',

// the options that I will be giving to jsdom
options = {
    runScripts: 'dangerously',
    resources: "usable"
};

// load from an external file
jsdom.fromFile(uri, options).then(function (dom) {

    let window = dom.window,
    document = window.document;

    console.log(document.querySelectorAll('h1')[0].innerHTML);

}).catch (function (e) {

    console.log(e);

});
