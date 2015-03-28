var Uncensorizer = Uncensorizer || {};

Uncensorizer.init = (function(){
    function htmlReplace(a, b, element) {
        if (!element) element = document.body;
        var nodes = element.childNodes;
        for (var n=0; n<nodes.length; n++) {
            if (nodes[n].nodeType === Node.TEXT_NODE) {
                var r = new RegExp(a, 'gi');
                nodes[n].textContent = nodes[n].textContent.replace(r, randomString(b));
            } else {
                htmlReplace(a, b, nodes[n]);
            }
        }
    }

    function randomString(arr){
        return arr[Math.floor(Math.random()*arr.length)];
    }

    function replacer(word, replaceArr){
        htmlReplace(word, replaceArr);
    }

    var replaceFloridaArray  = [
        'Florida (where 97% of scientists agree that sea levels will rise substantially)',
        'Florida (a place feared to be hit hard by global warming)',
        'Florida (where Gov. Rick Scott doesn\'t want people to talk about climate change)'
    ];

    replacer('Florida', replaceFloridaArray);

})(Uncensorizer);


