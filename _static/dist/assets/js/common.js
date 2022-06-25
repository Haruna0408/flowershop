
/*　- 実行 -
/*-----------------------------------*/
$(function () {
  // "use strict";
  smoothScroll();
  scrollAfterAddClass();
  hamburgerAriaMenu();
  hamburgerClose();
  accordion();
  pagetopButton();
  floatingButton();
});

$(window).on('load resize', function () {
  spAccoudion();
});

//ブラウザヴバック処理iphone用
window.onpageshow = function (event) {
  if (event.persisted) {
      window.location.reload();
      $('.headerSec__nav').removeClass('active');
  }
};

//target=blankに noopener noreferrer を付与します
document.addEventListener('DOMContentLoaded', function() {
  $('a[target="_blank"]').attr('rel', 'noopener noreferrer');
  pagetopButton();
});


/*　- 処理 -
/*-----------------------------------*/
//スクロール後ヘッダーにclassを付与
function scrollAfterAddClass() {
  let scorollAfterAddBg = $('.js-header');
  $(window).on('scroll', function () {
    if (scorollAfterAddBg.height() < $(this).scrollTop()) {
            scorollAfterAddBg.addClass('js-headerBg');
    } else {
            scorollAfterAddBg.removeClass('js-headerBg');
    }
  });
}

//スムーズスクロール
function smoothScroll() {
  $('a[href^="#"]').on('click', function () {
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({
          scrollTop: position
      }, speed, 'swing');
      return false;
  });
}

//ページ上部へ戻る
function pagetopButton() {
  var $pagetop      = $('.p-pagetop');
  var positionValue = $(window).scrollTop();
  var showPosition  = 300;
  var easing        = 'swing';
  var speed         = 1200;
  var pagetopVisible;
  if (positionValue > showPosition) {
    $pagetop.fadeIn();
  }
  $(window).scroll(function() {
    positionValue = $(window).scrollTop();
    pagetopVisible = $pagetop.is(':visible');
    if (positionValue > showPosition) {
      if (!pagetopVisible) {
        $pagetop.fadeIn();
      }
    } else {
      if (pagetopVisible) {
        $pagetop.fadeOut();
      }
    }
  });
  $pagetop.on('click', function(event) {
    $('html,body').animate({scrollTop:0}, speed, easing);
    event.preventDefault;
  });
}

//ハンバーガーメニュー
function hamburgerAriaMenu() {
  $('.p-hamburger').on('click', function () {
    $('.js-header').toggleClass('is-active');
    $('.p-nav__area').toggleClass('is-active');
    $('.p-hamburger_text').toggleClass('is-active');
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }
  });
}

//スマホメニュー閉じる処理 -ハンバーガーナビと連動-
function hamburgerClose() {
  var $triggerBtn = $('.js-open__trigger');
  $triggerBtn.on('click', function (event) {
    $('.p-hamburger').trigger('click');
  });
}

//アコーディオン
function accordion() {
  $('.c-accordion__title.js-trigger').on('click', function(){
    $(this).toggleClass('is-active');
    $(this).next('.c-accordion__body').slideToggle().toggleClass('is-active');
  });
}
//スマホ　アコーディオンメニュー
function spAccoudion() {
  var winW = $(window).width();
  var devW = 767;
  var $spDropdownMenu = $('.js-open__trigger');
  if (winW <= devW) {
    $spDropdownMenu.on('click', function () {
      if ($(this).next('.globalnav_dropdownmenu_sp').hasClass('is-active')) {
        $('.globalnav_dropdownmenu_sp').removeClass('is-active');
      } else {
        $('.globalnav_dropdownmenu_sp').addClass('is-active');
      }
      return false;
    });
  }
}
//フローティングボタン
function floatingButton() {
  var $pagetop = $('.p-floating__button');
  var positionValue = $(window).scrollTop();
  var showPosition = 300;
  var easing = 'swing';
  var speed = 1200;
  var pagetopVisible;
  if (positionValue > showPosition) {
    $pagetop.fadeIn();
  }
  $(window).scroll(function () {
    positionValue = $(window).scrollTop();
    pagetopVisible = $pagetop.is(':visible');
    if (positionValue > showPosition) {
      if (!pagetopVisible) {
        $pagetop.fadeIn();
      }
    } else {
      if (pagetopVisible) {
        $pagetop.fadeOut();
      }
    }
  });
  $pagetop.on('click', function (event) {
    $('html,body').animate({ scrollTop: 0 }, speed, easing);
    event.preventDefault;
  });
}
//matchHeight
function matchHeight() {
  // 文字高さ合わせる
  $('.js-hightLead').matchHeight();
  $('.js-hightName').matchHeight();
}
// ページトップ固定ボタン
function pageTopFixedButton() {
  // ボタン消す
  $('.pagetop').hide();
  // スクロールしたらボタン現れる
  // 上に戻ったらボタン消える
  $(window).on('scroll' ,function () {
      if ($(this).scrollTop() > 200) {
          $('.pagetop').fadeIn();
      } else {
          $('.pagetop').fadeOut();
      }
      return false;
  });
}
// ページトップ追従ボタン
function pagetopButton() {
  var $pagetop      = $('.pagetop');
  var positionValue = $(window).scrollTop();
  var showPosition  = 300;
  var easing        = 'swing';
  var speed         = 1200;
  var pagetopVisible;
  if (positionValue > showPosition) {
    $pagetop.fadeIn();
  }
  $(window).scroll(function() {
    positionValue = $(window).scrollTop();
    pagetopVisible = $pagetop.is(':visible');
    if (positionValue > showPosition) {
      if (!pagetopVisible) {
        $pagetop.fadeIn();
      }
    } else {
      if (pagetopVisible) {
        $pagetop.fadeOut();
      }
    }
  });
  $pagetop.on('click', function(event) {
    $('html,body').animate({scrollTop:0}, speed, easing);
    event.preventDefault;
  });
}
//スマホとPCで画像入替え
function switchImage() {
  var wid = $(window).width();
  if (wid < 769) {
      $('img.switch').each(function () {
          $(this).attr("src", $(this).attr("src").replace('_PC', '_SP'));
      });
  }
}
//タブの切り替え
function switchTab() {
  let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
  $(".tab").on("click", function () { // tabをクリックしたらイベント発火
      $(".active").removeClass("active"); // activeクラスを消す
      $(this).addClass("active"); // クリックした箇所にactiveクラスを追加
      const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
      $(".content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
  });
}
//ポップアップ
function modalPopup() {
  $('.js-modal-open').each(function () {
      $(this).on('click', function () {
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          $("html, body").addClass('active');
          return false;
      });
  });
  $('.js-modal-close').on('click', function () {
      $('.js-modal').fadeOut();
      $("html, body").removeClass('active');
      return false;
  });
}