

document.addEventListener("DOMContentLoaded", function(){

    const skipBtn = document.getElementById('skip');
    const skipCont = document.getElementById('skip-cont');
    const newspaperSpinning = [
        { transform: 'rotate(0) scale(1)' },
        { transform: 'rotate(360deg) scale(0)' }
    ];

    const newspaperTiming = {
        duration: 1000,
        iterations: 1,
      }

    skipBtn.addEventListener('click', () =>{
        // $('#skip-cont').switchClass( "fullwidth-video", "video-container", 500, "easeInOutQuad" );
        $('#skip-cont').removeClass('fullwidth-video')
        $('#skip-cont').addClass('video-container')
        skipBtn.classList.add('d-none');
        // document.getElementById('site_cont').classList.remove('d-none');
    })
    
  
}); 

$(document).scroll(function () {
    if ($(document).scrollTop() >= '150') {
        $('header').addClass("fixed");
        var newSrc = 'McitLibs/images/mcit-logo.png';
        $('.mcit-log img').attr('src', newSrc);
    } else {
        $('header').removeClass("fixed");
        var oldSrc = 'McitLibs/images/logo.svg';
        $('.mcit-log img').attr('src', oldSrc);
    }
});

$('.missions-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<img src='McitLibs/images/aright.svg'></img>", "<img src='McitLibs/images/aleft.svg'></img>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


$('.projects-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: ["<img src='McitLibs/images/aright.svg'></img>", "<img src='McitLibs/images/aleft.svg'></img>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var docWith = $(document).width();
if (docWith < 991) {
    var topMenuUl = $(".navbar-collapse").html();
    $('.nav_content').prepend(topMenuUl);
} 

// one-page-scroll

$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

$(document).scroll(function() {
    if ($(document).scrollTop() >= '300') {
        $('.gotoup').css("display", "block");
    } else {
        $('.gotoup').css("display", "none");
    }
});
