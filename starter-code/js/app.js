

const Menu = document.getElementById('menu');

Menu.addEventListener('click', () => {

    const showMenu = document.getElementById('showMenu');
    const backgroundBody = document.getElementById('backgroundBody');

    showMenu.classList.toggle('menu-active');
    backgroundBody.classList.toggle('background-body-active');
})


//const generalContainer = document.getElementById("generalContainer");
const product = document.querySelectorAll(".product");
product.forEach((product) => {
    product.addEventListener("click", (e) => {
        e.preventDefault();
        let item = e.target.innerText.toLowerCase();
        console.log(item, "this is the text");
        // fetchData(item)
        window.location.href = (`/starter-code/header.html?category=${item}`);
    });
});



const heroContainer = document.getElementById("heroContainer");
const productContainer = document.getElementById("productContainer")
const bodyContainer = document.getElementById("bodyContainer")
const imagesContainer = document.getElementById("imagesContainer");
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            console.log(link.href, "here href");
            event.preventDefault();
            let category = link.innerHTML.toLowerCase();
            fetchData(category)
            heroContainer.classList.add("hidden");
            bodyContainer.classList.add("hidden");
            imagesContainer.classList.add("hidden");
            productContainer.innerHTML = ''
        });
    });
});


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function fetchData(category) {
    return fetch("/starter-code/js/data.json")
        .then((response) => response.json())
        .then((data) => {

            if (category === "home") {
                heroContainer.classList.remove("hidden");
                bodyContainer.classList.remove("hidden");
                imagesContainer.classList.remove("hidden");
            } else {
                const items = data.filter(item => item.category === category || item.category == category.href);
                displayProducts(items);
            }

        });
}

function displayProducts(products) {
    if (products.length == 2) {
        buildHtmlSpeakers(products[0], products[1]);
    } else if (products.length >= 3) {
        buildHtmlHeadphones(products[0], products[1], products[2]);
    }
    else {
        buildHtmlEarphones(products[0]);
    }

}



function setupButtonEventHandlers(products) {
    document.querySelectorAll('.button-1-default').forEach(button => {
        button.addEventListener('click', function () {
            const items = products.filter(item => item.id == this.id);
            productContainer.innerHTML = ''
            ProductsDetail(items[0]);
        });
    });
}



function buildHtmlEarphones(products) {
    const html = `<div>
                      <div class="bg-black w-screen h-[400px] flex justify-center justify-items-center"><h1 class="text-center font-bold text-white text-[45px] m-auto">${products.category.toUpperCase()}<h1></div>
                          
                      <div class="max-w-[1200px] m-auto show-product">
                              <div class= "flex justify-center mx-auto my-40 w-full">
                                      <div class= "grid grid-cols-2 justify-center gap-20">
                                          <div id="containerInf" class="m-auto p-10">
                                                    <div class=""> <h1 class="text-[50px] font-bold m-0">${products.name}</h1></div>
                                                  <p class="text-[15px] font-semibold">${products.description
        }</p>
                                                <button class="button-1-default my-2 see-product" id="${products.id}">SEE PRODUCT</button>
                                          </div>
                        
                                          <div id="containerImage" class="m-auto">
                                              <img
                                                src="${products.image.desktop}"
                                                alt=""
                                                class="rounded-lg w-full h-full"
                                              />
                                          </div>
                                      </div>
                              </div>
                      </div>
                  <div>`;
    const element = htmlToElement(html);
    let items = [products]
    setupButtonEventHandlers(items);
    return element;
}

