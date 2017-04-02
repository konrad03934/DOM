"use strict";

//var secondLink = document.getElementsByTagName('a')[1];
//
//function alarm(e) {
//	e.preventDefault();
//	console.log('kliknięto kolejny link');
//	
//	console.log(e.type);
//	console.log(e);
//	
//}
//
//secondLink.onclick = alarm;
//
//
//var thirdLink = document.getElementsByTagName('a')[2];
//
//thirdLink.addEventListener('click', alarm);
//thirdLink.removeEventListener('click', alarm);
//
//
//var mainheader = document.getElementById('main-header');
//
//function resize(e) {
//	if (e.type == 'mouseover') {
//		mainheader.style.fontSize = "70px";
//	} else {
//		mainheader.style.fontSize = "inherit";
//	} 
//}
//
//mainheader.onmouseover = resize;
//
//mainheader.onmouseout = resize;

function klikHeader() {
	console.log("klikonąłeś w header");
}

document.getElementsByTagName('header')[0].onclick = klikHeader;

function klikH1(e) {
	e.stopPropagation();
	console.log("kliknąłeś w h1");
}

document.getElementsByTagName('h1')[0].onclick = klikH1;