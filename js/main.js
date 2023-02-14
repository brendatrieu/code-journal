var $imgPreview = document.querySelector('img');
var $imgUrlField = document.querySelector('#img-src');

$imgUrlField.addEventListener('input', event => {
  var $imgUrlInput = event.target.value;
  $imgPreview.setAttribute('src', $imgUrlInput);
});
