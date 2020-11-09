
// tabs @START
$("[data-tab]").on('click', function(){
    //get data attrib number
    var tabNum = $(this).data('tab');
    //set active state to tab
    $("[data-tab]").removeClass('active');
    $(this).addClass('active');
    //reset tab content and show selected
    $("[data-tab-content]").hide();
    $("[data-tab-content='"+ tabNum +"']").show();
    //move the slider in the progress bar
    if(tabNum === 1){
        $("#tabSlider").css("left","0");
    }else if(tabNum === 2){
        $("#tabSlider").css("left","33.3%");
    }else{
        $("#tabSlider").css("left","66.6%");
    }
})// tabs @END

// accordion @START
$("[data-accordion-btn]").on('click', function(){
    if(!$(this).hasClass('open')){
        $("[data-accordion-btn]").removeClass('open');
        $(this).addClass('open');
    }else{
        $(this).removeClass('open');
    }
})
// accordion @END

// $(function(){
//
//     // :: Initialize variables :: //
//     // let debug = true;
//     var mobileBreakpoint = 920;
//     var isiOpens = 0;
//     var stickyIsi = $('#sticky-isi');
//     var stickyIsiHeight = stickyIsi.outerHeight();
//     var isi = $('.isi');
//     var debounce;
//     var isiPos;
//     var body = $("body");
//
//     // :: sticky isis :: //
//
//     function init() {
//         stickyIsi.find(".sticky-isi-content").append(isi.html());
//         calcIsiPos();
//         showHideISI();
//     }
//
//     function is_mobile(){
//         return $(window).outerWidth() < mobileBreakpoint;
//     }
//
//     function calcIsiPos() {
//         isiPos = isi.offset().top;
//         //console.log(isiPos);
//     }
//     function calcIsiHeight() {
//         stickyIsiHeight = stickyIsi.outerHeight();
//     }
//
//     // modification from delivery 1
//     function debounceFn(){
//         // console.log("debounce");
//         clearTimeout(debounce);
//         debounce = setTimeout(function(){
//
//             // console.log("debounce-timeout");
//
//             // Crossbrowser fix 'window.pageYOffset' instead of 'window.scrollY'
//             if ( window.pageYOffset + window.innerHeight > isiPos + 25  ) {
//                 stickyIsi.hide();
//                 $('.toggle').hide();
//             } else {
//                 stickyIsi.show();
//                 $('.toggle').show();
//             }
//
//         }, 100);
//     }
//
//     function showHideISI() {
//         //console.log(window.pageYOffset + " + " + window.innerHeight + " = " + (window.pageYOffset + window.innerHeight));
//         if ( is_mobile() ) {
//             debounceFn();
//         } else {
//             // Crossbrowser fix 'window.pageYOffset' instead of 'window.scrollY'
//             if ( window.pageYOffset + window.innerHeight > isiPos + stickyIsiHeight - 10) {
//                 stickyIsi.hide();
//                 $('.toggle').hide();
//             } else {
//                 stickyIsi.show();
//                 $('.toggle').show();
//             }
//         }
//     }
//
//     // :: ISI :: //
//
//     $(window).resize(function(e) {
//         calcIsiHeight();
//         calcIsiPos();
//         showHideISI();
//     });
//
//     $(window).scroll(function(e){
//         showHideISI();
//     });
//
//     stickyIsi.on('click', '.toggle', function(){
//
//         var toggleFn = function(idx, className) {
//
//             if ( className === 'open' ) {
//                 stickyIsi.find('.wrapper').scrollTop(0).css('overflow', 'hidden');
//                 body.removeClass("isi-open");
//                 $('.toggle').removeClass("expanded");
//                 $(".sticky-isi-content").scrollTop(0);
//
//             } else {
//                 stickyIsi.find('.wrapper').css('overflow', 'auto');
//                 body.addClass("isi-open");
//                 $('.toggle').addClass("expanded");
//                 $(".sticky-isi-content").scrollTop(0);
//             }
//
//             return 'open';
//         };
//
//         stickyIsi.toggleClass(toggleFn);
//     });
//
//     $('.utility-nav .arrow').on('click', function(e){
//         e.preventDefault();
//         if ($("#sticky-isi").is(":visible")) {
//             if (isiOpens){
//                 return 0;
//             }else{
//                 isiOpens = 1;
//             }
//
//             // Same code as above
//             var floatIsi = $('#sticky-isi'),
//                 isiToggle = floatIsi.find('.toggle'),
//                 isiWrapper = floatIsi.find('.wrapper');
//
//             if (floatIsi.hasClass('open')){
//                 isiToggle.html('+');
//                 isiWrapper.scrollTop(0).css('overflow', 'hidden');
//                 floatIsi.removeClass('open');
//                 body.removeClass("isi-open");
//                 $(".sticky-isi-content").scrollTop(0);
//             } else {
//                 isiToggle.html('-');
//                 isiWrapper.css('overflow', 'auto');
//                 floatIsi.addClass('open');
//                 body.addClass("isi-open");
//                 $(".sticky-isi-content").scrollTop(0);
//             }
//             isiOpens = 0;
//         }
//         else {
//             $([document.documentElement, document.body]).animate({
//                 scrollTop: $(".isi").offset().top
//             }, 500);
//         }
//     });
//
//     init();
// });

// :: Menu :: //
// $('.cont-menu').on('click', function(){
//     $('#menu').toggleClass('open');
//     $(this).toggleClass('minus');
// })

// smooth scroll to isi
// $("#isi-anchor").on('click', function(event) {
//     event.preventDefault();
//     $('html, body').animate({
//         scrollTop: $(this.hash).offset().top - 39
//     }, 800)
// });







