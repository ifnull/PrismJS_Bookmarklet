(function() {
  var prismbase = 'https://gist.githack.com/ifnull/e610af6e44c1a3ba4357/raw/';
  var prismjs = document.createElement('script');
  var prismcss = document.createElement('link');
  prismjs.setAttribute('src', prismbase + '88204c4f4978c8deeadaa6f6df460af0eaaaa16b/prism.js');
  prismcss.setAttribute('href', prismbase + 'bfeecb87545720c3e19cf51fa27f351db0091d51/prism.css');
  prismcss.setAttribute('rel', 'stylesheet');
  document.body.appendChild(prismcss);
  document.body.appendChild(prismjs);
  prismjs.onload = function() {
    Prism.highlightAll();
  };
}());