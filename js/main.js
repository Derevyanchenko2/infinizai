// burger-menu
document.querySelector(".open-menu-js").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.add("open");
  document.body.style.overflowX = "hidden";
});

document.querySelector(".mobileMenu-close").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflowX = "auto";
});

//change color when scrolling
let header = document.querySelector(".header");
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.style.background = "#1A1A1A";
    } else {
        header.style.background = "transparent";
    }
});


// modal window
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myModal').style.display = "none";
  
  var playIcon = document.getElementById('playIcon');
  var closeModal = document.getElementById('closeModal');
  var myModal = document.getElementById('myModal');
  var videoIframe = document.getElementById('videoIframe');

  playIcon.onclick = function() {
      console.log('Play icon clicked');
      myModal.style.display = "flex";
      videoIframe.src = "https://www.youtube.com/embed/NWcmKxBHDFQ";
  };

  closeModal.onclick = function() {
      myModal.style.display = "none";
      videoIframe.src = "";
  };

  window.onclick = function(event) {
      if (event.target == myModal) {
          myModal.style.display = "none";
          videoIframe.src = "";
      }
  };
});
 



// slider
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.customize-swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30, 
      speed:800,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });
});