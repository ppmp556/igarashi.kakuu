'use strict'

$(() => {

    const body = document.body;
    const navList = $('.nav_list');

    // ハンバーガーメニュー
    $('#nav_lists').click(() => {
        navList.toggleClass('clicked');
        $('.toggle_line').toggleClass('clicked');
    });

    body.click(() => {
        if ($('.nav_list').hasClass('clicked')) {
            $('.nav_list').removeClass('clicked');
        } else {
            false
        }

    });
});




// const body = document.body;

// const toggler = document.getElementById('navToggler');
// //#navToggleを取得し、togglerに格納


// const navList = document.getElementById('js-nav');
// const navList2 = document.getElementById('js-nav2');
// //#navListsを取得し、navListに格納


// toggler.addEventListener('click', function() {　
//     //togglerクリックされたら、
//     body.classList.toggle('clicked');　
    
// });
// navList.addEventListener('click', function(){

    
//     body.classList.remove('clicked');
// });
// navList2.addEventListener('click', function(){

    
//     body.classList.remove('clicked');
// });
