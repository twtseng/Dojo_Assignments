$('img').click(function() {
    var curImage = $(this).attr('src');
    var image1 = $(this).attr('image1');
    var image2 = $(this).attr('image2');
    if (curImage == image1) {
        $(this).attr('src', image2);
    } else {
        $(this).attr('src', image1);
    }
})