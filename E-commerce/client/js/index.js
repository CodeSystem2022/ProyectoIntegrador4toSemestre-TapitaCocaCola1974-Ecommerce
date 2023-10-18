const shopContent = document.getElementById("shopContent");
const shopContent2 = document.getElementById("shopContent2");
const cart = [];


// primera seccion
productos.forEach((product) => {
    const content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p class="price">${product.price} $</p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";

    content.append(buyButton);

    buyButton.addEventListener("click", () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            cart.map((prod) => {
                if (prod.id == product.id) {
                    prod.quanty++;
                    displayCartCounter();
                }
            });
        } else {
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: product.quanty,
                img: product.img,
            });
            displayCartCounter();
        }

    });
});

// segunda seccion
productos2.forEach((product) => {
    const content2 = document.createElement("div");
    content2.className = "card2";
    content2.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p class="price">${product.price} $</p>
    `;
    shopContent2.append(content2);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";

    content2.append(buyButton);

    buyButton.addEventListener("click", () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            cart.map((prod) => {
                if (prod.id == product.id) {
                    prod.quanty++;
                    displayCartCounter();
                }
            });
        } else {
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: product.quanty,
                img: product.img,
            });
            displayCartCounter();
        }

    });
});
   
// tercera seccion
productos3.forEach((product) => {
    const content3 = document.createElement("div");
    content3.className = "card2";
    content3.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p class="price">${product.price} $</p>
    `;
    shopContent3.append(content3);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";

    content3.append(buyButton);

    buyButton.addEventListener("click", () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            cart.map((prod) => {
                if (prod.id == product.id) {
                    prod.quanty++;
                    displayCartCounter();
                }
            });
        } else {
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: product.quanty,
                img: product.img,
            });
            displayCartCounter();
        }

    });
});
console.log(cart);



            
    


           


   