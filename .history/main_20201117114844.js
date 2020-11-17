'use strict'

$(() => {

    const body = document.body;
    const navList = $('.nav_list');
    const ham = $('.toggle_line');

    // ハンバーガーメニュー
    $('#js-nav_lists').click(() => {
        navList.toggleClass('clicked');
        ham.toggleClass('clicked');

        if (navList.hasClass('clicked')) {
            $("html, body").click(function () {
                navList.toggleClass('clicked');
                ham.toggleClass('clicked');
            });
            
        }
    });








        //ナビクリックでスムーズ移動
  
    $('a[href^="#"]').click(function () {
        //スクロールのスピード
        let speed = 500;
        //リンク元を取得
        let href = $(this).attr("href");
        //リンク先を取得
        let target = $(href == "#" || href == "" ? 'html' : href);
        //リンク先までの距離を取得
        let position = target.offset().top;
        //スムーススクロール
        $("html, body").animate({ scrollTop: position }, speed, "swing");

        //スクロールしたらハンバーガーメニュー閉じる
        navList.removeClass('clicked');
        ham.removeClass('clicked');
        

        return false;
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
