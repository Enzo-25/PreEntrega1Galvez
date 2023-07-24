function changeColor(newColor) {
    const elem = document.getElementById("random");
    elem.style.color = newColor;
}

function numericRandom() {
    document.getElementById("random").innerHTML = Math.floor(Math.random() * 10);
}
