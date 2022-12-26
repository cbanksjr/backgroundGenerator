let  css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let  color2 = document.querySelector('.color2');
let  body = document.getElementById('gradient');
let  btn = document.createElement('button');
let  buttonText = document.createTextNode('Random Colors');


let colorMatch = () => {
  color1.setAttribute("value", "#ff0000" );
  color2.setAttribute("value", "#ffff00");
  setGradient();

}


let setGradient = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";

}

let insertButton = () => {
    body.insertBefore(btn, body.children[3]);
    btn.appendChild(buttonText);
}

let colorRandomizer = () => {
    btn.onclick = () => {
        var generateColor = Math.floor(Math.random() * 16777215).toString(16);
        var generateColor2 = Math.floor(Math.random() * 16777215).toString(16);
        color1.setAttribute('value', `#${generateColor}`);
        color2.setAttribute('value', `#${generateColor2}`);
        setGradient();
    }
}



color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);


colorMatch();

insertButton();

colorRandomizer();


