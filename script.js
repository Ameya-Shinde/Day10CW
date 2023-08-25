const circle = document.getElementById("circle");

const col = document.getElementById("col");
const shape = document.getElementById("shape");

var isTriangle = false;

const colors = [
    '#3498db', '#e74c3c', '#1abc9c', '#f39c12', '#9b59b6',
    '#2ecc71', '#f1c40f', '#e67e22', '#95a5a6', '#34495e',
    '#7f8c8d', '#d35400', '#c0392b', '#16a085', '#8e44ad',
    '#27ae60', '#d35400', '#2980b9', '#f39c12'
];

col.addEventListener("click", function(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
});

shape.addEventListener("click", function(){
    if (!isTriangle) {
        var i = document.getElementsByClassName("inner")[0];
        i.className = "triangle-bottom-left";
        isTriangle = true;
      }else{
        var i = document.getElementsByClassName("triangle-bottom-left")[0];
        i.className = "inner";
        isTriangle = false;
      }
})