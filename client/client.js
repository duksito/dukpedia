var searchInput = document.getElementById('searchInput');
var list = document.getElementById('list');
var listItems = list.querySelectorAll('li');
var currentIndex = -1;

searchInput.addEventListener('input', filterList);
searchInput.addEventListener('keydown', handleKey);
list.addEventListener('keydown', handleListKey);

document.addEventListener('click', function(event) {
  if (!list.contains(event.target) && event.target !== searchInput) {
    list.classList.add('hidden');
  }
});

function filterList() {
  var searchQuery = searchInput.value.trim().toLowerCase();
  if (searchQuery === '') {
    list.classList.add('hidden');
    return;
  }
  
  list.classList.remove('hidden');
  
  var visibleItems = Array.from(listItems).filter(function(item) {
    var text = item.textContent.toLowerCase();
    return text.includes(searchQuery);
  });


  currentIndex = -1;
  renderList(visibleItems);
}

/*
function renderList(visibleItems) {
  list.innerHTML = '';
  visibleItems.forEach(function(item) {
    list.appendChild(item);
  });
}
*/

function renderList(visibleItems) {
  list.innerHTML = '';
  var maxItems = 5; // Cambiar este valor según la cantidad máxima deseada
  for (var i = 0; i < visibleItems.length && i < maxItems; i++) {
    list.appendChild(visibleItems[i]);
  }

  // Si hay más elementos que no se están mostrando, agregar un indicador
  if (visibleItems.length > maxItems) {
    var moreIndicator = document.createElement('div');
    moreIndicator.classList.add('more-indicator');
    moreIndicator.textContent = '+' + (visibleItems.length - maxItems) + ' más';
    moreIndicator.addEventListener('click', showAllItems);
    list.appendChild(moreIndicator);
  }
}

function handleKey(e) {
  switch(e.key) {
    case 'ArrowDown':
      moveSelection(1);
      break;
    case 'ArrowUp':
      moveSelection(-1);
      break;
    case 'Enter':
      selectItem();
      break;
  }
}

function handleListKey(e) {
  switch(e.key) {
    case 'ArrowDown':
      e.preventDefault();
      moveListSelection(1);
      break;
    case 'ArrowUp':
      e.preventDefault();
      moveListSelection(-1);
      break;
    case 'Enter':
      selectItem();
      break;
  }
}

function moveSelection(step) {
  var newIndex = currentIndex + step;
  var visibleItems = Array.from(list.querySelectorAll('li'));
  if (newIndex >= 0 && newIndex < visibleItems.length) {
    currentIndex = newIndex;
    updateSelected();
    var selectedItem = visibleItems[newIndex].querySelector('a');
    searchInput.value = selectedItem.textContent;
  }
}

function moveListSelection(step) {
  var newIndex = currentIndex + step;
  var visibleItems = Array.from(list.querySelectorAll('li'));
  if (newIndex >= 0 && newIndex < visibleItems.length) {
    currentIndex = newIndex;
    updateSelected();
    var selectedItem = visibleItems[newIndex].querySelector('a');
    searchInput.value = selectedItem.textContent;
  }
}

function updateSelected() {
  var visibleItems = Array.from(list.querySelectorAll('li'));
  visibleItems.forEach(function(item, index) {
    item.classList.toggle('selected', index === currentIndex);
  });
}

function selectItem() {
  var visibleItems = Array.from(list.querySelectorAll('li'));
  if (currentIndex !== -1 && currentIndex < visibleItems.length) {
    var selectedItem = visibleItems[currentIndex].querySelector('a');
    var url = selectedItem.getAttribute('href');
    window.location.href = url;
  }
}


