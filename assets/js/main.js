function postaviAtribute (elementi, atributi) {
    for (let i in atributi) 
		elementi.setAttribute(i, atributi[i]);
}

// Dinamičko kreiranje zaglavlja sajta

let nav = document.getElementById("navigation-menu");

let a = document.createElement("a");
a.classList.add("navbar-brand", "ml-5", "mt-3");
a.innerHTML = `<img src = "assets/img/logo.png" alt = "Logo Lara West" class = "img-fluid logo" />`
nav.appendChild(a);

if (window.location.pathname == "index.html") 
	a.setAttribute("href", "#");
else 
	a.setAttribute("href", "index.html");

let dugme = document.createElement("button");
dugme.classList.add("navbar-toggler");
postaviAtribute(dugme, {"type" : "button", "data-toggle" : "collapse", "data-target" : "navition-menu", "aria-controls" : "navition-menu", "aria-expanded" : "false", "aria-label" : "Toggle navigation", "onclick": "hamburger()"});
dugme.classList.add("img-fluid", "logo");
nav.appendChild(dugme);

let span = document.createElement("span");
span.classList.add("navbar-toggler-icon");
dugme.appendChild(span); 

let navigacioniMeni = document.createElement("div");
navigacioniMeni.classList.add("collapse", "navbar-collapse");
nav.appendChild(navigacioniMeni);

let nizStranica = ["Početna", "O nama", "Usluge", "Galerija", "Kontakt", "O autoru"];
let nizHref1 = ["index.html", "o-nama.html", "usluge.html", "galerija.html", "kontakt.html", "https://jovana49.github.io/JovanaKurtic/"];

let ul = document.createElement("ul");
ul.classList.add("navbar-nav", "ml-auto", "pr-0", "pr-lg-5", "text-center");
for (let i = 0; i < nizStranica.length; i++) {
	let li = document.createElement("li");
	li.classList.add("nav-item");
	
	let a = document.createElement("a");
	a.classList.add("nav-link", "font-weight-bold");
	
	if (window.location.pathname == nizHref1[i]) {
		li.classList.add("active");
		a.setAttribute("href", "#");
		a.innerHTML = nizStranica[i] + `<span class = "sr-only">(current)</span>`;
	}
	else {
		a.setAttribute("href", nizHref1[i]);
		a.innerHTML = nizStranica[i];
	}
	
	if ((i + 1) % 2 == 0)
		li.classList.add("m-0", "mx-lg-4");
	
	li.appendChild(a);
	ul.appendChild(li);
}
navigacioniMeni.appendChild(ul);

var countClick = 0;
function hamburger(){
	countClick+=1;
		if((countClick % 2) !== 0){
			let hamburgerMeni = document.querySelector("#hamburgerMeni");
			hamburgerMeni.appendChild(ul);
		}
		else {
			$('#hamburgerMeni ul').hide();

		}
}


// Dinamičko ispisivanje podnožja sajta

function dinamickiIspisFutera() {
	let footer = document.getElementById("footer");
	let nizHref2 = ["https://sr-rs.facebook.com/jovanakurtic16", "https://www.instagram.com/kjovanaaa/", "https://www.linkedin.com/", "assets/sitemap.xml", "assets/Dokumentacija.pdf"];
	let nizLink = ['Facebook', 'Instagram', 'LinkedIn', 'Sitemap', 'Dokumentacija'];
	let sadržaj = "";
	sadržaj += `<div class = "w-100 text-center">
					<p class = "font-weight-bold font-21 mb-2 px-5">Copyright &copy; 2021 Cvećara Lara West | All Rights Reserved</p>
				</div>`;
	sadržaj += `<div class = "w-100 d-flex flex-row justify-content-center align-items-center">
					<ul class = "nav d-flex flex-row justify-content-center align-items-center font-weight-bold">`;
	for (let i in nizLink) {
		sadržaj += "<li>";
		if (i%2 != 0)
			sadržaj += `<li class = "mx-4">`;
		else 
			sadržaj += `<li>`;
		sadržaj += `<a class = "link-color" href = "` + `${nizHref2[i]}` + `">` + `${nizLink[i]}` + `</a></li>`;
	}
	sadržaj += 	`	</ul>
				</div>`;
	footer.innerHTML = sadržaj;
}


// Kontakt forma

