$(function () {
  // one scroll
  $('header ul li').click(function () {
      $('header ul li').removeClass('on')
      $(this).addClass('on')
      let idx = $(this).index()
      console.log(idx)

      let sd = $('main section').eq(idx).offset().top - 80
      $('html,body').animate({
          scrollTop: sd
      },1500)
  })
  $('#contact-btn').click(function () {
    let sd = $('#contact').offset().top - 80

    $('html,body').animate({
      scrollTop: sd
    }, 1500)
  })
  $(window).scroll(function () {
      $('main section').each(function () {
          if ($(this).offset().top <= $(window).scrollTop() + 114) {
              let idx = $(this).index()
              $('header ul li').removeClass('on')
              $('header ul li').eq(idx).addClass('on')
          }
      })
  })
  
  // gotop
  $(window).scroll(function () {
      if ($(window).scrollTop() >= 300) {
          $('.gotop').fadeIn()
      } else {
          $('.gotop').fadeOut()
      }
  })
  $('.gotop').click(function (e) {
      e.preventDefault()
      $('html,body').animate({
          scrollTop: 0,
      }, 2000)
  })

  //popup
  $('.portfolio-item').each(function (index, el) {
      $(el).click(function () {
          const title = $(this).find('h2').text()
          const text = $(this).find('.text').html()
          const tool = $(this).find('h3').text()
          const toolHTML = $(this).find('.tool').html();
          const videolink = $(this).find('iframe').attr('src')

          $('.popup').find('iframe').attr('src', videolink)
          $('.popup').find('h2').text(title)
          $('.popup').find('p').html(text)
          $('.popup').find('h3').text(tool)
          $('.popup').find('.tool').html(toolHTML)
        //   $('.popup').find('iframe').attr('src', videolink)
          $('.popup').addClass('on')
      })
  })
//   $('.popup button').click(function () {
//       $('.popup').removeClass('on')
//   })
  $('.popup button').click(function () {
    $('.popup').removeClass('on')
    $('.popup iframe').attr('src', '')
})
})