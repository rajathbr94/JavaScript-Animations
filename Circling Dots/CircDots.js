// Getting Canvas from HTML file
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Setting dimensions of canvas
canvas.width = 800;
canvas.height = 800;

// Defining the class Dot
function Dot(x, y, radius, color) {
    
    // Initializing local var
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians =Math.random()*Math.PI*2;
    this.velocity=0.05;
    let distFromCenter= randomIntFromRange(50,200);

    this.update = ()=> {
        this.radians+=this.velocity; // changing radians = speed of the Dot
        this.x= x+ Math.cos(this.radians)*distFromCenter;
        this.y= y+ Math.sin(this.radians)*distFromCenter;
        this.draw()
    };
    
    // Defining the structure of the Dot
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };
    
    // Creating a random integer = Create inner and Outer layer of the circle
    function randomIntFromRange(min, max) {
        console.log(Math.floor(Math.random() * (max - min + 1) + min));
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

let Dots;  // initializing Object

function start() {
    //Creating array of objects
    Dots = [];

    for (let i = 0; i < 20  ; i++) {
        Dots.push(new Dot(canvas.width/2, canvas.height/2,5,'#4fab1b'))
    }
    for (let i = 0; i < 20  ; i++) {
        Dots.push(new Dot(canvas.width/2, canvas.height/2,5,'#ffffff'))
    }
    for (let i = 0; i < 20  ; i++) {
        Dots.push(new Dot(canvas.width/2, canvas.height/2,5,'#c4420a'))
    }
    for (let i = 0; i < 20  ; i++) {
        Dots.push(new Dot(canvas.width/2, canvas.height/2,5,'#2b6aab'))
    }

}



// Repeat Loop
function repeat() {
    requestAnimationFrame(repeat);
    ctx.fillStyle='rgba(255,255,255,0.5)';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    Dots.forEach(Dot => {
        Dot.update()
     })
}

// run the code
start();
repeat();
