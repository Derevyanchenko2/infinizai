// burger-menu
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileMenuOverlay = document.querySelector('.mobileMenu-overlay');
    const closeBtn = document.querySelector('.mobileMenu-close');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    const toggleMobileMenu = () => {
        mobileMenuOverlay.classList.toggle('open');
    };

    const closeMobileMenu = () => {
        mobileMenuOverlay.classList.remove('open');
    };

    const toggleDropdown = (event) => {
        event.preventDefault();
        event.currentTarget.closest('.dropdown').classList.toggle('open');
    };

    const closeAllDropdowns = () => {
        dropdownToggles.forEach(toggle => {
            toggle.closest('.dropdown').classList.remove('open');
        });
    };

    burger.addEventListener('click', toggleMobileMenu);
    closeBtn.addEventListener('click', closeMobileMenu);

    document.addEventListener('click', (event) => {
        if (!mobileMenuOverlay.contains(event.target) && !burger.contains(event.target)) {
            closeMobileMenu();
        }

        if (!event.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleDropdown);
    });
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

// 
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const playerId = params.get('id');
    
    const players = {
        1: {
            name: 'Esther Howard',
            role: 'Striker',
            image: './images/team-img/1.png',
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,'
            ]
        },
        2: {
            name: 'Darrell Steward',
            role: 'Striker',
            image: './images/team-img/2.png',
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,'
            ]
        },
        3: {
            name: 'Jacob Jones',
            role: 'Striker',
            image: './images/team-img/3.png',
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,'
            ]
        },
        4: {
            name: 'Marvin McKinney',
            role: 'Striker',
            image: './images/team-img/4.png',
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,'
            ]
        },
        5: {
            name: 'Savannah Nguyen',
            role: 'Striker',
            image: './images/team-img/5.png',
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,'
            ]
        },
        6: {
            name: 'Kathryn Murphy',
            role: 'Striker',
            image: './images/team-img/6.png',
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,'
            ]
        },
        7: {
            name: 'Leslie Alexander',
            role: 'Striker',
            image: './images/team-img/7.png',
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,'
            ]
        }
    };

    const player = players[playerId];
    if (player) {
        document.getElementById('playerName').innerText = player.name;
        document.getElementById('playerRole').innerText = player.role;
        document.getElementById('playerImage').src = player.image;
        const playerDescriptionElement = document.getElementById('playerDescription');
        player.description.forEach(text => {
            const p = document.createElement('p');
            p.classList.add('player-text');
            p.innerText = text;
            playerDescriptionElement.appendChild(p);
        });
    } else {
        document.getElementById('playerName').innerText = 'Player Not Found';
    }
});



document.querySelector('.contact-form').addEventListener('submit', function(event) {
    let isValid = true;

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (firstName.value.trim() === '') {
        isValid = false;
        alert('First Name is required');
    }

    if (lastName.value.trim() === '') {
        isValid = false;
        alert('Last Name is required');
    }

    if (email.value.trim() === '') {
        isValid = false;
        alert('Email Address is required');
    } else if (!validateEmail(email.value)) {
        isValid = false;
        alert('Please enter a valid email address');
    }

    if (message.value.trim() === '') {
        isValid = false;
        alert('Message is required');
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
