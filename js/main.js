let ibg=document.querySelector(".ibg"),img=ibg.querySelector("img").getAttribute("src");ibg.setAttribute("style","background-image:url("+img+")");let a="#F8CE4C",b="#E7E8EA",c=document.querySelector(".mCost"),cost=document.querySelector(".cost"),rub=" ₽",max=c.getAttribute("max");cost.innerHTML=c.value+rub,c.oninput=function(){cost.innerHTML=this.value+rub;let e=Math.round(100*c.value/max);c.setAttribute("style","background:-webkit-linear-gradient(left,"+a+" 0%,"+a+" "+e+"%,"+b+" "+e+"%,"+b+" 100%)")};let m=document.querySelector(".cMonths"),months=document.querySelector(".months"),s=" месяцев",max2=m.getAttribute("max");months.innerHTML=m.value+s,m.oninput=function(){let e=m.value;s=1==e||21==e||31==e?" месяц":e<5||e>21&&e<25||e>31?" месяца":" месяцев",months.innerHTML=this.value+s;let t=Math.round(100*m.value/max2);m.setAttribute("style","background:-webkit-linear-gradient(left,"+a+" 0%,"+a+" "+t+"%,"+b+" "+t+"%,"+b+" 100%)")};let photos=document.querySelector(".photos"),first=document.querySelector(".first"),middle=document.querySelector(".middle"),last=document.querySelector(".last"),next=document.querySelector(".right"),prev=document.querySelector(".left"),left=0;function rightSlider(){1==middle.style.order?(first.style.order=0,last.style.order=1):middle.style.order=1}function leftSlider(){-1==middle.style.order?(first.style.order=-1,last.style.order=1):middle.style.order=-1}next.onclick=rightSlider,prev.onclick=leftSlider;let inputs=document.querySelectorAll("input[data-rule]");for(let e of inputs)e.addEventListener("blur",(function(){let e,t=this.dataset.rule,r=this.value;switch(t){case"name":e=/^([a-zA-Zа-яА-Я])+$/.test(r);break;case"phone":e=/^(\d{11})+$/.test(r);break;case"email":e=/^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})+$/.test(r)}this.classList.remove("valid"),this.classList.remove("invalid"),e?this.classList.add("valid"):this.classList.add("invalid")}));let sends=document.querySelectorAll(".sends");for(let e of sends)e.onclick=e=>{e.preventDefault();let t=document.querySelector(".err1"),r=document.querySelector(".err2"),l=document.querySelector(".err3"),i=document.querySelector('input[name="name"]'),n=document.querySelector('input[name="phone"]'),s=document.querySelector('input[name="email"]'),a=s.value.indexOf("@"),u=s.value.indexOf(".");return""==i.value?(t.innerHTML="* Обязательно для заполнения",i.classList.add("invalid"),!1):(t.innerHTML="",""==n.value?(r.innerHTML="* Обязательно для заполнения",n.classList.add("invalid"),!1):n.value.length<11&&isNaN(n)?(r.innerHTML="* Введите 11 цифр для телефона",n.classList.add("invalid"),!1):(r.innerHTML="",""==s.value?(l.innerHTML="* Обязательно для заполнения",s.classList.add("invalid"),!1):a<1||u<1?(l.innerHTML="* Email введен не верно",s.classList.add("invalid"),!1):void(l.innerHTML="")))};