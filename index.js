const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color +=hex[Math.floor(Math.random() * 16)];  
    }
    return color;
}
let stopInterval;
const startChangingColor = function (){
    if(!stopInterval){
      stopInterval = setInterval(changingBgColor, 1000); 
    }
    function changingBgColor() {
        document.body.style.backgroundColor = randomColor();
    }

}

const stopChangingColor = function() {
    clearInterval(stopInterval);
    stopInterval = null;
}
document.querySelector(".start").addEventListener("click", startChangingColor);
document.querySelector(".stop").addEventListener("click", stopChangingColor);
