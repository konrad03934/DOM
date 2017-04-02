var firstParagraf = document.getElementById('parFirst');
console.log(firstParagraf);

var linki = document.getElementsByClassName('superlink');
console.log(linki);

var linkPoTagu = document.getElementsByTagName('a');
console.log(linkPoTagu);

var divPoId = document.querySelector('#parSecond');
console.log(divPoId);

var pierwszyLinkPoSelektorze = document.querySelector('.superlink');
console.log(pierwszyLinkPoSelektorze);

var linkPoSelektorze = document.querySelectorAll('.superlink');
console.log(linkPoSelektorze);

linkPoSelektorze.forEach( function(link, i) {
	console.log(link.outerHTML);
})