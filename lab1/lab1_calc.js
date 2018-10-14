var b = 0; 
var k = '';
var znak = false; 

function clear1() {
	document.getElementById("window_calc").innerHTML = 0;
	b = 0; 
	k = '';
	znak = false;
}

function semn(semn) {
	k = semn;
	znak = false;
	b = parseInt(window_calc.innerHTML);
}

function ravno() {
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

function clic(number) {
	var window_calc = document.getElementById("window_calc");
if(window_calc.innerHTML.length < 20){
if(window_calc.innerHTML != 0 && znak == true )
	window_calc.innerHTML += number;
else	
	window_calc.innerHTML = number;
znak = true; 
}
}
