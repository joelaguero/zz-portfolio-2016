/*
 * Make an http request to the provided url and run the provided callback
 * function. The callback function will be passed one parameter, which is
 * the response text of the httpRequest.
 */
var makeHttpRequest = function(url, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        callback(httpRequest.responseText);
      } else { console.log('Unsuccessful request.'); }
    }
  };
  httpRequest.open('GET', url, true);
  httpRequest.send(null);
}

/*
 * Compose the URL for the src of the image provided, based on
 * the known structure of Flickr photo URLs.
 */
var composeImgSrc = function(photo) {
  return 'https://farm'
    + photo.attributes.getNamedItem('farm').value + '.staticflickr.com/'
    + photo.attributes.getNamedItem('server').value + '/'
    + photo.attributes.getNamedItem('id').value + '_'
    + photo.attributes.getNamedItem('secret').value + '.jpg';
};
