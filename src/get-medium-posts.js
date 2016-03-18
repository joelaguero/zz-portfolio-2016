
jQuery.get('https://medium.com/feed/@joelaguero', function(res){
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(res.responseText, 'text/xml');
  console.log(xmlDoc);
});
