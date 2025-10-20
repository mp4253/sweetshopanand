$(document).ready(function(){
    $("#btn_submit").click(function(event){
        event.preventDefault();
        $("#bg").fadeIn(1000);
        $("#modal").animate({
            "top":"100px",
            "justify-content":"center",
            "align-items":"center"
        },1000);

        $("#bg").click(function(){
            $("#modal").animate({
                "top": "-800px",
                
            },1000);

            $("#bg").fadeOut(1000);
        });

    });
});