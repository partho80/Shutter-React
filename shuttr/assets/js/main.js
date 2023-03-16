(function ($) {
  "use strict";

  $(window).on('load', function () {


    /*---------------------
      Mobile Menu Dropdown Expand
      --------------------- */

      $('li.nav-item.dropdown').append('<span class="expandMobileSubmenu"></span>');

      $('span.expandMobileSubmenu').on('click', function(){
        $(this).siblings('ul.dropdown-menu').toggleClass('showSub');
      });

    /*---------------------
      magnific popup
      --------------------- */
    $('.photo-click').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /*---------------------
      Shop page dynamic
      --------------------- */
    $(".without-sidebar").on('click', function () {
      $('.shop-sidebar-wrapper').hide(500);
      $('.shop-right-side-wrapper').removeClass('col-lg-8', {
        duration: 500
      });
      $('.without-sidebar').addClass('active', {
        duration: 500
      });
      $('.with-sidebar').removeClass('active', {
        duration: 500
      });
      $('.shop-section .single-product').addClass('col-lg-4 col-sm-6', {
        duration: 500
      });
    });

    $(".with-sidebar").on('click', function () {
      $('.shop-sidebar-wrapper').show(500);
      $('.shop-right-side-wrapper').removeClass('col-lg-8', {
        duration: 500
      });
      $('.shop-right-side-wrapper').addClass('col-lg-8 col-md-12', {
        duration: 500
      });
      $('.with-sidebar').addClass('active', {
        duration: 500
      });
      $('.without-sidebar').removeClass('active', {
        duration: 500
      });
      $('.shop-section .single-product').removeClass('col-lg-4 col-sm-6', {
        duration: 500
      });
    });

    /*---------------------
      Search Features
      --------------------- */
    // Search Button
    $(".btn-search").on('click', function () {
      $('.input-search-box').toggleClass('input-search');
    });

    // Search Input
    $("#clickme").on('click', function () {
      $("#book").toggle("slow", function () {
        // Animation complete.
      });
    });


    /*---------------------
      Elivated Zoom
      --------------------- */
    $("#elivateMain").elevateZoom({
      gallery: 'thumb-img',
      zoomType: "inner",
      cursor: "crosshair",
    });



    /*---------------------
      scroll to top
      --------------------- */
    $('body').materialScrollTop();


    /*---------------------
      elivare slider
      --------------------- */

    $('.elivate-slider').slick({
      speed: 600,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    });


    /*---------------------
      Hero-slider
      --------------------- */

    $('.hero-slider').slick({
      infinite: true,
      autoplay: true,
      speed: 2000,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,

    });

    /*---------------------
    Trending-slider
    --------------------- */
    $('.trending-slider').slick({
      infinite: false,
      speed: 600,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });


    /*---------------------
      Instagram Slider
      --------------------- */
    $('.insta-slider').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 7,
      arrows: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


  });

  /*---------------------
     Price Filtering
     --------------------- */
  $(window).on('load', function () {

    $('#price-range-submit').hide();

    $("#min_price,#max_price").on('change', function () {

      $('#price-range-submit').show();

      var min_price_range = parseInt($("#min_price").val());

      var max_price_range = parseInt($("#max_price").val());

      if (min_price_range > max_price_range) {
        $('#max_price').val(min_price_range);
      }

      $("#slider-range").slider({
        values: [min_price_range, max_price_range]
      });

    });


    $("#min_price,#max_price").on("paste keyup", function () {
      $('#price-range-submit').show();
      var min_price_range = parseInt($("#min_price").val());
      var max_price_range = parseInt($("#max_price").val());

      if (min_price_range == max_price_range) {
        max_price_range = min_price_range + 100;
        $("#min_price").val(min_price_range);
        $("#max_price").val(max_price_range);
      }

      $("#slider-range").slider({
        values: [min_price_range, max_price_range]
      });

    });


    $(function () {
      $("#slider-range").slider({
        range: true,
        orientation: "horizontal",
        min: 0,
        max: 10000,
        values: [0, 10000],
        step: 100,
        slide: function (event, ui) {
          if (ui.values[0] == ui.values[1]) {
            return false;
          }
          $("#min_price").val(ui.values[0]);
          $("#max_price").val(ui.values[1]);
        }
      });

      $("#min_price").val($("#slider-range").slider("values", 0));
      $("#max_price").val($("#slider-range").slider("values", 1));

    });

    $("#slider-range,#price-range-submit").click(function () {
      var min_price = $('#min_price').val();
      var max_price = $('#max_price').val();
      $("#searchResults").text("Here List of products will be shown which are cost between " + "$" + +min_price + " " + "and" + " $" + max_price + ".");
    });

  });


  /*---------------------
    Cart Button Increment Decrement
     --------------------- */
  $('.input-number-increment').on('click', function () {
    add();
  });

  $('.input-number-decrement').on('click', function () {
    subst();
  });

  function add() {
    var a = $(".demoInput").val();
    a++;
    if (a >= 1) {
      $(".input-number-decrement").removeAttr("disabled");
    }
    $(".demoInput").val(a);
  }

  function subst() {
    var b = $(".demoInput").val();
    if (b.length > 0 && b >= 1) {
      b--;
      $(".demoInput").val(b);
    } else {
      $(".input-number-decrement").attr("disabled", "disabled");

    }
  };

  /*---------------------
     Shuffle Activation
    --------------------- */
  $(window).on('load', function (e) {

    if ($('body').find('.portfolio-shuffle').length !== 0) {
      var Shuffle = window.Shuffle;
      var jQuery = window.jQuery;
      var portFolioShuffle = new Shuffle(document.querySelector('.portfolio-shuffle'), {
        itemSelector: '.single-shuffle',
        sizer: '.Ssizer-element',
        buffer: 1,
      });
      jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
          portFolioShuffle.filter(input.value);
        }
      });
    }

  });




  /*---------------------
     Contact Form
    --------------------- */
  if ($('body').find('.contact-form').length !== 0) {
    // Form 1
    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function () {

      var firstName = $('#firstName').val();
      var email = $('#email').val();
      var subjectName = $('#subjectName').val();
      var msg = $('#msg').val();
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!regex.test(email)) {
        alert('Please enter valid email');
        return false;
      }

      firstName = $.trim(firstName);
      subjectName = $.trim(subjectName);
      email = $.trim(email);
      msg = $.trim(msg);

      if (firstName != '' && email != '' && msg != '') {
        var values = "firstName=" + firstName + "&subjectName=" + subjectName + "&email=" + email + " &msg=" + msg;
        $.ajax({
          type: "POST",
          url: "assets/php/mail.php",
          data: values,
          success: function () {
            $('#firstName').val('');
            $('#subjectName').val('');
            $('#email').val('');
            $('#msg').val('');

            $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
            setTimeout(function () {
              $('.cf-msg').fadeOut('slow');
            }, 4000);
          }
        });
      } else {
        $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
      }
      return false;
    });

  }


}(jQuery));