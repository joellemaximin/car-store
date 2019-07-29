$('.delete-comment').on('click', function(e){
    let that = this;
    console.log($(that).prev().val());
    if (confirm("Are you sure you want to delete this comment?")) {
    $.ajax({
    url: '/comments/' + $(that).prev().val(),
    method: 'DELETE',
    }).done(function(res) { 
        console.log('deleted', res);
        window.location.reload(true);
      }); 
    } 
});
