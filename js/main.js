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

var renderEntry = entry => {
  var $entryList = document.querySelector('ul');

  // Create all new elements
  var $entryLi = document.createElement('li');
  var $liDiv = document.createElement('div');
  var $imgDiv = document.createElement('div');
  var $imgEl = document.createElement('img');
  var $textDiv = document.createElement('div');
  var $imgTitle = document.createElement('h4');
  var $imgNotes = document.createElement('p');

  // Assign classes and content to elements
  $liDiv.className = 'row';
  $imgDiv.className = 'column-half';
  $imgEl.setAttribute('src', entry.photoUrl);
  $textDiv.className = 'column-half';
  $imgTitle.textContent = entry.title;
  $imgNotes.textContent = entry.notes;

  // Append elements
  $imgDiv.appendChild($imgEl);
  $textDiv.appendChild($imgTitle);
  $textDiv.appendChild($imgNotes);
  $liDiv.appendChild($imgDiv);
  $liDiv.appendChild($textDiv);
  $entryLi.appendChild($liDiv);
  $entryList.appendChild($entryLi);
};

renderEntry();

$form.addEventListener('submit', logNewEntry);
$imgUrlField.addEventListener('input', livePreview);
