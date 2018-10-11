document.onkeydown = function checkKeycode(event)
{
var keycode;
if(!event) var event = window.event;
if (event.keyCode) keycode = event.keyCode; // IE
else if(event.which) keycode = event.which; // all browsers

	switch(keycode){ // проверка нажатых клавиш
		case 13: ravno(); break;
		case 46: clear1(); break;
		case 111: semn('/'); break;
		case 106: semn('*'); break;
		case 107: semn('+'); break;
		case 109: semn('-'); break;
		case 96: clic(0); break;
		case 97: clic(1); break;
		case 98: clic(2); break;
		case 99: clic(3); break;
		case 100: clic(4); break;
		case 101: clic(5); break;
		case 102: clic(6); break;
		case 103: clic(7); break;
		case 104: clic(8); break;
		case 105: clic(9); break;
		}
}

var b = 0; 
var k = '';
var znak = false; 

function clear1() { // функция обнуления значений калькулятора
	document.getElementById("window_calc").innerHTML = 0;
	b = 0; 
	k = '';
	znak = false;
}

function semn(semn) {// функция обработки операции
	k = semn;
	znak = false;
	b = parseInt(window_calc.innerHTML);
}

function ravno() {// функция вывода результата

if(k!=''){		
	switch(k){
		case '/': b = b / parseInt(window_calc.innerHTML);break;
		case '*': b = b * parseInt(window_calc.innerHTML);break;
		case '-': b = b - parseInt(window_calc.innerHTML);break;
		case '+': b = b + parseInt(window_calc.innerHTML);break;
	}
	window_calc.innerHTML = b;
	k = ''; 
}
}

function clic(number) {// функция запоминания веденых значений
	
	var window_calc = document.getElementById("window_calc");

if(window_calc.innerHTML.length < 22){

if(window_calc.innerHTML != 0 && znak == true )
	window_calc.innerHTML += number;
else	
	window_calc.innerHTML = number;

znak = true; 
}
 
}
