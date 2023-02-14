var $imgPreview = document.querySelector('img');
var $imgUrlField = document.querySelector('#img-src');
var $form = document.querySelector('form');

var livePreview = event => {
  var $imgUrlInput = event.target.value;
  $imgPreview.setAttribute('src', $imgUrlInput);
};

var logNewEntry = event => {
  event.preventDefault();

  var $newEntry = {
    title: $form.elements.title.value,
    photoUrl: $form.elements['img-src'].value,
    notes: $form.elements['img-notes'].value,
    entryId: data.nextEntryId
  };

  data.nextEntryId++;
  data.entries.unshift($newEntry);
  $imgPreview.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
};

$form.addEventListener('submit', logNewEntry);
$imgUrlField.addEventListener('input', livePreview);
