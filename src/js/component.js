$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  if ($(window).width() < 1200) {
    $('.marquee').marquee({
      duration: 7500,
      startVisible: true,
      duplicated: true
    });
    $('.menu li a').click(function () {
      $('.menu,  .nav .callme-btn').hide('200')
    })
    
    $('.section_1-slider_mob').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      customPaging: function (slick, index) {
        return '<a>0' + (index + 1) + '</a>';
      }
    })
  }

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 10
    }, 1500);

  });


  $('.line, .section_2-bottom').addClass("invisible").viewportChecker({
    classToAdd: 'visible  ', // Class to add to the elements when they are visible
    offset: 0
  });

  setInterval(function () {
    $('.toogleActive').toggleClass('active');
  }, 2000);


  $('.partners-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="prev "><svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.85355 0.146447C5.04882 0.341709 5.04882 0.658291 4.85355 0.853553L1.20711 4.5L4.85355 8.14645C5.04882 8.34171 5.04882 8.65829 4.85355 8.85355C4.65829 9.04882 4.34171 9.04882 4.14645 8.85355L0.146446 4.85355C-0.0488159 4.65829 -0.0488159 4.34171 0.146447 4.14645L4.14645 0.146447C4.34171 -0.0488156 4.65829 -0.0488156 4.85355 0.146447Z" fill="#2D83FF"/></svg></div>',
    nextArrow: '<div class="next "><svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.146447 8.85355C-0.0488155 8.65829 -0.0488155 8.34171 0.146447 8.14645L3.79289 4.5L0.146448 0.853553C-0.0488145 0.658291 -0.0488144 0.341709 0.146448 0.146446C0.34171 -0.0488157 0.658292 -0.0488156 0.853555 0.146446L4.85355 4.14645C5.04882 4.34171 5.04882 4.65829 4.85355 4.85355L0.853553 8.85355C0.658291 9.04882 0.341709 9.04882 0.146447 8.85355Z" fill="#2D83FF"/></svg></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
    },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.faq-item .title').click(function () {
    $(this).toggleClass('active');

    $(this).parent().find('.more').slideToggle('300');
  })

  /* form valid*/
  var alertImage = '<svg style="width: 20px; position:absolute;top: 50%;transform: translateY(-50%); right: 23px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';
  var error;
  $('.submit').click(function (e) {
    e.preventDefault();
    var ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      if ($(this).val() == '') {
        var errorfield = $(this);
        if ($(this).attr("type") == 'email') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test($(this).val())) {
            $("input[name=email]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else if ($(this).attr("type") == 'tel') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val())) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else {
          $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
          return false;
        }
        error = 1;
        return false;
      } else {
        error = 0;
        $(this).addClass('error').parent('.label').find('.allert').remove();
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
  $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
  $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
  $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
  $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
  $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
  $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
  $('input[name="user_agent"]').val(navigator.userAgent);
  $('input[name="ref"]').val(document.referrer);
  $('input[name="page_url"]').val(window.location);

  $.get("https://ipinfo.io", function (response) {
    $('input[name="ip_address"]').val(response.ip);
    $('input[name="city"]').val(response.city);
    $('input[name="country"]').val(response.country);
    $('input[name="region"]').val(response.region);
  }, "jsonp");

  $('input[name="phone"]').inputmask("+38(099) 99 999 99");

  function readCookie(name) {
    var n = name + "=";
    var cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
      var c = cookie[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(n) == 0) {
        return c.substring(n.length, c.length);
      }
    }
    return null;
  }
  setTimeout(function () {
    $('.gclid_field').val(readCookie('gclid'));
    if ($('.gclid_field').val() == '') {
      $('.gclid_field').val(readCookie('_gid'));
    }
  }, 2000);




  $('form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);



    $.ajax({
      type: 'POST',
      url: 'mail.php',
      dataType: 'json',
      data: $form.serialize(),
      success: function (response) {}
    });


    setTimeout(function () {
      window.location.href = "success.html";
    }, 1000);

  });


  $('a.order-btn, a.callme-btn').click(function () {
    $('#reg .title').text($(this).data('title'))
    $('#reg p').text($(this).data('content'))
    $('#reg button').text($(this).text())
  })

  $('#nav-icon').click(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu, .nav .callme-btn').slideToggle(200);
  });

  $('.menu').hover(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));

    })
  })

  var observer = lozad();
  observer.observe();

});