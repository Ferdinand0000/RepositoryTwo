
function playMusic(sec){
    const $audio = document.getElementById('audio')
    $audio.currentTime = sec
    $audio.play()
}

footerButton = ()=> {
    window.scrollTo({top:0,behavior:'smooth'});
}

function burgerMenu(val){
    let burger = document.querySelectorAll('.burger__line')
    burger.forEach(element => {
        element.classList.toggle('burgerActive')
    });
    document.querySelector('.burger__on__click').classList.toggle('active')
    document.querySelector('nav').classList.toggle('active')
    document.querySelector('#rect').classList.toggle('active')
}
window.addEventListener('scroll', function () {   
    var y = window.scrollY
    if(y>10){
        let burger = document.querySelectorAll('.burger__line')
        burger.forEach(element => {
            element.classList.add('white')
        });
        document.querySelector('nav').classList.add('white')
        document.querySelector('#rect').classList.add('white') 
    }
    else{
        let burger = document.querySelectorAll('.burger__line')
        burger.forEach(element => {
            element.classList.remove('white')
            element.classList.remove('burgerActive')
        });
        document.querySelector('nav').classList.remove('white')
        document.querySelector('#rect').classList.remove('white')
        document.querySelector('.burger__on__click').classList.remove('active')
        document.querySelector('nav').classList.remove('active')
        document.querySelector('#rect').classList.remove('active')
    }
    if(y>127){
        document.querySelector('.footer__button').classList.add('active')
    }
    else{
        document.querySelector('.footer__button').classList.remove('active')
    }
});
doubleClick = (e) =>{
    let page = document.querySelector('.block-card_page')
    page.classList.toggle('active')
}


function chenBerik(value){
    let elem = document.querySelector('.berikbol')
    let $znak = document.querySelector("polzunok")
    console.log(value)
    pos = 2 *value
    elem.style.width = pos + "px";
}
const positon = document.querySelector('.block-card_page');
positon.addEventListener('mousemove', t =>{
    positon.style.setProperty('--x', t.clientX + 'px');
    positon.style.setProperty('--y', t.clientY + 'px');
})




