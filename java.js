



let btn = document.querySelector('.botão');
let modal = document.querySelector('.modal');

btn.addEventListener('click', function () {
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none'
    }
})



function funi() {
    let valor = document.querySelector('#comentario').value;

    document.querySelector('#resultado').innerHTML = valor;
}




let noti = document.querySelector("#img2");


noti.addEventListener("click", function () {

    let el = document.createElement("div");

    el.classList = 'noti';

    let text = document.createTextNode("up up up ");

    el.appendChild(text)

    console.log(el)



})











