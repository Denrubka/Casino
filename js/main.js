$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    stagePadding: 10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$(document).on("click",".show_it", function(){
    var id = $(this).attr("id");
    id = id.replace('s','');
    $("#b"+id).toggle( "slow" );
    var text = $("#s"+id+" span").text();
    if(text=="show more"){
        $("#s"+id+" span").text("hide");
        $("#s"+id+" img").css("transform", "rotatez(180deg)");
    }
    else{
        $("#s"+id+" span").text("show more");
        $("#s"+id+" img").css("transform", "rotatez(0deg)");
    }
})

$(document).on("click",".show_faq", function(){
    var id = $(this).attr("id");
    id = id.replace('q','');
    $("#a"+id).toggle( "slow" );
    var img = $("#q"+id+" img").attr("src");
    if(img=="images/arrow_down.svg"){
        $("#q"+id+" img").attr("src","images/arrow_up.svg");
    }
    else{
        $("#q"+id+" img").attr("src","images/arrow_down.svg");
    }
})

$(document).on("click",".open_p_m", function(){
    $(".block_close_page_menu").toggle( "slow" );
    var img = $(this).children("img").attr("src");
    if(img=="images/arrow_down_grey.svg"){
        $(this).children("img").attr("src","images/arrow_up_white.svg");
    }
    else{
        $(this).children("img").attr("src","images/arrow_down_grey.svg");
    }
})


$(document).on("click",".sh_how", function(){
    var id = $(this).attr("id");
    id = id.replace('h','');
    $("#g"+id).toggle( "slow" );
    var img = $("#h"+id+" img").attr("src");
    if(img=="images/arrow_down.svg"){
        $("#h"+id+" img").attr("src","images/arrow_up_white.svg");
        let col = $("#h"+id+" path").attr("fill")
        $("#h"+id).parent(".block_how_sec").css("background",col);
        $("#h"+id+" span").css("color","white");
        $("#h"+id+" path").css("fill","white");
        $("#g"+id).css("color","white");
    }
    else{
        let col = $("#h"+id).parent(".block_how_sec").css("background-color");
        $("#h"+id+" img").attr("src","images/arrow_down.svg");
        $("#h"+id).parent(".block_how_sec").css("background","white");
        $("#h"+id+" span").css("color","#2E3543");
        $("#h"+id+" path").css("fill", col);
        $("#g"+id).css("color","#2E3543");
    }
})


$(document).on("click",".sh_hows", function(){
    var id = $(this).attr("id");
    id = id.replace('k','');
    $("#z"+id).toggle( "slow" );
    var img = $("#k"+id+" img").attr("src");
    if(img=="images/arrow_down_grey.svg"){
        $("#k"+id+" img").attr("src","images/arrow_up_white.svg");
        /*let col = $("#h"+id+" path").attr("fill")
        $("#h"+id).parent(".block_how_sec").css("background",col);
        $("#h"+id+" span").css("color","white");
        $("#h"+id+" path").css("fill","white");
        $("#g"+id).css("color","white");*/
        $("#k"+id+" a").text("show less");
    }
    else{
        /*let col = $("#h"+id).parent(".block_how_sec").css("background-color");*/
       $("#k"+id+" img").attr("src","images/arrow_down_grey.svg");
        /* $("#h"+id).parent(".block_how_sec").css("background","white");
        $("#h"+id+" span").css("color","#2E3543");
        $("#h"+id+" path").css("fill", col);
        $("#g"+id).css("color","#2E3543");*/
        $("#k"+id+" a").text("show more");
    }
})


$(document).on("click",".cl_footer", function(){
  var id = $(this).attr("id");
    id = id.replace('f','');
    $("#x"+id).toggle( "slow" );
    var img = $("#f"+id+" img").attr("src");
    if(img=="images/arrow_down_grey.svg"){
        $("#f"+id+" img").attr("src","images/arrow_up.svg");
        $("#f"+id+" span").css("color","#7ba9ee");
    }
    else{
        $("#f"+id+" img").attr("src","images/arrow_down_grey.svg");
        $("#f"+id+" span").css("color","#dfe5ee");
    }
})



// $(document).ready(function(){
//     setTimeout(() => $(".cookie").css("display","flex"), 4000);
// })

// $(document).on("click",".agree_cookie", function(){
//     $(".cookie").fadeOut(500);
// })
// $(document).on("click",".disagree_cookie", function(){
//     $(".cookie").fadeOut(500);
// })

$(document).on("mouseover",".us_state", function(e){
    $(".hov_on").fadeIn(200);

    var pos = $(".img_sec3").offset();
    var elem_left = pos.left;
    var elem_top = pos.top;


    var X = e.pageX - elem_left+10;
    var Y = e.pageY - elem_top+10;
    var state = $(this).attr("title");
    $(".hov_on b").text(state);
    $(".hov_on").css("left",X+"px");
    $(".hov_on").css("top",Y+"px");

    console.log("X: " + X + " Y: " + Y);
})
$(document).on("mouseleave",".img_sec3", function(){
    $(".hov_on").fadeOut(200);
})
