'use strict'

$(() => {

    const navList = $('.nav_list');
    const ham = $('.toggle_line');

    // ハンバーガーメニュー


    $('#js-nav_lists').click(() => {
        navList.toggleClass('clicked');
        ham.toggleClass('clicked');

        return false;

    });
    $('body').click(function () {
        if(navList.hasClass('clicked')){
            // console.log("OK");
            navList.removeClass('clicked');
            ham.removeClass('clicked');
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




