
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

    $(".col-6.col-lg-3.col-xl-2").click(function(){
        $(".eachmodal").modal('show');
        const Heading = $(this).children(".custom-cards").children(".card-body").children(".card-title").html();
        const Stars = $(this).children(".custom-cards").children(".card-body").children("ul").html();
        const copyImg = $(this).children(".custom-cards").children(".bg-image").children(".img-fluid").attr("src");
        const Desc = $(this).children(".custom-cards").children(".card-body").children(".mb-2").children("b").html();
        const Size = $(this).children(".custom-cards").children(".card-body").children(".card-text").html();
        $('.img-copy').html('<img src="'+copyImg+'" alt="" class="img-fluid" />');
        $('.copymodeltitle').html(Heading);
        $('.copystars').html(Stars);
        console.log(Desc);
        if(Desc === undefined){
            $('.copydesc').html('');
        }else{
            $('.copydesc').html(Desc);
        }

        if(Size === undefined){
            $('.copysize').html('')
        }else{
            $('.copysize').html(Size)
        }

        
    });


});