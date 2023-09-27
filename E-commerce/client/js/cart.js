// cart.js

// Load cart from local storage
function loadCartFromLocalStorage() {
    const cartString = localStorage.getItem('cart');
    return JSON.parse(cartString) || [];
  }
  
  // Save cart to local storage
  function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Initialize cart on page load
  window.addEventListener('load', () => {
    cart = loadCartFromLocalStorage();
    console.log('Cart loaded from local storage:', cart);
    displayCart(); // Display the cart on page load
  });
  
  // Function to update the cart
  function updateCart(newCart) {
    console.log('Updating cart:', newCart);
    cart = newCart;
    saveCartToLocalStorage();
    displayCart(); // Display the updated cart
    displayCartCounter();
  }
  
  const modalContainer = document.getElementById("modal-container");
  const modalOverlay = document.getElementById("modal-overlay");
  
  const cartBtn = document.getElementById("cart-btn");
  const cartCounter = document.getElementById("cart-counter");
  
  const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    //modal header
    const modalHeader = document.createElement("div");
  
    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);
  
    modalClose.addEventListener("click", () => {
      modalContainer.style.display = "none";
      modalOverlay.style.display = "none";
    });
  
    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);
  
    modalContainer.append(modalHeader);
  
    // Modal Body
    if (cart.length > 0) {
      cart.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
          <div class="product">
              <img class="product-img" src="${product.img}" />
              <div class="product-info">
                  <h4>${product.productName}</h4>
              </div>
              <div class="quantity">
                  <span class="quantity-btn-decrease">-</span>
                  <span class="quantity-input">${product.quanty}</span>
                  <span class="quantity-btn-increase">+</span>
              </div>
              <div class="price">${product.price * product.quanty} $</div>
              <div class="delete-product">❌</div>
          </div>
          `;
        modalContainer.append(modalBody);
  
        const decrease = modalBody.querySelector(".quantity-btn-decrease");
        decrease.addEventListener("click", () => {
          if (product.quanty !== 1) {
            product.quanty--;
            updateCart(cart); // Use the updateCart function to ensure cart state is saved
          }
          displayCartCounter();
        });
  
        const increase = modalBody.querySelector(".quantity-btn-increase");
        increase.addEventListener("click", () => {
          product.quanty++;
          updateCart(cart); // Use the updateCart function to ensure cart state is saved
          displayCartCounter();
        });
  
        //delete
        const deleteProduct = modalBody.querySelector(".delete-product");
  
        deleteProduct.addEventListener("click", () => {
          deleteCartProduct(product.id);
        });
      });
  
      //modal footer
      const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
  
      const modalFooter = document.createElement("div");
      modalFooter.className = "modal-footer";
      modalFooter.innerHTML = `
      <div class="total-price">Total: ${total}</div>
      <button class="btn-primary" id="checkout-btn"> Pagar </button>
      <div id="button-checkout"></div>
      `;
      modalContainer.append(modalFooter);
  
      // mp;
      const mercadopago = new MercadoPago("TEST-091dee59-6e52-42d3-bb7e-f01374d4e045", {
        locale: "es-AR",
      });
  
      const checkoutButton = modalFooter.querySelector("#checkout-btn");
  
      checkoutButton.addEventListener("click", function () {
        checkoutButton.remove();
  
        const orderData = {
          quantity: 1,
          description: "compra de ecommerce",
          price: total,
        };
  
        fetch("http://localhost:8080/create_preference", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (preference) {
            createCheckoutButton(preference.id);
          })
          .catch(function () {
            alert("Unexpected error");
          });
      });
  
      function createCheckoutButton(preferenceId) {
        //inicializar checkout
        const bricksBuilder = mercadopago.bricks();
  
        const renderComponent = async (bricksBuilder) => {
          await bricksBuilder.create(
            "wallet",
            "button-checkout",
            {
              initialization: {
                preferenceId: preferenceId,
              },
              callbacks: {
                onError: (error) => console.error(error),
                onReady: () => {},
              },
            }
          );
        };
        window.checkoutButton = renderComponent(bricksBuilder);
      }
    } else {
      const modalText = document.createElement("h2");
      modalText.className = "modal-body";
      modalText.innerText = "Tu carro está vacío";
      modalContainer.append(modalText);
    }
  };
  
  cartBtn.addEventListener("click", displayCart);
  
  const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element) => element.id === id);
    cart.splice(foundId, 1);
    updateCart(cart); // Use the updateCart function to ensure cart state is saved
    displayCartCounter();
  };
  
  const displayCartCounter = () => {
    const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
    if (cartLength > 0) {
      cartCounter.style.display = "block";
      cartCounter.innerText = cartLength;
    } else {
      cartCounter.style.display = "none";
    }
  };