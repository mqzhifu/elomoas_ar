<template>

<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
  <div v-if="token" >

    <div class="preloader"></div>
    <div class="main-wrapper">
      <v-left></v-left>
      <!-- main content -->
      <div class="main-content">
        <v-header></v-header>
        <div class="middle-sidebar-bottom">
<!--          <div class="middle-sidebar-bottom bg-lightblue theme-dark-bg">-->
            <router-view />
        </div>
      </div>
      <!-- main content -->
      <v-footer></v-footer>

    </div>

  </div>

  <div v-if="!token">
    <v-login></v-login>

  </div>

</template>

<script>

import {useStore} from "vuex";

console.log("in App.vue")

export default {
  name: "Vue",
  data:function (){
    return {"token":this.$TokenManager.Get()}
  },
  created() {
    // alert(this.$TokenManager.Get());
    // globalToken = this.$TokenManager.Get();
  },
  mounted() {
    // alert(this.$TokenManager.Get());
  },
};


$(document).ready(function() {
  "use strict";

  PageScroll();


  // Loading Box (Preloader)
  function handlePreloader() {
    $( window ).on( "load", function() {
      setInterval(function(){
        $('.preloader').fadeOut(300);
      }, 400);
      setInterval(function(){
        $('body').addClass('loaded');
      }, 600);
    });
  }

  handlePreloader();


  $('.add-wishlist').on('click', function() {
    $(this).toggleClass('bg-greylight bg-danger');
    $(this).find('i').toggleClass('text-grey-900 text-white')
    return false;
  });

  $('.question-div .question-ans').on('click', function() {
    $('.question-ans').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.question-div .question-ans').on('click', function() {
    $('.question-ans').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.next-bttn').on('click', function() {
    var next_bttn_id =  $(this).attr('data-question');
    $('.question-div .card-body').fadeOut(0);
    $('.question-div #'+next_bttn_id ).fadeIn(500);
    // alert(next_bttn_id);
    // $(this).addClass('active');
    return false;
  });


  // $('.right-menu-icon li a i').on('click', function() {
  //     $('this')removeClass('active');
  //     $(this).parent().toggleClass("active");
  //     return false;
  // });



  $('.menu-search-icon').on('click', function() {
    $('.app-header-search').addClass('show');
  });
  $('.searchbox-close').on('click', function() {
    $('.app-header-search').removeClass('show');
  });



  $('.switchcolor').on('click', function() {
    $(this).addClass('active');
    $('.backdrop').addClass('active');
    $('.switchcolor-wrap').addClass('active');
  });

  $('.sheet-close,.backdrop').on('click', function() {
    $('.switchcolor').removeClass('active');
    $('.backdrop').removeClass('active');
    $('.switchcolor-wrap').removeClass('active');
  });

  $('#darkmodeswitch').on('change', function () {
    if (this.checked) {
      $('body').addClass('theme-dark');
    } else {
      $('body').removeClass('theme-dark');
    }
  });

  $('.sidebar-right,.sidebar-layer').on('click', function() {
    $('.middle-sidebar-right').toggleClass('active-sidebar');
    $(this).find('i').toggleClass('ti-angle-left ti-angle-right');
    return false;
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
      $('.scroll-header').addClass('bg-white shadow-xss');
    } else {
      $('.scroll-header').removeClass('bg-white shadow-xss');
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
      $('.middle-sidebar-header').addClass('scroll');
    } else {
      $('.middle-sidebar-header').removeClass('scroll');
    }
  });


  $('.header-menu').on('click', function () {
    // $(this).toggleClass('active');
    $('.navigation').addClass('nav-active');
  });

  $('.close-nav').on('click', function () {
    $('.navigation').removeClass('nav-active');
    return false;
  });


  $('.toggle-menu-color input').on('change', function () {
    if (this.checked) {
      $('.navigation').addClass('menu-current-color');
    } else {
      $('.navigation').removeClass('menu-current-color');
    }
  });

  $('.toggle-menu input').on('change', function () {
    if (this.checked) {
      $('.navigation,.main-content').addClass('menu-active');
    } else {
      $('.navigation,.main-content').removeClass('menu-active');
    }
  });

  $('.toggle-screen input').on('change', function () {
    if (this.checked) {
      $('body').addClass('theme-full');
    } else {
      $('body').removeClass('theme-full');
    }
  });
  $('.toggle-sticky input').on('change', function () {
    if (this.checked) {
      $('.middle-sidebar-header').addClass('sticky-header');
      $('.middle-sidebar-bottom').addClass('header-padding');

    } else {
      $('.middle-sidebar-header').removeClass('sticky-header');
      $('.middle-sidebar-bottom').removeClass('header-padding');
    }
  });


  $('.toggle-dark input').on('change', function () {
    if (this.checked) {
      $('body').addClass('theme-dark');
    } else {
      $('body').removeClass('theme-dark');
    }
  });

  $('input[name="color-radio"]').on('change', function () {
    if (this.checked) {
      $('body').removeClass('color-theme-teal color-theme-cadetblue color-theme-pink color-theme-deepblue color-theme-blue color-theme-red color-theme-black color-theme-gray color-theme-orange color-theme-yellow color-theme-green color-theme-white color-theme-brown color-theme-darkgreen color-theme-deeppink color-theme-darkorchid');
      $('body').addClass('color-theme-' + $(this).val());
    }
  });



});





function PageScroll() {
  $(".scroll-tiger").on("click", function(e) {
    var $anchor = $(this);
    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top - 0
    }, 1500, 'easeInOutExpo');
    $('.overlay-section').removeClass('active');
    e.preventDefault();

  });
}

</script>

<style>
/*<link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">*/
@import "assets/css/themify-icons.css";
@import "assets/css/feather.css";
@import "assets/css/style.css";

/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*nav {*/
/*  padding: 30px;*/
/*}*/

/*nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>