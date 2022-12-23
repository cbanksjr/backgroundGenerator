var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var btn = document.createElement('button');



function colorMatch() {
  color1.setAttribute("value", "#ff0000" );
  color2.setAttribute("value", "#ffff00");
  setGradient();

}


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}


function colorRandomizer() {
    var buttonText = document.createTextNode('Random Colors');
    body.insertBefore(btn, body.children[3]);
    btn.appendChild(buttonText);
    
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

colorRandomizer();
