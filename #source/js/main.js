let ibg = document.querySelector(".ibg");
let img = ibg.querySelector("img").getAttribute("src");
ibg.setAttribute("style", "background-image:url(" + img + ")");
let a = "#F8CE4C";
let b = "#E7E8EA";

let c = document.querySelector(".mCost");
let cost = document.querySelector(".cost");
let rub = " ₽";
let max = c.getAttribute("max");
cost.innerHTML = c.value + rub;
c.oninput = function() {
  cost.innerHTML = this.value + rub;
  let val = Math.round(c.value*100/max);
  c.setAttribute("style","background:-webkit-linear-gradient(left,"+a+" 0%,"+a+" "+val+"%,"+b+" "+val+"%,"+b+" 100%)");
}

let m = document.querySelector(".cMonths");
let months = document.querySelector(".months");
let s = " месяцев";
let max2 = m.getAttribute("max");
months.innerHTML = m.value + s;
m.oninput = function() {
	let v = m.value;
	(v == 1 || v == 21 || v == 31) ? s = " месяц" : 
	(v < 5 || v > 21 && v < 25 || v > 31) ? s = " месяца" : 
	s = " месяцев";
	months.innerHTML = this.value + s;
	let val2 = Math.round(m.value*100/max2);
  	m.setAttribute("style","background:-webkit-linear-gradient(left,"+a+" 0%,"+a+" "+val2+"%,"+b+" "+val2+"%,"+b+" 100%)");
}

let photos = document.querySelector('.photos');
let first = document.querySelector('.first');
let middle = document.querySelector('.middle');
let last = document.querySelector('.last');
let next = document.querySelector('.right');
let prev = document.querySelector('.left');
let left = 0;

next.onclick = rightSlider;
prev.onclick = leftSlider;

function rightSlider(){
	if (middle.style.order == 1) {
		first.style.order = 0;
		last.style.order = 1;
	} else {
		middle.style.order = 1;
	}
}
//setInterval(rightSlider, 2000);
function leftSlider(){
	if (middle.style.order == -1) {
		first.style.order = -1;
		last.style.order = 1;
	} else {
		middle.style.order = -1;
	}
}

let inputs = document.querySelectorAll('input[data-rule]');

for (let input of inputs) {
	input.addEventListener('blur', function() {
		let rule = this.dataset.rule;
		let value = this.value;
		let check;
		switch (rule) {
			case 'name':
				check = /^([a-zA-Zа-яА-Я])+$/.test(value);
			break;
			case 'phone':
				check = /^(\d{11})+$/.test(value);
			break;
			case 'email':
				check = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})+$/.test(value);
			break;
		}
 		this.classList.remove('valid');
 		this.classList.remove('invalid');
 		if (check) {
 			this.classList.add('valid');
 		} else {
 			this.classList.add('invalid');
 		}	
	});
}

let sends = document.querySelectorAll('.sends');
for (let send of sends) {
	send.onclick = (e) => {
		e.preventDefault();
		let err1 = document.querySelector('.err1');
		let err2 = document.querySelector('.err2');
		let err3 = document.querySelector('.err3');
		let name = document.querySelector('input[name="name"]');
		let phone = document.querySelector('input[name="phone"]');
		let email = document.querySelector('input[name="email"]');
		let at = email.value.indexOf("@"); 
		let dot = email.value.indexOf(".");
		if (name.value == "") {
			err1.innerHTML = "* Обязательно для заполнения";
			name.classList.add('invalid');
			return false;
		} else {
			err1.innerHTML = "";
		}
		if (phone.value == "") {
			err2.innerHTML = "* Обязательно для заполнения";
			phone.classList.add('invalid');
			return false;
		} else if (phone.value.length < 11 && isNaN(phone)) {
			err2.innerHTML = "* Введите 11 цифр для телефона";
			phone.classList.add('invalid');
			return false;
		} else {
			err2.innerHTML = "";
		}
		if (email.value == "") {
			err3.innerHTML = "* Обязательно для заполнения";
			email.classList.add('invalid');
			return false;
		} else if (at < 1 || dot < 1) {
			err3.innerHTML = "* Email введен не верно";
			email.classList.add('invalid');
			return false;
		} else {
			err3.innerHTML = "";
		}
	}
}