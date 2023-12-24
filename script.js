

function atualizar(){

    const hoursElement = document.getElementsByClassName("hours");
    const minutesElement = document.getElementsByClassName("minutes");
    const secondsElement = document.getElementsByClassName("seconds");

    const now = new Date();
    // padStart -> garante que a hora,minuto e segundo sejam preenchido com "0" a esquerda, até completar 2 digítos!
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");
    
    hoursElement[0].textContent = hours;
    minutesElement[0].textContent = minutes;
    secondsElement[0].textContent = seconds;
  
    
}  
// loop para atualizar o relógio a cada segundo, sem o usuário fazer refresh!
setInterval(atualizar,1000);