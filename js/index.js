// $.get('http://localhost:3000/', function (response, error) {
//   console.log(response);
// });

/*function openSlideMenu(){
    document.getElementById("side-menu").style.width="250px",
    document.getElementById("main").style.marginLeft="250px"
}

function closeSlideMenu(){
    document.getElementById("side-menu").style.width="0",
    document.getElementById("main").style.marginLeft="0"
}
var i=0,
images=[],
time=5e3;
function changeImg(){
    document.slide.src=images[i],
    i<images.length-1?i++:i=0,
    setTimeout("changeImg()",time)}
    images[0]="images/e-Golf.png",
    images[1]="images/nouvelleTiguan.png",
    images[2]="images/nouvelleTouareg.png",
    images[3]="images/golf.png",
    window.onload=changeImg;
var accordions=document.getElementsByClassName("accordion");
for(i=0;i<accordions.length;i++)accordions[i].onclick=function(){
var e=this.nextElementSibling;
e.style.maxHeight? e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"};
var optionItems=document.getElementsByClassName("optionItem");
for(i=0;i<optionItems.length;i++)optionItems[i].onclick=function(){
    var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"};
    $().ready(function(){
        $("#signupForm").validate({
            rules:
            {
            username: {
                required:!0,
                minlength:5
            },
            email:{
                required:!0,
                email:!0
            },
            password:{
                required:!0,
                minlength:5
            },
            password_confirmation:{
                required:!0,minlength:5,
                equalTo:"#password"
            },
            messages:{
                username:{
                    required:"Please enter a username",
                    minlength:"Your username must consist at least 4 characters"
                },
                password:{
                    required:"Please provide a password",
                    minlength:"Your username must consist at least 5 characters long"
                },
                password_confirmation:{
                    required:"Please provide a password",
                    minlength:"Your username must consist at least 5 characters long",
                    equalTo:"Please enter the same password as above"
                }
            }
        }
        
    });
});*/

// array of all cars
/*function Car(name, price, description, img){
    this.name = name;
    this.price = price;
    this.description = description;
    this.img = img;
    //this.link = link;
}

var passat = new Car("passat", 2000, "blablabla", "images/passat.png");
var nouvelleTiguan = new Car("nouvelleTiguan", 2000, "blablabla", "images/passat.png");
var nouvelleTouareg = new Car("nouvelleTouareg", 2000, "blablabla", "images/passat.png");
var nouvellePolo = new Car("nouvellePolo", 2000, "blablabla", "images/passat.png");
var up = new Car("up", 2000, "blablabla", "images/passat.png");
var golf = new Car("golf", 2000, "blablabla", "images/passat.png");
var nouvelleTroc = new Car("nouvelleTroc", 2000, "blablabla", "images/passat.png");
var arteon = new Car("arteon", 2000, "blablabla", "images/passat.png");
var golfSW = new Car("golfSW", 2000, "blablabla", "images/passat.png");
*/
var cars = [
    {
    name: "passat", price: 2000, img: "images/passat.png",description: "blablabla", link: ""
    },
    {
        name: "Golf", price: 2000, img: "images/golf.png",description: "blablabla", link: ""
    },
    {
        name: "Nouvelle Touareg", price: 2000, img: "images/nouvelleTouareg.png",description: "blablabla", link: ""
    },
    {
        name: "Nouvelle Tiguan", price: 2000, img: "images/nouvelleTiguan.png",description: "blablabla", link: ""
    },
    {
        name: "Volksw4", price: 2000, img: "images/volksw4.jpg", description: "blablabla", link: ""
    },
    {
        name: "T-roc", price: 2000, img: "images/T-roc.png", description: "blablabla", link: ""
    },
    {
        name: "Tiguan", price: 2000, img: "images/Tiguan.png", description: "blablabla", link: ""
    },
    {
        name: "Passat2", price: 2000, img: "images/nouvelle_polo.png", description: "blablabla", link: ""
    },
];
//show only 4 et sinon click sur lebouton  pour voir plus

for (i = 0; i < cars.length-4; i++){
    document.querySelector('#indexGallery').insertAdjacentHTML("afterbegin", '<div class="col-md-6"><div class="thumbnail" id="car'+ i +'"></div></div>');
    document.getElementById("car" + i).innerHTML= '<h2 class="textThumb">' + cars[i].name + '</h2> <img class="imgBestSeller" src="' + cars[i].img +'" /> <p class="price">' + cars[i].price + '</p> <p class="description">'+ cars[i].description +'</p> ';
}

//creer un effet sur chaque title de voiture

