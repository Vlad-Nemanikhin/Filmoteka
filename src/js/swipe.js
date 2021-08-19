import { onMylibraryClick, changeHeaderInHome } from './header/change-view-header';


const page1 = document.querySelector('.js-swipe-home');
//const page2 = document.querySelector('.js-swipe-lib');

var startPoint={};
var nowPoint;
page1.addEventListener('touchstart', function(event) {
event.stopPropagation();
startPoint.x=event.changedTouches[0].pageX;
startPoint.y=event.changedTouches[0].pageY;
//console.log(event);
}, false);
/*Ловим движение пальцем*/
page1.addEventListener('touchmove', function(event) {
event.stopPropagation();
var otk={};
	nowPoint = event.changedTouches[0];
otk.x=nowPoint.pageX-startPoint.x;
/*Обработайте данные*/
/*Для примера*/
if(Math.abs(otk.x)>50){
	if (otk.x < 0) {
		page1.style.right = '-' + otk.x + 'px';
		page1.style.left = otk.x + 'px';
		page1.style.boxShadow = "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);"
		if (Math.abs(otk.x)>50) {
			page1.style.display = "block";
			page1.style.left = "0";
			page1.style.transition = "left 500ms linear";
		}
	}
	if (otk.x > 0) {
		page1.style.left = otk.x + 'px';
		page1.style.right = '-' + otk.x + 'px';
		page1.style.boxShadow = "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);"
		if (Math.abs(otk.x) > 50) {
			page1.style.display = "block";
			page1.style.right = "0";
			page1.style.transition = "right 500ms linear";
		}
		
	}
	//console.log(startPoint.x);
	//console.log(nowPoint.pageX);
	//console.log(otk.x);
	//console.log(event);
startPoint={x:nowPoint.pageX,y:nowPoint.pageY};
}
}, false);
/*Ловим отпускание пальца*/
page1.addEventListener('touchend', function(event) {
	//console.log(event);
	nowPoint = event.changedTouches[0];
	let xAbs = Math.abs(startPoint.x - nowPoint.pageX);
	//console.log(event);
	if (xAbs > 20) {
		console.log('event');
		if (nowPoint.pageX < startPoint.x) {
			console.log('event');
				console.log('L');
			onMylibraryClick();
			normalizeBody(xAbs, nowPoint.pageX, startPoint.x);
			}
		else {
			changeHeaderInHome();
			console.log('R');
			normalizeBody(xAbs, nowPoint.pageX, startPoint.x);
		}
	}
}, false);

function normalizeBody(xAbs, a, b){
	if (a < b && xAbs > 20) {
		page1.style.display = "block";
		page1.style.right = "0";
		page1.style.transition = "right 500ms linear";
	}
	page1.style.display = "block";
	page1.style.left = "0";
	page1.style.transition = "left 500ms linear";
	
}