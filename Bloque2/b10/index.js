let bodyElem= document.getElementsByTagName('body')[0];
window.addEventListener('DOMContentLoaded', (event) => {
    let texto = "Bienvenido al piano de Alba, espero que disfrute de la música";
  
  
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
  });

bodyElem.addEventListener('keydown',handlekeyDown);

bodyElem.addEventListener('keyup',handlekeyup);

function handlekeyDown(event) {
     console.log('keydown' + event.keyCode);
     const divkey = document.querySelector(`div[data-key="${event.keyCode}"]`)
     divkey.classList.add('playing')
     playSound(event);

}

function handlekeyup(event) {
    console.log('keydown' + event.keyCode);
    const divkey = document.querySelector(`div[data-key="${event.keyCode}"]`)
    divkey.classList.remove('playing')

}

function playSound(event){
    const audiokey = document.querySelector(`audio[data-key="${event.keyCode}"]`)
audiokey.currentTime=0;
audiokey.play();
    
}