function formCheck() {
	let contactForm = document.getElementById('contactForm');
    let name = document.querySelector('#full-name');
	let nameValue = name.value;
	let number = document.querySelector('#number');
	let numberValue = number.value;
    let mail = document.querySelector('#exampleInputEmail1');
	let mailValue = mail.value;
	let city = document.querySelector('#city');
	let address = document.querySelector('#address');
	let addressValue = address.value;
	let gender = document.querySelectorAll('#formGender > input');
    let message = document.querySelector('#message');
	let messageValue = message.value;

	// Ime i prezime

	let regExName = /^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
	if (regExName.test(nameValue)) {
		document.querySelector("#formFullName > p").classList.remove("text-danger");
		document.querySelector("#formFullName > p").innerHTML = "Uspešno ste popunili polje!";
		document.querySelector("#formFullName > p").classList.add("text-success");
	}
	else {
		document.querySelector("#formFullName > p").innerHTML = "Ime i prezime nije ispravno uneto!";
		document.querySelector("#formFullName > p").classList.add("text-danger");
	}

	// Telefon
	
	let regExNumber = /^06[0-689]\s[\d]{2}\s[\d]{2}\s[\d]{2,3}$/;
	if (regExNumber.test(numberValue)) {
		document.querySelector("#formNumber > p").classList.remove("text-danger");
		document.querySelector("#formNumber > p").innerHTML = "Uspešno ste popunili polje!";
		document.querySelector("#formNumber > p").classList.add("text-success");
	}
	else {
	  document.querySelector("#formNumber > p").innerHTML = "Neispravno unet broj telefona!";
	  document.querySelector("#formNumber > p").classList.add("text-danger");
	}

	// E-mail adresa
	
	let regExEmail = /^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	if(regExEmail.test(mailValue)) {
		document.querySelector("#formEmail > p").classList.remove("text-danger");
		document.querySelector("#formEmail > p").innerHTML = "Uspešno ste popunili polje!";
		document.querySelector("#formEmail > p").classList.add("text-success");
	}
	else {
		document.querySelector("#formEmail > p").innerHTML = "E-mail adresa nije ispravno uneta!";	
		document.querySelector("#formEmail > p").classList.add("text-danger");
	}

	// Grad
	
	if (city.options[city.options.selectedIndex].value == "izaberite") {
		document.querySelector("#formCity > p").innerHTML = "Morate izabrati grad!";
		document.querySelector("#formCity > p").classList.add("text-danger");
	}
	else {
		document.querySelector("#formCity > p").classList.remove("text-danger");
		document.querySelector("#formCity > p").innerHTML = "Uspešno ste izabrali grad!";
		document.querySelector("#formCity > p").classList.add("text-success");
	}

	// Adresa
	
	let regExAddress = /^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[\d]{1,5}$/;
	
	if (regExAddress.test(addressValue)) {
		document.querySelector("#formAddress > p").classList.remove("text-danger");
		document.querySelector("#formAddress > p").innerHTML = "Uspešno ste popunili polje!";
		document.querySelector("#formAddress > p").classList.add("text-success");
	}
	else {
		document.querySelector("#formAddress > p").innerHTML = "Neispravna adresa!";
		document.querySelector("#formAddress > p").classList.add("text-danger");
	}

	// Pol
	
	var genderValue = "";
	for (let i = 0; i < gender.length; i++) {
		if (gender[i].checked) {
			genderValue = gender[i].value;
			break;
		}
	}
	
	if (genderValue == "") {
		document.querySelector("#formGender > p:last-child").innerHTML =  "Morate izabrati pol!";
		document.querySelector("#formGender > p:last-child").classList.add("text-danger");
	}
	else {
		document.querySelector("#formGender > p:last-child").classList.remove("text-danger");
		document.querySelector("#formGender > p:last-child").innerHTML =  "Uspešno ste izabrali pol!";
		document.querySelector("#formGender > p:last-child").classList.add("text-success");
	}

	// Poruka
	
	if (messageValue.length <= 0) {
		document.querySelector("#formMessage > p").innerHTML = "Niste uneli poruku!";
		document.querySelector("#formMessage > p").classList.add("text-danger");
	}
	else {
		document.querySelector("#formMessage > p").classList.remove("text-danger");
		document.querySelector("#formMessage > p").innerHTML = "Poruka je prosleđena!";
		document.querySelector("#formMessage > p").classList.add("text-success");
	}
}


// jQuery

// Promena broje slike (hover efekat)

$('#about-us .img-fluid').hover(function() {
		$(this).removeClass('hoverImg');
        $(this).addClass('hoverColor');
},function() {
        $(this).removeClass('hoverColor');
		$(this).addClass('hoverImg');
});

// Pojavljivanje slika prilikom pristupa stranici Galerija

$(document).ready(function(){
    $("#img1").fadeIn(1000);
    $("#img2").fadeIn(2000);
    $("#img3").fadeIn(3000);
	$("#img4").fadeIn(4000);
});

// Ispisivanje naslova

var i = 0;
var tekst = "Pridružite nam se u cvetnoj avanturi da zajedno oživimo Vašu unikatnu floralnu kombinaciju!";
var brzina = 50;
function ispisNaslova() {
	if (i < tekst.length) {
		document.getElementById("h1").innerHTML += tekst.charAt(i);
		i++;
		setTimeout(ispisNaslova, brzina);
	}
}