function buildHtmlSpeakers(products, productsTwo) {
    const html = `<div>
      <div class="bg-black w-screen h-[400px] flex justify-center justify-items-center"><h1 class="text-center font-bold text-white text-[45px] m-auto">${products.category.toUpperCase()}<h1></div>
      <div class="max-w-[1200px] m-auto show-product">
        
    
    
      <div class= "flex justify-center mx-auto my-40 w-full">
              <div class= "grid grid-cols-2 justify-center gap-20">
                  <div id="containerImage" class="m-auto">
                      <img
                        src="${productsTwo.image.desktop}"
                        alt=""
                        class="rounded-lg w-full h-full"
                      />
                  </div>
    
                  <div id="containerInf" class="m-auto p-10">
                          <h3 class="text-orange">NEW PRODUCT</h3>
                            <div class=""> <h1 class="text-[50px] font-bold m-0">${productsTwo.name}</h1></div>
                          <p class="text-[15px] font-semibold">${productsTwo.description
        }</p>
                        <button class="button-1-default my-2 see-product" id="${productsTwo.id}">SEE PRODUCT</button>
                  </div>
              </div>
      </div>
    
      <div class= "flex justify-center mx-auto my-40 w-full">
              <div class= "grid grid-cols-2 justify-center gap-20">
                  
    
                  <div id="containerInf" class="m-auto p-10">
                            <div class=""> <h1 class="text-[50px] font-bold m-0">${products.name}</h1></div>
                          <p class="text-[15px] font-semibold">${products.description
        }</p>
                        <button class="button-1-default my-2 see-product" id="${products.id}">SEE PRODUCT</button>
                  </div>
    
                  <div id="containerImage" class="m-auto">
                      <img
                        src="${products.image.desktop}"
                        alt=""
                        class="rounded-lg w-full h-full"
                      />
                  </div>
              </div>
      </div>
      </div>
      <div>`;
    const element = htmlToElement(html);
    let items = [products, productsTwo]
    setupButtonEventHandlers(items);
    return element;
}

function buildHtmlHeadphones(products, productsTwo, productsTree) {
    const html = `<div>
        <div class="bg-black w-screen h-[400px] flex justify-center justify-items-center"><h1 class="text-center font-bold text-white text-[45px] m-auto">${products.category.toUpperCase()}<h1></div>
        <div class="max-w-[1200px] m-auto show-product">
        
        <div class= "flex justify-center mx-auto my-40 w-full">
                <div class= "grid grid-cols-2 justify-center gap-20">
                        <div id="containerImage" class="m-auto">
                            <img
                            src="${productsTree.image.desktop}"
                            alt=""
                            class="rounded-lg w-full h-full"
                            />
                        </div>
    
                        <div id="containerInf" class="m-auto p-10">
                                <div class=""> <h1 class="text-[50px] font-bold m-0">${productsTree.name}</h1></div>
                                <p class="text-[15px] font-semibold">${productsTree.description}</p>
                            <button class="button-1-default my-2 see-product" id="${productsTree.id}">SEE PRODUCT</button>
                        </div>
                </div>
        </div>
          
        <div class= "flex justify-center mx-auto my-40 w-full">
                <div class= "grid grid-cols-2 justify-center gap-20">
                    <div id="containerInf" class="m-auto p-10">
                            <h3 class="text-orange">NEW PRODUCT</h3>
                              <div class=""> <h1 class="text-[50px] font-bold m-0">${productsTwo.name}</h1></div>
                            <p class="text-[15px] font-semibold">${productsTwo.description}</p>
                          <button class="button-1-default my-2 see-product" id="${productsTwo.id}">SEE PRODUCT</button>
                    </div>
                    <div id="containerImage" class="m-auto">
                        <img
                          src="${productsTwo.image.desktop}"
                          alt=""
                          class="rounded-lg w-full h-full"
                        />
                    </div>
                </div>
        </div>
    
        <div class= "flex justify-center mx-auto my-40 w-full">
                <div class= "grid grid-cols-2 justify-center gap-20">
                        <div id="containerImage" class="m-auto">
                            <img
                            src="${products.image.desktop}"
                            alt=""
                            class="rounded-lg w-full h-full"
                            />
                        </div>
    
                        <div id="containerInf" class="m-auto p-10">
                                <div class=""> <h1 class="text-[50px] font-bold m-0">${products.name}</h1></div>
                                <p class="text-[15px] font-semibold">${products.descriptio}</p>
                            <button class="button-1-default my-2 see-product" id="${products.id}">SEE PRODUCT</button>
                        </div>
                </div>
        </div>
        </div>
        <div>`;
    const element = htmlToElement(html);
    let items = [products, productsTwo, productsTree]
    setupButtonEventHandlers(items);
    //setupButtonEventHandlers()
    return element;
}

//this fuction is for product details

