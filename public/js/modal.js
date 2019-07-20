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

/********* First poppup ************/

$(window).scroll(function() {
    if ($(document).scrollTop() > 300 && $("#backmodal").attr("displayed") === "false") {
      $('#backmodal').modal('show');
      $("#backmodal").attr("displayed", "true");
    }
});
// $(function () {
//     $('#myTab li:last-child a').tab('show')
// })
// $('#myTab a').on('click', function (e) {
//     e.preventDefault()
//     $(this).tab('show')
// })
$('.nav-tabs li a').click(function (e) {     
    //get selected href
    var href = $(this).attr('href');    

    //set all nav tabs to inactive
    $('.nav-tabs li').removeClass('active');

    //get all nav tabs matching the href and set to active
    $('.nav-tabs li a[href="'+href+'"]').closest('li').addClass('active');

    //active tab
    $('.tab-pane').removeClass('active');
    $('.tab-pane'+href).addClass('active');
})