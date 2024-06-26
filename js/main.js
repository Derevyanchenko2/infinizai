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

// Correct product script
document.addEventListener('DOMContentLoaded', function() {
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
    } else {
        document.getElementById('product-name').innerText = 'Product Not Found';
        document.getElementById('product-price').innerText = '';
        document.getElementById('product-image').src = '';
        document.getElementById('product-description').innerText = '';
        document.getElementById('product-name-breadcrumb').innerText = '';
    }
});

// Tabs script
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

// Correct article script
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    const articles = {
        1: {
            title: 'Esports Group teams up with the Indianapolis Colts',
            date: 'April 2, 2021',
            image: './images/news-img/1.png',
            content: 'Detailed content of the Esports Group teams up with the Indianapolis Colts.'
        },
        2: {
            title: 'NAVI reveals s1mple fifth anniversary',
            date: 'April 2, 2021',
            image: './images/news-img/2.png',
            content: 'Detailed content of the NAVI reveals s1mple fifth anniversary.'
        },
        3: {
            title: 'A1esports Shares new picture',
            date: 'April 2, 2021',
            image: './images/news-img/3.png',
            content: 'Detailed content of the A1esports Shares new picture.'
        },
        4: {
            title: 'T1 unveil partnership with Razer',
            date: 'April 2, 2021',
            image: './images/news-img/4.png',
            content: 'Detailed content of the T1 unveil partnership with Razer.'
        },
        5: {
            title: 'RX secures content partnership with',
            date: 'April 2, 2021',
            image: './images/news-img/5.png',
            content: 'Detailed content of the RX secures content partnership with.'
        }
    };

    if (articles[articleId]) {
        const article = articles[articleId];
        document.getElementById('article-title').innerText = article.title;
        document.getElementById('article-date').innerText = article.date;
        document.getElementById('article-image').src = article.image;
        document.getElementById('article-content-text').innerText = article.content;
    } else {
        document.getElementById('article-title').innerText = 'Article Not Found';
        document.getElementById('article-date').innerText = '';
        document.getElementById('article-image').src = '';
        document.getElementById('article-content-text').innerText = '';
    }
};

// adding item to cart
document.addEventListener("DOMContentLoaded", function () {
    const cart = document.querySelector('.cart');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const basketNum = document.querySelector('.basket-num');
    const cartItems = document.querySelector('.cart-items');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartFooter = document.querySelector('.cart-footer');

    let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    updateCartDisplay();

    // Toggle cart visibility
    function toggleCart() {
        cart.classList.toggle('open');
    }

    // Close the cart
    function closeCart() {
        cart.classList.remove('open');
    }

    // Add item to cart
    function addToCart(event) {
        event.preventDefault();
        const productName = document.getElementById('product-name').textContent;
        const productPrice = document.getElementById('product-price').textContent;
        const productSize = document.getElementById('size').value;
        const productQuantity = parseInt(document.getElementById('quantity').value);
        const productImageSrc = document.getElementById('product-image').src;

        if (!productSize) {
            alert('Please select a size');
            return;
        }

        const existingItem = cartData.find(item => item.name === productName && item.size === productSize);

        if (existingItem) {
            existingItem.quantity += productQuantity;
        } else {
            const newItem = { name: productName, price: productPrice, size: productSize, quantity: productQuantity, imageSrc: productImageSrc };
            cartData.push(newItem);
        }

        localStorage.setItem('cartData', JSON.stringify(cartData));
        updateCartDisplay();
    }

    // Update cart display
    function updateCartDisplay() {
        cartItems.innerHTML = cartData.length === 0 ? '<div class="empty-cart-message">No items found.</div>' : '';
        cartFooter.style.display = cartData.length === 0 ? 'none' : 'flex';
        let totalQuantity = 0, totalPrice = 0;

        cartData.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.price}</div>
                    <div class="item-size">Size: ${item.size}</div>
                    <div class="item-quantity">Quantity: ${item.quantity}</div>
                    <button class="cart-item-remove">Remove</button>
                </div>
            `;
            itemElement.querySelector('.cart-item-remove').addEventListener('click', () => {
                cartData = cartData.filter(cartItem => cartItem !== item);
                localStorage.setItem('cartData', JSON.stringify(cartData));
                updateCartDisplay();
            });
            cartItems.appendChild(itemElement);
            totalQuantity += item.quantity;
            totalPrice += parseFloat(item.price.replace('$', '')) * item.quantity;
        });

        basketNum.textContent = totalQuantity;
        document.querySelector('.total-price').textContent = `$${totalPrice.toFixed(2)} USD`;
    }

    // Event listeners
    document.querySelectorAll('.product-form').forEach(form => form.addEventListener('submit', addToCart));
    cartWrapper.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', closeCart);
    cart.classList.remove('open');
});