function ProductsDetail(products) {

    const html = `<div>
<div class="bg-black w-screen h-[100px] flex justify-center justify-items-center" ></div>

<div class="w-[90%] m-auto hidden-product-details">

<div class= "flex flex-col  w-full">
        <button class=' text-gray-400 text-start ml-[1rem] my-[2rem] prueba'>Go back</button>
        <div class= "grid grid-cols-1 md:grid-cols-2 justify-center gap-5 xl:gap-20">
                <div id="containerImage" class="m-auto ">
                   
                    <img
                    src="${products.image.desktop}"
                    alt=""
                    class="rounded-lg w-full h-full hidden xl:block"
                    />
                    <img
                    src="${products.image.tablet}"
                    alt=""
                    class="rounded-lg w-full h-full hidden md:block xl:hidden"
                    />

                    <img
                    src="${products.image.mobile}"
                    alt=""
                    class="rounded-lg w-full h-full block md:hidden"
                    />
                 
                </div>

                <div id="containerInf" class="m-auto  flex flex-col gap-10">
                <p class=' text-orange uppercase sans text-[1.2rem] tracking-[10px]'>new product</p>
                        <div class=""> <h1 class="text-[50px] font-bold m-0 w-[100px] leading-[50px] md:leading-[40px] ">${products.name}</h1>
                        </div>
                        <p class="text-[15px] font-thing sans text-gray-400 leading-[25px] ">${products.description}</p>

                        <div class=''>
                          <span class=" text-lg font-bold" > $ ${products.price}<span>
                        </div>

                        <div class='flex gap-[1rem]'>
                            <input type='number' value='0' class='w-[100px] bg-darkWhite py-[12px] text-center' id='input-amount'/>
                            <button class="button-1-default uppercase add-cart" id="${products.id} ">add to cart</button>
                        </div>
                  
                </div>
        </div>
</div>

<div class='w-[100%] flex my-[10rem]'>
    <div class=' flex flex-col xl:flex-row gap-[5rem] xl:gap-0 m-auto w-[100%] h-auto'>

        <div class='w-[100%] xl:w-[70%] '>
            <h2 class='text-[2rem] mb-[2rem] font-sans font-bold uppercase '>features</h2>
            <div class='w-[100%] xl:w-[80%]'>
                <p class='text-gray-400 '>${products.features}</p>
            </div>

        </div>

        <div class=' w-[100%] xl:w-[30%] flex flex-col  md:flex-row xl:flex-col gap-[3rem] md:gap-[10rem] xl:gap-0'>
            <h2 class='text-[2rem] mb-[2rem] font-sans font-bold uppercase '>in the box</h2>
            <div class='flex flex-col gap-3'>
                <div class='flex gap-8'>
                    <p class='text-orange font-bold'> X${products.includes[0].quantity}</p>
                    <p class='text-gray-400'>${products.includes[0].item}</p>
                </div>
                <div class='flex gap-8'>
                    <p class='text-orange font-bold'> X${products.includes[1].quantity}</p>
                    <p class='text-gray-400'>${products.includes[1].item}</p>
                </div>
                <div class='flex gap-8'>
                    <p class='text-orange font-bold'> X${products.includes[2].quantity}</p>
                    <p class='text-gray-400'>${products.includes[2].item}</p>
                </div>
                <div class='flex gap-8'>
                    <p class='text-orange font-bold'> X${products.includes[3].quantity}</p>
                    <p class='text-gray-400'>${products.includes[3].item}</p>
                </div>
            </div>
        </div>

    </div>
</div>

<div class='flex  justify-center   w-[100%] '>
    <div class='m-auto flex flex-col md:flex-row gap-5  '>
        <div class='flex flex-col gap-5 xl:gap-7 '>
        <img src=${products.gallery.first.mobile} alt='' class=' rounded-md'/>
        <img src=${products.gallery.second.mobile} alt='' class=' rounded-md'/>
        </div>

        <div>
        <img src=${products.gallery.third.mobile} alt='' class=' rounded-md'/>
        </div>
    </div>
   
</div>

<div class=' flex my-[5rem] '>
    <div class='m-auto '>
        <h2 class='text-center text-[2rem] font-bold uppercase mb-[3rem]'>you may also like</h2>
    <div class='flex flex-col md:flex-row gap-5 w-[100%]  '>
        <div>
            <img src=${products.others[0].image.desktop} alt='' class='w-[100%] rounded-md'/>
            <h3 class='text-[1.5rem] font-bold uppercase text-center my-[1rem]'>${products.others[0].name}</h3>
            <div class='flex'>
            <button class='button-1-default uppercase m-auto'>see product</button>
            </div>
        </div>

        <div>
            <img src=${products.others[1].image.desktop} alt='' class='w-[100%] rounded-md'/>
            <h3 class='text-[1.5rem] font-bold uppercase text-center my-[1rem]'>${products.others[1].name}</h3>
            <div class='flex'>
            <button class='button-1-default uppercase m-auto'>see product</button>
            </div>
        </div>

        <div>
            <img src=${products.others[2].image.desktop} alt='' class='w-[100%] rounded-md'/>
            <h3 class='text-[1.5rem] font-bold uppercase text-center my-[1rem]'>${products.others[2].name}</h3>
            <div class='flex'>
            <button class='button-1-default uppercase m-auto'>see product</button>
            </div>
    </div>
    </div>
    </div>
</div>

</div>`

    // quantityList(products);

    const element = htmlToElement(html, product);
    addCart(products);
    return element

}


