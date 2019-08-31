// import { option } from "@oclif/parser/lib/flags";

$('.delete').on('click', function() { 
    let that = this;
    // console.log($(that).prev().val());
    if (confirm("Etes-vous sûr de supprimer cette voiture?")) {
    $.ajax({
    url: '/admin/delete/' + $(that).prev().val(),
    method: 'DELETE',
    }).done(function(res) { 
      // alert('Votre voiture est bien supprimé');
      window.location.reload(true);
      }); 
    } 
});



// var text = $('#options').val();
// $('#option_part').val(text);

