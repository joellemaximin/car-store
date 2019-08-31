var iconModal = document.querySelector('#iconmodal');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

var clientBtn = document.querySelector('#commonbutton');

var modal = document.getElementById('formpopup');

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

// $(window).scroll(function() {
//     if ($(document).scrollTop() > 300 && $("#backmodal").attr("displayed") === "false") {
//       $('#backmodal').modal('show');
//       $("#backmodal").attr("displayed", "true");
//     }
// });
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


///////////////////////

// window.onload = setTimeout(function(){
//     $('#backmodal').modal('show');
//     // window.location = 'http://www.example.com';
// }, 5000);
// submitM.addEventListener('click', closeOnSubmit);

// window.onload = function() {

//     setTimeout(function() {
//       modal.style.display = 'block';
//     }, 2000);
  

//     // close()
// };

// var span = document.getElementsByClassName("closeBtnn")[0];
// var modaal = document.querySelector('#backmodal');
// var submitM = document.getElementsByClassName('btn-sendmodal');

// span.onclick = function() {
//     modaal.style.display = "none";
// }


// window.onclick = function(event) {
//     if (event.target == modal ) {
//       modaal.style.display = "none";
//     }
// }

    //Get the value of the key field.
    // var labEmail = document.getElementById('label-email');
    // var labName = document.getElementById('label-name');
    // var labPhone = document.getElementById('label-tel');
    
    //Get the value of the value field.
    // var mail = document.getElementById('email');
    // var firstname = document.getElementById('firstname');
    // var phone = document.getElementById('phone');

      
    // var date = document.getElementById('date').value;
    // var btnEnvoyez = document.getElementsByClassName('btn-sendmodal');
    // Save the name in localStorage.

    // btnEnvoyez.onclick= function(){
    //     const value1 = mail.value;
    //     const value2 = firstname.value;
    //     const value3 = phone.value;

    //     if (value1 && value2 && value3) {
            
    //     // Retrieve the users name.

    //         localStorage.setItem('firstname', firstname);
    //         localStorage.setItem('email', mail);
    //         localStorage.setItem('phone', phone);
    //     //   localStorage.setItem('date', date);

    //         location.reload();
    //     };
    // };


//     for(let i=0; i < localStorage.length; i++){
//         const mail = localStorage.mail(i);
//         const mail = localStorage.getItem(mail);
//         // const phone = phone.value;

//     }
//     console.log(localStorage)

// close()