// function quantityList(prueba) {
//     prueba.includes.forEach((element) => {

//         let list = element.quantity + " " + element.item;
//         const tryingList = list.innerHTML;
//         console.log(list)

//         return tryingList
//     })

// }


// Go Back Button


// function goBackButton() {
//     const goBack1 = document.querySelectorAll('.prueba');

//     goBack1.forEach((element) => {
//         element.addEventListener('click', (event) => {
//             event.preventDefault();
//             const hiddenProduct = document.querySelector('.hidden-product-details');
//             const showProduct = document.querySelectorAll('.show-product');
//             let productDetail = hiddenProduct;

//             let probando = showProduct

//             productDetail.innerHTML = ''
//             console.log(probando)


//             // hiddenProduct.classList.toggle('hidden');

//         });




//     })
// }

// function seeProduct() {
//     const seeProductButton = document.querySelectorAll('.see-product')

//     seeProductButton.forEach(() => {


//         console.log('se estan marcando los botones ')

//     })

// }


// add cart
let addProduct = [];
const totalAmount = document.querySelector('.total-amount');
let total = 0;
function addCart(product) {
    const addtoCart = document.querySelectorAll('.add-cart');
    const productAdded = document.querySelector('.products-added');
    let productAddedCart = document.createElement('div');
    const inputAmount = document.querySelector('#input-amount');

    try {
        addtoCart.forEach((button) => {
            const cartProducts = {
                image: product.image.mobile,
                quantity: inputAmount.value,
                priceProduct: product.price,
                name: product.name
            }

            button.addEventListener('click', function () {
                const exist = addProduct.some(product => product.name === cartProducts.name);
                let getValueQuantity = inputAmount.value
                cartProducts.quantity = getValueQuantity
                if (exist) {
                    const incrementQuantity = addProduct.map((product) => {
                        if (product.name === cartProducts.name) {
                            product.quantity++
                            return product
                        } else {
                            return product
                        }

                    })

                    addProduct = [...incrementQuantity]
                } else {
                    addProduct = [...addProduct, cartProducts];
                }
                let productQuantity = addProduct
                productQuantity.forEach((product) => {

                    console.log('calcula la cantidad de producto', product.quantty)
                })

                let totalPrice = cartProducts.priceProduct
                let totalQuantity = parseInt(cartProducts.quantity)
                total = total + totalQuantity * totalPrice
                totalAmount.innerText = `$${total}`;

                productAddedCart.innerHTML = `
                <div class=' flex w-[100%] gap-5 my-[1rem] items-center p-[10px]'>
                    <div class='w-[40%] '>
                        <img src=${cartProducts.image} class='w-[100px] h-[100px] rounded-md object-cover' alt=''/>  
                    </div>
                    <div class='w-[40%] '>
                        <p class='font-bold '>${cartProducts.name}</p>
                        <p>${cartProducts.priceProduct}</p>
                    </div>
                    <div class=' w-[40%] h-[50px] flex '>
                        <div class='w-[100%] h-[50px] flex text-center bg-darkWhite place-items-center'>
                        <p class='m-auto'>${cartProducts.quantity}</p>
                        </div>
                    </div>
                </div>
                `
                productAdded.appendChild(productAddedCart);


            })

        })

    } catch (error) {
        console.log(error)
    }

}
// show cart
function showCart() {
    const showCart = document.querySelector('.show-cart');
    const backgroundBody = document.getElementById('backgroundBody');
    const showingCart = document.getElementById('showCart');

    showCart.addEventListener('click', () => {
        showingCart.classList.toggle('cart-active');
        backgroundBody.classList.toggle('background-body-active');
    })

}
showCart()


const btnCheckout = document.getElementById('btnCheckout');

btnCheckout.onclick = myFunction


function myFunction() {

    window.location.href = 'checkout.html'
}


function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    let child = template.content.firstChild;

    productContainer.appendChild(child);
    // goBackButton();
    // seeProduct()
    addCart();

    return productContainer
}