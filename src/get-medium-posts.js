
jQuery.get('https://medium.com/feed/@joelaguero', function(res){
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(res.responseText.toString(), 'text/xml');
  window.data = xmlDoc;
});
