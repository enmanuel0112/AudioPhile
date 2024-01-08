// Menu Home


const showMenu = document.getElementById('menu');


showMenu.addEventListener('click', () =>  {

    const showMenu = document.getElementById('showMenu');
    const backgroundBody = document.getElementById('backgroundBody');
    const shopZIndex = document.querySelector('.btn-z-index');

    showMenu.classList.toggle('menu-active');
    backgroundBody.classList.toggle('background-body-active');

    setTimeout( () =>{

        shopZIndex.classList.toggle('btn-z-index-active');
    }, 1)




})


// XX59 Mark One 



async function  dataJson (dato) {
    const response = await fetch('/starter-code/src/js/data.json');
    const datos = await response.json();



    function xx59MarkOneFunction () {

        const xx59MarkOne = document.querySelector('.button-1-default');

        xx59MarkOne.addEventListener('click', () =>{

            console.log('este si funciona', datos)

            console.log(datos);

        } )

    }

    xx59MarkOneFunction();



}
 



dataJson();