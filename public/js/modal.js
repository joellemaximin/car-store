var backmodal = document.querySelector('.backmodal');

var iconModal = document.querySelector('#iconmodal');

var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closebttn = document.getElementsByClassName('closeBtn')[0];

var clientBtn = document.querySelector('#commonbutton');


clientBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

function openModal(){
    iconModal.style.display = 'block';
}
function closeModal(){
    iconModal.style.display = 'none';
}
function outsideClick(e){
    if(e.target == iconModal){
        iconModal.style.display = 'none';
    }
}