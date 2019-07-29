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
