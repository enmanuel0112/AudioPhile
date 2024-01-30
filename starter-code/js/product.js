const heroContainer = document.getElementById("heroContainer");
const productContainer =  document.getElementById("productContainer")
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(event){
            event.preventDefault();
            let category = link.innerHTML.toLowerCase();
            fetchData(category)
            heroContainer.classList.add("hidden");
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
        }else{
            console.log(data);
        const items = data.filter(item => item.category === category);
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

// document.addEventListener("DOMContentLoaded", () => {
//     const category = getQueryParam('category');
//     //console.log(category);
//     if (category) {
//         console.log(fetchData(category));
//     }
// });
function setupButtonEventHandlers() {
    // Suponiendo que todos los botones tienen la clase 'button-1-default'
    document.querySelectorAll('.button-1-default').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Botón clickeado:', this.id);
            // Aquí puedes añadir lo que quieras hacer cuando el botón sea clickeado
        });
    });
}

function buildHtmlEarphones(products) {
    console.log(products);
  
      const html = `<div>
        <div class="bg-black w-screen h-[300px] flex justify-center justify-items-center"><h1 class="text-center font-bold text-white text-[45px] m-auto">${products.category.toUpperCase()}<h1></div>
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
  
  
        <div class="grid grid-cols-3 justify-around w-full gap-10 my-20">
          <div class="m-auto my-[4rem] md:my-[0] w-full flex justify-center ">
                  <div class=" bg-darkWhite w-full h-[200px] relative flex rounded-[10px]">
                    <img  src="./assets/shared/desktop/image-category-thumbnail-headphones.png" 
                        alt=""
                        class=" w-[230px] absolute inset-x-[18%] top-[-80px] z-10 ">
                    <div class=" w-[100%] absolute inset-y-[60%] text-center m-auto ">
                      <h2 class="m-auto font-bold uppercase sans">eardphones</h2>
                      <a href="speakers.html" class="text-gray-500 font-bold cursor-pointer uppercase">shop</a><span class="span-button-arrow "> > </span>
                    </div>
                  </div>
              </div>
  
              <div class="m-auto my-[4rem] md:my-[0] w-full flex justify-center ">
                  <div class=" bg-darkWhite w-full h-[200px] relative flex rounded-[10px]">
                    <img  src="./assets/shared/desktop/image-category-thumbnail-speakers.png" 
                        alt=""
                        class=" w-[230px] absolute inset-x-[18%] top-[-80px] z-10 ">
                    <div class=" w-[100%] absolute inset-y-[60%] text-center m-auto ">
                      <h2 class="m-auto font-bold uppercase sans">eardphones</h2>
                      <a href="speakers.html" class="text-gray-500 font-bold cursor-pointer uppercase">shop</a><span class="span-button-arrow "> > </span>
                    </div>
                  </div>
              </div>
  
              <div class="m-auto my-[4rem] md:my-[0] w-full flex justify-center ">
                  <div class=" bg-darkWhite w-full h-[200px] relative flex rounded-[10px]">
                    <img  src="./assets/shared/desktop/image-category-thumbnail-earphones.png" 
                        alt=""
                        class=" w-[230px] absolute inset-x-[18%] top-[-80px] z-10 ">
                    <div class=" w-[100%] absolute inset-y-[60%] text-center m-auto ">
                      <h2 class="m-auto font-bold uppercase sans">eardphones</h2>
                      <a href="speakers.html" class="text-gray-500 font-bold cursor-pointer uppercase">shop</a><span class="span-button-arrow "> > </span>
                    </div>
                  </div>
              </div>
        </div>
  
  
  
        <div>
          <div class= "flex justify-center mx-auto my-40 w-full">
                <div class= "grid grid-cols-2 justify-center gap-20">
                    
                    <div id="containerInf" class="m-auto p-10">
                              <div class=""> <h1 class="text-[50px] font-bold m-0 uppercase  p-0">bringinyou the <span class="text-orange">best</span> audio gear</h1></div>
                            <p class="text-[15px] font-semibold">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment..
                            }</p>
                    </div>
  
                    <div id="containerImage" class="m-auto">
                        <img
                          src="./assets/shared/desktop/image-best-gear.jpg"
                          alt=""
                          class="rounded-lg w-full h-full"
                        />
                    </div>
                </div>
        </div>
        
        
        </div>
  
        </div>
        <div>`;
          const element = htmlToElement(html);
          setupButtonEventHandlers();
      return element;
    }