const textThumbs = document.querySelectorAll('.textThumb');
[...textThumbs].forEach( textThumb =>{
    //console.log(textThumb);
    textThumb.addEventListener('mouseover', Show);
    textThumb.addEventListener('mouseout', Reset);

});

/*let yup = document.querySelector('.thumbnail');
var inner = yup.querySelectorAll('.textThumb');

console.log(inner.length);
*/

function Show(){
    this.style.backgroundColor = 'pink';
    this.link = ""
    //window.location.href = "golf.html"
}

function Reset(){
    this.style.backgroundColor = '';
    //window.location.href = "golf.html"
}

var body = document.getElementById('body');
var btnAllCars = document.createElement('button');
btnAllCars.className += "seemore";
btnAllCars.innerHTML = "Show More";
btnAllCars.title = "VolkswagenCars";
var indexG = document.getElementById('indexGallery')
indexG.appendChild(btnAllCars)

//var contentGlobale = document.querySelector('.contentGlobale-index');
//contentGlobale.appendChild(btnAllCars);

btnAllCars.addEventListener('click',
function(){
   window.location.href = "volkswagen_all_cars.html"

});

//fonctionne just ajouter bouton close
/*var createCookies = function(){
    var modal = document.createElement("div");
    modal.setAttribute('class', "modal");
    modal.setAttribute('id', "cookies");
    //modal.innerHTML = "ok jai envie de glace!"
    modal.style.backgroundColor = '#ccc';
    //modal.insertAdjacentElement('beforebegin', '<div id="cookies-content"><h2>COOKIES</h2></div>');
    modal.style.width = "850px";
    modal.style.height = "450px";
    modal.style.marginLeft = "300px";
    modal.style.marginRight = "300px";
    modal.style.display = "block";

    body.appendChild(modal);
    var h2 = document.createElement('h2');
    var h2C = document.createTextNode('COOKIES');
    modal.appendChild(h2);
    h2.appendChild(h2C);
    h2.className += "titleCookie";

    var text = document.createElement('p');
    var textC = document.createTextNode("Volkswagen uses cookies to improve your experience on our website. These cookies provide a better performance, enhance features and enable certain functionality. Our cookies policy explains more about cookies and you can change your settings at any time. By continuing to use our website you are agreeing to our use of cookies.")
    h2.appendChild(text);
    text.appendChild(textC);
    text.className += "textCookie";

    var btn = document.createElement('button');
    var btnC = document.createTextNode("Contine");
    btn.className += "cookieButton";
    text.appendChild(btn);
    btn.appendChild(btnC);

    btn.addEventListener('click', close());
}

setTimeout(createCookies, 3000);*/
//le bouton && appuyer sur la window doit fermer la fenetre 

//show all clients 
var clients = [
    {company: 'shopify', img: "", link:"" },
    {company: 'slack', img: "", link:"" },
    {company: 'facebook', img: "", link:"" },
    {company: 'github', img: "", link:"" }
];

document.querySelector('.common-button').addEventListener('click', function(){
    var buttonClient = document.createElement("div");
    buttonClient.setAttribute('class', "buttonCl");
    buttonClient.setAttribute('id', "clientB");
    buttonClient.style.backgroundColor = '#ccc';
    buttonClient.style.width = "800px";
    buttonClient.style.height = "450px";    
    buttonClient.style.margin = "100px auto";
    //buttonClient.style.marginLeft = "300px";
    //buttonClient.style.marginRight = "300px";
    buttonClient.style.position = "fixed";
    buttonClient.style.top = "0";
    buttonClient.style.display = "fixed";
    buttonClient.style.left = "0";
    buttonClient.style.bottom = "0";
    buttonClient.style.right = "0";
    buttonClient.style.left = "0";
    buttonClient.style.zIndex = "50";

    var h2 = document.createElement('h2');
    var h2C = document.createTextNode('List of all our clients since 2016');
    buttonClient.appendChild(h2);
    h2.appendChild(h2C);
    h2.className += "titleClient";

    var text = document.createElement('img');

    var texC = document.createTextNode("Volkswagen uses cookies to improve your experience on our website. These cookies provide a better performance, enhance features and enable certain functionality. Our cookies policy explains more about cookies and you can change your settings at any time. By continuing to use our website you are agreeing to our use of cookies.")
    h2.appendChild(text);
    text.appendChild(texC);
    text.className += "textCookie";

    
    var btnClie = document.write(clients[i].name, )
    console.log('works');

    var customers = document.getElementById('contentGlobal-customers');
    customers.appendChild(buttonClient);
    btnClie.appendChild(buttonClient);


});

clients.forEach(function(value, index){
    document.innerHTML(""+value+"");
});


