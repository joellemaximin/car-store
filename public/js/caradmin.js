$('.delete').on('click', function() { 
    let that = this;
    console.log($(that).prev().val());
    if (confirm("Are you sure you want to delete this ressource?")) {
    $.ajax({
    url: '/admin/delete/' + $(that).prev().val(),
    method: 'DELETE',
    }).done(function(res) { 
        console.log('deleted', res);
        window.location.reload(true);
      }); 
    } 
});