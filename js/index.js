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

  $('.portfolio-item').click(function () {

    const id = $(this).data('id');
    const data = portfolioData[id];
  
    $('#modalText').html(data.text);
  
    /* 이미지 초기화 */
    $('#modalImages').html("");
  
    if (data.type === "video") {
  
      data.videos.forEach(video => {
  
        const box = `
          <div class="video-box">
            <h3>${video.title}</h3>
  
            <video autoplay muted loop playsinline>
              <source src="${video.src}" type="video/mp4">
            </video>
  
          </div>
        `;
  
        $('#modalImages').append(box);
      });
  
    } else {
  
      data.images.forEach(src => {
        $('#modalImages').append(`<img src="${src}">`);
      });
  
    }
  
    /* tools */
    $('#modalTools').html("");
    data.tools.forEach(tool => {
      $('#modalTools').append(`<img src="${tool}">`);
    });
  
    $('#portfolioModal').fadeIn();
    $('body').css('overflow', 'hidden');
  });
  
  
  /* ===== 닫기 (완전 수정 버전) ===== */
  function stopVideos() {
    $('#modalImages video').each(function () {
      this.pause();
      this.currentTime = 0;
    });
  }
  
  $('.close-btn, #portfolioModal').click(function (e) {
    if (e.target !== this) return;
  
    $('#portfolioModal').fadeOut();
    $('body').css('overflow', 'auto');
  
    stopVideos();
    $('#modalImages').html("");
  });

})