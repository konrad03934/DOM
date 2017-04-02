"use strict";

var mainHeader = document.getElementById('main-header');
//zmiana treści na stronie
mainHeader.innerHTML = "Treść nagłówka";
//dodawanie zawartosci dod linka
var link = document.getElementsByClassName('link')[0];
console.log(link);
link.href = "http://akademia108.pl";

link.className = "nowa-klasa";
mainHeader.style.color = "#11aa22";