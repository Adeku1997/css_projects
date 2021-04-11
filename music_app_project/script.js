$(document).ready(function(){
    $('.btn').click(function(){
        $('.side-nav-links').slideToggle(3000);

        $('.btn').toggleClass('change')
    })

    $(".nav-btn").click(function(){
        $(".nav").toggleClass('margin');
        $('.nav-btn').toggleClass('change');
        $('main').toggleClass('max-width')
    })

    $('.song-center').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
})