$(document).ready(function(){
    $('.delete-comment').on('click', function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({ 
            type: 'DELETE',
            url: '/comment/'+id,
            success: function(response){
                alert('Deleting comments');
                window.location.href='/all_comments';
            },
            error: function(err){
                console.log(err)
            }
        });
    });
});