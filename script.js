const onOffButton = document.querySelector("#buttonOn");
const circle = document.querySelectorAll(".circle");
const root = document.documentElement;
const duration = document.querySelector("#duration");
const colorPickUl = document.querySelectorAll(".colorPickUl");
const colorPickLi = document.querySelectorAll(".colorPick");
let inputBrightness = document.querySelector("#inputBrightness");
let inputSize = document.querySelector("#inputSize");

onOffButton.addEventListener("click", function(){
    for(let i = 0; i < circle.length; i++){
            circle[i].classList.toggle("lightsOnOff");
    }
    onOffButton.classList.toggle("buttonOn");
    if(onOffButton.textContent === "Lights Off"){
        onOffButton.textContent = "Lights On";
    } else{
        onOffButton.textContent = "Lights Off";
    }
});



for(let i = 0; i < colorPickLi.length; i++){
    colorPickLi[i].addEventListener("click", function(){
        const pickedCircle = this.id.slice(-1);
        const pickedColor = this.classList[1].slice(9);
        if(pickedColor === "Red"){
            pickedColorDark = "rgb(134, 0, 0)";
            pickedColorLight = "rgb(255, 0, 0)";
            root.style.setProperty("--color" + pickedCircle + "-dark", pickedColorDark);
            root.style.setProperty("--color" + pickedCircle + "-light", pickedColorLight);
        } else if(pickedColor === "Orange"){
            pickedColorDark = "rgb(153, 61, 0)";
            pickedColorLight = "rgb(255, 80, 0)";
            root.style.setProperty("--color" + pickedCircle + "-dark", pickedColorDark);
            root.style.setProperty("--color" + pickedCircle + "-light", pickedColorLight);
        } else if(pickedColor === "Yellow"){
            pickedColorDark = "rgb(133, 124, 0)";
            pickedColorLight = "rgb(255, 238, 0)";
            root.style.setProperty("--color" + pickedCircle + "-dark", pickedColorDark);
            root.style.setProperty("--color" + pickedCircle + "-light", pickedColorLight);
        } else if(pickedColor === "Green"){
            pickedColorDark = "rgb(54, 136, 0)";
            pickedColorLight = "rgb(102, 255, 0)";
            root.style.setProperty("--color" + pickedCircle + "-dark", pickedColorDark);
            root.style.setProperty("--color" + pickedCircle + "-light", pickedColorLight);
        } else if(pickedColor === "Turquiose"){
            pickedColorDark = "rgb(0, 126, 115)";
            pickedColorLight = "rgb(0, 255, 234)";
            root.style.setProperty("--color" + pickedCircle + "-dark", pickedColorDark);
            root.style.setProperty("--color" + pickedCircle + "-light", pickedColorLight);
        } else if(pickedColor === "Blue"){
            pickedColorDark = "rgb(0, 44, 126)";
            pickedColorLight = "rgb(0, 89, 255)";
            root.style.setProperty("--color" + pickedCircle + "-dark", pickedColorDark);
            root.style.setProperty("--color" + pickedCircle + "-light", pickedColorLight);
        } else if(pickedColor === "Violet"){
            pickedColorDark = "rgb(128, 0, 128)";
            pickedColorLight = "rgb(255, 0, 255)";
            root.style.setProperty("--color" + pickedCircle + "-dark", pickedColorDark);
            root.style.setProperty("--color" + pickedCircle + "-light", pickedColorLight);
        }
    });
};

duration.addEventListener("keyup", function(event){setDuration()});
duration.addEventListener("click", function(event){setDuration()});

inputBrightness.onclick = function(){
    root.style.setProperty("--color-intensity", 40 + Number(this.value) * 2 + "%")
}

inputSize.onclick = function(){
    root.style.setProperty("--circle-width", 50 * Number(this.value) + "px");
    root.style.setProperty("--circle-height", 100 * Number(this.value) + "px");
    root.style.setProperty("--circle-border-radius", 25 * Number(this.value) + "px / " + 50 * Number(this.value) + "px");
}

function setDuration(){
    root.style.setProperty("--main-duration", duration.value + "s")
}