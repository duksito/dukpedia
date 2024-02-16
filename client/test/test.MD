
<html>
<head>
  <title>
    dukpedia
  </title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<main>
<img src="img/HB4MiJ(png).png">

<br/><br/>

<div class="listas">

<div class="inputs">
<input type="text" id="searchInput">
</div>

<!-- 
<ul id="list" class="hidden">
  <li><a href="https://www.google.com">Manzana</a></li>
  <li><a href="https://www.bing.com">Plátano</a></li>
  <li><a href="https://www.yahoo.com">Naranja</a></li>
  <li><a href="https://www.duckduckgo.com">Mango</a></li>
  <li><a href="https://www.ask.com">Piña</a></li>
  <li><a href="https://www.wikipedia.org">Fresa</a></li>
</ul>
</div> -->


</main>

<script>
/*
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

function renderList(visibleItems) {
  list.innerHTML = '';
  visibleItems.forEach(function(item) {
    list.appendChild(item);
  });
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
*/
</script>

</body>
</html>



#CSS

body {
  margin: 0;
  padding: 10px;
  font-family: sans-serif;
}

.links {
  color: #5459ae;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
  color: black;
}

nav {
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 100%;
  width: 1400px;
  margin: auto;
}

.header {
  display: flex;
  gap: 10px;
  align-items: center;
}

.inputs {
  display: flex;
  max-width: 50%;
}

.inputs input {
  display: flex;
  padding: 5px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid black;
  outline: none;
}

main {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 950px;
  margin: auto;
  margin-top: 30px;
}

.var {
  display: flex;
  gap: 10px;
}

.left-var {
  display: flex;
}

.left-var a {
  color: black;
  text-decoration: none;
  transition: all 0.5s;
  padding: 5px;
}

.rig-var a {
  color: black;
  text-decoration: none;
  padding: 5px;
  transition: all 0.5s;
}

/*
.left-var a:hover {
  text-decoration: underline;
  border-radius: 10px;
  background-color: #EA8877;
}

.rig-var a:hover {
  text-decoration: underline;
  border-radius: 10px;
  background-color: #EA8877;
}
*/

.rig-var {
  display: flex;
  gap: 10px;
}

.title {
  font-size: 2rem;
}

.title a {
  color: black;
  text-decoration: none;
}

.cont-title {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: auto;
  border: 1px solid  darkgrey;
  background-color: rgb(245, 245, 245);
  width: 100%;
  border-radius: 2px;
}

.title-cont {
  font-size: 2rem;
  font-family: none;
  padding: 30px;
}

.box {
  display: flex;
  flex-direction: column;
}

.box-cont {
  display: flex;
  gap: 10px;
}

.box p {
  font-size: 0.90rem;
  line-height: 1.5;
}

.cont1 {
  display: flex;
  flex-direction: column;
}
.cont2 {
  display: flex;
  flex-direction: column;
}

.a {
  display: flex;
  flex-direction: column;
  border: 1px solid #fabfb7;
  background-color: #ff696111;
  padding: 5px;
  margin-top: 10px;
  /*max-height: 100%;*/
}

.b {
  display: flex;
  flex-direction: column;
  border: 1px solid #b0f2c2;
  background-color: #77dd7711;
  padding: 5px;
  margin-top: 10px;
}

.b li {
  line-height: 1.5;
}

.mini-title1 {
  background-color: #ff6961;
  border: 1px solid rgb(255, 56, 56);
  padding: 5px;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: bold;
}

.mini-title2 {
  background-color: #77dd77;
  border: 1px solid rgb(0, 143, 0);
  padding: 5px;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: bold;
}

.game {
  display: flex;
  flex-direction: column;
  border: 1px solid #84b6f4;
  background-color: #84b6f411;
  margin-top: 10px;
  padding: 5px;
}

.tec {
  display: flex;
  flex-direction: column;
  border: 1px solid #D3D3D3;
  background-color: #D3D3D311;
  margin-top: 10px;
  padding: 5px;
  height: 100%;
}

.tec2 {
  display: flex;
  flex-direction: column;
  border: 1px solid #C5E0DC;
  background-color: #C5E0DC11;
  margin-top: 10px;
  padding: 5px;
}

.title-soft {
  background-color: #C5E0DC;
  border: 1px solid darkgrey;
  padding: 5px;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: bold;
}

.title-hard {
  background-color: #D3D3D3;
  border: 1px solid darkgrey;
  padding: 5px;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: bold;
}

.title-game {
  background-color: #84b6f4;
  border: 1px solid #3c8ca7;
  padding: 5px;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: bold;
}

.har-ban {
  display: flex;
}

.har-ban img {
  max-width: 100%;
  width: 200px;
}

hr {
  width: 100%;
  border-top: 1px solid darkgrey;
}

.cont {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 950px;
}

.conte {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  width: 900px;
  margin: auto;
  /* border: 1px solid black; */
}

.mini-title {
  font-size: 1.5rem;
} 


.otros-proje h1 {
  text-align: center;
}

.otros-proje a {
  color: black;
  font-size: 20px;
}

.ejem {
  display: none;
}

.list-head {
  display: none;
}

.btn {
  display: flex;
  max-width: 100%;
}

.btn a {
  display: flex;
  text-align: center;
  border: 1px solid darkgrey;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px grey;
  border-radius: 10px;
  text-decoration: none;
  color: black;
}






/**** RESPONSIVE *****/
@media (max-width: 960px) {
  .box-cont {
    display: flex;
    flex-direction: column;
  }

  .b {
    display: flex;
    margin-top: 0px;
  }
}

@media (max-width: 768px) {
  main {
    display: flex;
    margin-top: 0px;
  }

  nav {
    display: flex;
    align-items: start;
    flex-direction: column;
  }

  .box-cont {
    display: flex;
    flex-direction: column;
  }

  .b {
    display: flex;
    margin-top: 0px;
  }

  .inputs {
    display: flex;
    margin: auto;
    max-width: 100%;
  }

  input {
    width: 200px;
  }

  .ejem {
    display: flex;
    cursor: pointer;
  }

  .inputs {
    display: flex;
    max-width: 100%;
  }

  .inputs input {
    display: flex;
    width: 400px;
  }

  .var {
    display: none;
  }
  
  hr {
    border: none;
  }

  .list-head {
    display: none;
    flex-direction: column;
    position: absolute;
    margin-top: 40px;
    margin-left: 5px;
    background-color: #272727;
    padding: 5px;
    gap: 5px;
    max-width: 100%;
    width: 300px;
  }

  .list-head a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }

  .list-head a:hover {
    background-color: #1A1B1A;
    border-radius: 10px;
  }
}
