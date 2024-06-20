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
 



//customize slider
const swiper = new Swiper('.customize-swiper', {
    direction: 'horizontal',
    loop: false,  
    slidesPerView: 3,
    spaceBetween: 30, 
    speed:800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//The code updates a player's profile page based on the 'id' in the URL, displaying the player's name, role, image, and description.
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




// The code updates a product page based on the 'id' in the URL, displaying the product's name, price, image, and description. 
// If the product is not found, it shows a 'Player Not Found' message.

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const products = {
    1: {
        name: '3-Piece Gameling Utensil Set',
        price: '$19.99 USD',
        image: './images/products-img/1.png',
        description: 'Detailed description of the 3-Piece Gameling Utensil Set.'
    },
    2: {
        name: 'Wall Top Tshirt Frame',
        price: '$19.99 USD',
        image: './images/products-img/2.png',
        description: 'Detailed description of the Wall Top Tshirt Frame.'
    },
    3: {
        name: 'Drawer Unit On Casters',
        price: '$19.99 USD',
        image: './images/products-img/3.png',
        description: 'Detailed description of the Drawer Unit On Casters.'
    },
    4: {
        name: 'Wall Changing Table Mount',
        price: '$19.99 USD',
        image: './images/products-img/4.png',
        description: 'Detailed description of the Wall Changing Table Mount.'
    },
    5: {
        name: 'Intermedi Connect Cord',
        price: '$19.99 USD',
        image: './images/products-img/5.png',
        description: 'Detailed description of the Intermedi Connect Cord.'
    },
    6: {
        name: 'Duvet Cover And Pillowsham(s)',
        price: '$19.99 USD',
        image: './images/products-img/6.png',
        description: 'Detailed description of the Duvet Cover And Pillowsham(s).'
    }
};

if (products[productId]) {
    const product = products[productId];
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-name-breadcrumb').innerText = product.name;
}else {
    document.getElementById('playerName').innerText = 'Player Not Found';
}



// tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("product-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function () {
    var activeTab = document.querySelector('.product-button.active');
    if (activeTab) {
        activeTab.click();
    }
});
