var istniejacyWezel = document.getElementById('parFirst').children[3];
console.log(document.getElementById('parFirst').children);

console.log(istniejacyWezel);
//tworzenie elementu i wstawianie kontentu
var newElement = document.createElement('p');
var newElementContent = document.createTextNode('to jest nowy paragaf');

newElement.appendChild(newElementContent);
//console.log(newElement);
//przypinanie elementu do innego
istniejacyWezel.appendChild(newElement);
//zmienianie elementu na inny
//document.getElementById('parFirst').replaceChild(newElement, istniejacyWezel);
//console.log(istniejacyWezel);

//usuwanie wezla
istniejacyWezel.removeChild(newElement);