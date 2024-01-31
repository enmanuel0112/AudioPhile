// Menu Home
// window.onload = function () {
//     fetch('./header.html')
//     .then(respon => respon.text())
//     .then(datos => {
//         const parser = new DOMParser();
//         const dom = parser.parseFromString(datos, 'text/html');
//         const headerContainer = document.getElementById('container')

//         console.log('para ver is esta mandando el el html completo', dom)
//         headerContainer.appendChild(dom.documentElement);

//         const showFooter = dom.body.getElementById('prueba');

//         console.log(' este es el footer que tiene que lanzar', footerContainer)

//         if(showFooter) {
//             const footerContainer = document.querySelector('.footer-continaer');
//             footerContainer.appendChild(showFooter);
//             console.log(footerContainer)
//         }else{
//             console.error('no se encontro el html');
//         }


// //Menu Home
        
//     })
// }

    const showMenu = document.getElementById('menu');

    showMenu.addEventListener('click', () =>  {

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

// function fetchData(itemCat) {
//     return fetch("./js/data.json")
//     .then((response) => response.json())
//     .then((data) => {
//         const items = data.filter((item) => item.category === itemCat);
//         console.log(items);
//     });
// }
// XX59 Mark One 



// async function  dataJson (dato) {
//     const response = await fetch('/starter-code/src/js/data.json');
//     const datos = await response.json();



//     function xx59MarkOneFunction () {

//         const xx59MarkOne = document.querySelector('.button-1-default');

//         xx59MarkOne.addEventListener('click', () =>{

//             console.log('este si funciona', datos)

//             console.log(datos);

//         } )

//     }

//     xx59MarkOneFunction();



// }
 



// dataJson();

const heroContainer = document.getElementById("heroContainer");
const productContainer =  document.getElementById("productContainer")
const bodyContainer = document.getElementById("bodyContainer")
const imagesContainer = document.getElementById("imagesContainer");
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(event){
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
      
        if(category === "home"){
          heroContainer.classList.remove("hidden");
          bodyContainer.classList.remove("hidden");
          imagesContainer.classList.remove("hidden");
        }else{
        const items = data.filter(item => item.category === category || item.category == category.href);
        displayProducts(items);
        }
       
    });
}

function displayProducts(products) {
    if (products.length == 2) {
       buildHtmlSpeakers(products[0], products[1]);
    } else if (products.length >= 3){
        buildHtmlHeadphones(products[0], products[1], products[2]);
    } 
    else {
       buildHtmlEarphones(products[0]);
    }
       
}



function setupButtonEventHandlers(products) {
    document.querySelectorAll('.button-1-default').forEach(button => {
        button.addEventListener('click', function() {
          const items = products.filter(item => item.id == this.id);
          productContainer.innerHTML = ''
          ProductsDetail(items[0]);
        });
    });
}

function buildHtmlEarphones(products) {
  const html = `<div>
                      <div class="bg-black w-screen h-[400px] flex justify-center justify-items-center"><h1 class="text-center font-bold text-white text-[45px] m-auto">${products.category.toUpperCase()}<h1></div>
                          
                      <div class="max-w-[1200px] m-auto">
                              <div class= "flex justify-center mx-auto my-40 w-full">
                                      <div class= "grid grid-cols-2 justify-center gap-20">
                                          <div id="containerInf" class="m-auto p-10">
                                                    <div class=""> <h1 class="text-[50px] font-bold m-0">${products.name}</h1></div>
                                                  <p class="text-[15px] font-semibold">${
                                                    products.description
                                                  }</p>
                                                <button class="button-1-default my-2" id="${products.id}">SEE PRODUCT</button>
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
      <div class="max-w-[1200px] m-auto">
        


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
                          <p class="text-[15px] font-semibold">${
                            productsTwo.description
                          }</p>
                        <button class="button-1-default my-2" id="${productsTwo.id}">SEE PRODUCT</button>
                  </div>
              </div>
      </div>

      <div class= "flex justify-center mx-auto my-40 w-full">
              <div class= "grid grid-cols-2 justify-center gap-20">
                  

                  <div id="containerInf" class="m-auto p-10">
                            <div class=""> <h1 class="text-[50px] font-bold m-0">${products.name}</h1></div>
                          <p class="text-[15px] font-semibold">${
                            products.description
                          }</p>
                        <button class="button-1-default my-2" id="${products.id}">SEE PRODUCT</button>
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
        <div class="max-w-[1200px] m-auto">
        
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
                                <p class="text-[15px] font-semibold">${
                                productsTree.description
                                }</p>
                            <button class="button-1-default my-2" id="${productsTree.id}">SEE PRODUCT</button>
                        </div>
                </div>
        </div>
          
        <div class= "flex justify-center mx-auto my-40 w-full">
                <div class= "grid grid-cols-2 justify-center gap-20">
                    <div id="containerInf" class="m-auto p-10">
                            <h3 class="text-orange">NEW PRODUCT</h3>
                              <div class=""> <h1 class="text-[50px] font-bold m-0">${productsTwo.name}</h1></div>
                            <p class="text-[15px] font-semibold">${
                              productsTwo.description
                            }</p>
                          <button class="button-1-default my-2" id="${productsTwo.id}">SEE PRODUCT</button>
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
                                <p class="text-[15px] font-semibold">${
                                products.description
                                }</p>
                            <button class="button-1-default my-2" id="${products.id}">SEE PRODUCT</button>
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
  function ProductsDetail(products){
    console.log(products);
    const html = `<div>
    <div class="bg-black w-screen h-[100px] flex justify-center justify-items-center"></div>
    <div class="max-w-[1200px] m-auto">
    
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
                            <p class="text-[15px] font-semibold">${products.description}</p>
                            <span class=" text-lg font-bold" >${products.price}<span>
                        <button class="button-1-default my-2 uppercase" id="${products.id}">add to cart</button>
                    </div>
            </div>
    </div>

    <div class= "flex justify-center mx-auto my-40 w-full">
            <div class= "grid grid-cols-2 justify-center gap-20">
                    <div id="containerImage" class="m-auto">
                        <p>${products.features}</p>
                    </div>

                    <div id="containerInf" class="m-auto p-10">
                            <ul class="uppercase">In the box
                              <li class="flex">
                                <p>${products.includes[0].quantity}</p>
                                <span class=" uppercase text-orange">x</span>
                                <p>${ products.includes[0].item}</p>
                              </li>
                            </ul>
                    </div>
            </div>
    </div>
  </div>`
  const element = htmlToElement(html);
  return element
  }


  function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    let child = template.content.firstChild;
    
    productContainer.appendChild(child);
    return productContainer
  } 