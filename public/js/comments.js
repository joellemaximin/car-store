$(document).ready(function(){
    $('.delete-comment').on('click', function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            method: "POST",
            // type: 'DELETE',
            url: '/comment/'+id,
            data: {"commentId": commentId},
            success: function(response){
                alert('Deleting comments');
                window.location.href='/all_comments';
                location.reload();
            },
            error: function(err){
                console.log(err)
            }
        });
    });
});