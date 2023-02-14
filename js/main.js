var $imgPreview = document.querySelector('img');
var $imgUrlField = document.querySelector('#img-src');

$imgUrlField.addEventListener('input', event => {
  var $imgUrlInput = event.target.value;
  $imgPreview.setAttribute('src', $imgUrlInput);
});

var $form = document.querySelector('form');

$form.addEventListener('submit', event => {
  event.preventDefault();

  var $newEntry = {
    title: $form.elements.title.value,
    photoUrl: $form.elements['img-src'].value,
    notes: $form.elements['img-notes'].value,
    entryId: data.nextEntryId
  };

  data.nextEntryId++;
  data.entries.push($newEntry);
  $imgPreview.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
});