function buildHtmlSpeakers(products, productsTwo) {
  console.log(products, productsTwo);

    const html = `<div>
      <div class="bg-black w-screen h-[300px] flex justify-center justify-items-center"><h1 class="text-center font-bold text-white text-[45px] m-auto">${products.category.toUpperCase()}<h1></div>
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


      <div class="grid grid-cols-3 justify-around w-full gap-10 my-20">
        <div class="m-auto my-[4rem] md:my-[0] w-full flex justify-center ">
                <div class=" bg-darkWhite w-full h-[200px] relative flex rounded-[10px]">
                  <img  src="./assets/shared/desktop/image-category-thumbnail-headphones.png" 
                      alt=""
                      class=" w-[230px] absolute inset-x-[18%] top-[-80px] z-10 ">
                  <div class=" w-[100%] absolute inset-y-[60%] text-center m-auto ">
                    <h2 class="m-auto font-bold uppercase sans">eardphones</h2>
                    <a href="speakers.html" class="text-gray-500 font-bold cursor-pointer uppercase">shop</a><span class="span-button-arrow "> > </span>
                  </div>
                </div>
            </div>

            <div class="m-auto my-[4rem] md:my-[0] w-full flex justify-center ">
                <div class=" bg-darkWhite w-full h-[200px] relative flex rounded-[10px]">
                  <img  src="./assets/shared/desktop/image-category-thumbnail-speakers.png" 
                      alt=""
                      class=" w-[230px] absolute inset-x-[18%] top-[-80px] z-10 ">
                  <div class=" w-[100%] absolute inset-y-[60%] text-center m-auto ">
                    <h2 class="m-auto font-bold uppercase sans">eardphones</h2>
                    <a href="speakers.html" class="text-gray-500 font-bold cursor-pointer uppercase">shop</a><span class="span-button-arrow "> > </span>
                  </div>
                </div>
            </div>

            <div class="m-auto my-[4rem] md:my-[0] w-full flex justify-center ">
                <div class=" bg-darkWhite w-full h-[200px] relative flex rounded-[10px]">
                  <img  src="./assets/shared/desktop/image-category-thumbnail-earphones.png" 
                      alt=""
                      class=" w-[230px] absolute inset-x-[18%] top-[-80px] z-10 ">
                  <div class=" w-[100%] absolute inset-y-[60%] text-center m-auto ">
                    <h2 class="m-auto font-bold uppercase sans">eardphones</h2>
                    <a href="speakers.html" class="text-gray-500 font-bold cursor-pointer uppercase">shop</a><span class="span-button-arrow "> > </span>
                  </div>
                </div>
            </div>
      </div>



      <div>
        <div class= "flex justify-center mx-auto my-40 w-full">
              <div class= "grid grid-cols-2 justify-center gap-20">
                  
                  <div id="containerInf" class="m-auto p-10">
                            <div class=""> <h1 class="text-[50px] font-bold m-0 uppercase  p-0">bringinyou the <span class="text-orange">best</span> audio gear</h1></div>
                          <p class="text-[15px] font-semibold">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment..
                          }</p>
                  </div>

                  <div id="containerImage" class="m-auto">
                      <img
                        src="./assets/shared/desktop/image-best-gear.jpg"
                        alt=""
                        class="rounded-lg w-full h-full"
                      />
                  </div>
              </div>
      </div>
      
      
      </div>

      </div>
      <div>`;
        const element = htmlToElement(html);
        setupButtonEventHandlers();
    return element;
  }

  function buildHtmlHeadphones(products, productsTwo, productsTree) {
      const html = `<div>
        <div class="bg-black w-screen h-[300px] flex justify-center justify-items-center"><h1 class="text-center font-bold text-white text-[45px] m-auto">${products.category.toUpperCase()}<h1></div>
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
  
  
        <div class="grid grid-cols-3 justify-around w-full gap-10 my-20">
          <div class="m-auto my-[4rem] md:my-[0] w-full flex justify-center ">
                  <div class=" bg-darkWhite w-full h-[200px] relative flex rounded-[10px]">
                    <img  src="./assets/shared/desktop/image-category-thumbnail-headphones.png" 
                        alt=""
                        class=" w-[230px] absolute inset-x-[18%] top-[-80px] z-10 ">
                    <div class=" w-[100%] absolute inset-y-[60%] text-center m-auto ">
                      <h2 class="m-auto font-bold uppercase sans">eardphones</h2>
                      <a href="speakers.html" class="text-gray-500 font-bold cursor-pointer uppercase">shop</a><span class="span-button-arrow "> > </span>
                    </div>
                  </div>
              </div>
  
              <div class="m-auto my-[4rem] md:my-[0] w-full flex justify-center ">
                  <div class=" bg-darkWhite w-full h-[200px] relative flex rounded-[10px]">
                    <img  src="./assets/shared/desktop/image-category-thumbnail-speakers.png" 
                        alt=""
                        class=" w-[230px] absolute inset-x-[18%] top-[-80px] z-10 ">
                    <div class=" w-[100%] absolute inset-y-[60%] text-center m-auto ">
                      <h2 class="m-auto font-bold uppercase sans">eardphones</h2>
                      <a href="speakers.html" class="text-gray-500 font-bold cursor-pointer uppercase">shop</a><span class="span-button-arrow "> > </span>
                    </div>
                  </div>
              </div>
  
              <div class="m-auto my-[4rem] md:my-[0] w-full flex justify-center ">
                  <div class=" bg-darkWhite w-full h-[200px] relative flex rounded-[10px]">
                    <img  src="./assets/shared/desktop/image-category-thumbnail-earphones.png" 
                        alt=""
                        class=" w-[230px] absolute inset-x-[18%] top-[-80px] z-10 ">
                    <div class=" w-[100%] absolute inset-y-[60%] text-center m-auto ">
                      <h2 class="m-auto font-bold uppercase sans">eardphones</h2>
                      <a href="speakers.html" class="text-gray-500 font-bold cursor-pointer uppercase">shop</a><span class="span-button-arrow "> > </span>
                    </div>
                  </div>
              </div>
        </div>
  
  
  
        <div>
          <div class= "flex justify-center mx-auto my-40 w-full">
                <div class= "grid grid-cols-2 justify-center gap-20">
                    
                    <div id="containerInf" class="m-auto p-10">
                              <div class=""> <h1 class="text-[50px] font-bold m-0 uppercase  p-0">bringinyou the <span class="text-orange">best</span> audio gear</h1></div>
                            <p class="text-[15px] font-semibold">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment..
                            }</p>
                    </div>
  
                    <div id="containerImage" class="m-auto">
                        <img
                          src="./assets/shared/desktop/image-best-gear.jpg"
                          alt=""
                          class="rounded-lg w-full h-full"
                        />
                    </div>
                </div>
        </div>
        
        
        </div>
  
        </div>
        <div>`;
          const element = htmlToElement(html);
          setupButtonEventHandlers()
      return element;
    }


  function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    let child = template.content.firstChild;
    
    productContainer.appendChild(child);
    
    return productContainer
  } 