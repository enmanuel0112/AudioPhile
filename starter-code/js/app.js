// Menu Home
//window.onload = function () {
    // fetch('./header.html')
    // .then(respon => respon.text())
    // .then(datos => {
    //     const parser = new DOMParser();
    //     const dom = parser.parseFromString(datos, 'text/html');
    //     const headerContainer = document.getElementById('container')

    //     console.log('para ver is esta mandando el el html completo', dom)
    //     headerContainer.appendChild(dom.documentElement);

    //     const showFooter = dom.body.getElementById('prueba');

    //     console.log(' este es el footer que tiene que lanzar', footerContainer)

    //     if(showFooter) {
    //         const footerContainer = document.querySelector('.footer-continaer');
    //         footerContainer.appendChild(showFooter);
    //         console.log(footerContainer)
    //     }else{
    //         console.error('no se encontro el html');
    //     }


// Menu Home
//         function showMenu () {
//             const showMenu = document.getElementById('menu');

//                 showMenu.addEventListener('click', () =>  {

//                     const showMenu = document.getElementById('showMenu');
//                     const backgroundBody = document.getElementById('backgroundBody');

//                     showMenu.classList.toggle('menu-active');
//                     backgroundBody.classList.toggle('background-body-active');
//                 })
//             }

//             showMenu();
//     })
// }
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