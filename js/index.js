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
          const text = $(this).find('.text').text()
          const tool = $(this).find('h3').text()
          const toolHTML = $(this).find('.tool').html();
        //   const imglink1 = $(this).find('.pr').attr('src')
        //   const imglink2 = $(this).find('.ae').attr('src')
        //   const imglink3 = $(this).find('.ai').attr('src')
        //   const imglink4 = $(this).find('.ps').attr('src')
        //   const imglink5 = $(this).find('.ru').attr('src')
        //   const imglink6 = $(this).find('.ha').attr('src')
        //   const imglink7 = $(this).find('.mi').attr('src')
        //   const imglink8 = $(this).find('.na').attr('src')
        //   const imglink9 = $(this).find('.bl').attr('src')
        //   const imglink10 = $(this).find('.su').attr('src')
        //   const imglink11 = $(this).find('.ty').attr('src')
          const videolink = $(this).find('iframe').attr('src')

          $('.popup').find('h2').text(title)
          $('.popup').find('p').text(text)
          $('.popup').find('h3').text(tool)
          $('.popup').find('.tool').html(toolHTML)
        //   $('.popup').find('.pr').attr('src',imglink1)
        //   $('.popup').find('.ae').attr('src',imglink2)
        //   $('.popup').find('.ai').attr('src',imglink3)
        //   $('.popup').find('.ps').attr('src',imglink4)
        //   $('.popup').find('.ru').attr('src',imglink5)
        //   $('.popup').find('.ha').attr('src',imglink6)
        //   $('.popup').find('.mi').attr('src',imglink7)
        //   $('.popup').find('.na').attr('src',imglink8)
        //   $('.popup').find('.bl').attr('src',imglink9)
        //   $('.popup').find('.su').attr('src',imglink10)
        //   $('.popup').find('.ty').attr('src',imglink11)
          $('.popup').addClass('on')
      })
  })
  $('.popup button').click(function () {
      $('.popup').removeClass('on')
  })
})