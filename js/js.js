
$(document).ready(function(){

    $("#searchInput").keyup(function () {
        var filter = $(this).val().toLowerCase(); 
        $(".col-6.col-lg-3.col-xl-2, #mementosLink, #framesLink, #shoppingLink, #mugsLink, #giftLink").each(function () {
            var buttonText = $(this).text().toLowerCase(); 
            if (buttonText.indexOf(filter) === -1) { 
                $(this).hide();
            } else {
               $(this).show();
            }
        });
    });



});