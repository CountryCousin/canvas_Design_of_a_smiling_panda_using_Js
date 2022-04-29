let canvas =document.querySelector('#my-canvas')
let ctx = canvas.getContext('2d') //ctx = context

// ctx.beginPath();
// ctx.lineWidth= 10;
// ctx.arc(500, 250, 200,0, 2 * Math.PI);
// ctx.stroke();

strokeArc(10, 'red',500, 250, 200,0, 2 * Math.PI )

// creating the right eye 

// ctx.beginPath();
// ctx.arc(400, 200, 50,0, 2 * Math.PI);
// ctx.fill()

fillArc('#000', 400, 200, 50,0, 2 * Math.PI)

// ctx.beginPath();
// ctx.arc(400, 200, 30,0, 2 * Math.PI);
// ctx.fillStyle = '#fff'
// ctx.fill()

fillArc('#fff',400, 200, 30,0, 2 * Math.PI )

// ctx.beginPath();
// ctx.arc(402, 200, 20,0, 2 * Math.PI);
// ctx.fillStyle = '#000'
// ctx.fill()

fillArc('#000',402, 200, 20,0, 2 * Math.PI)


// creating the right eye 
fillArc('#000', 600, 200, 50,0, 2 * Math.PI)
fillArc('#fff',600, 200, 30,0, 2 * Math.PI )
fillArc('#000',598, 200, 20,0, 2 * Math.PI)

// creating the nose 
fillArc('red',500, 250, 30,0, 2 * Math.PI )

// creating the smiling mouth 
strokeArc(10, '#000',500, 280, 100,0.3,  Math.PI-0.3)

// creating the ears 
fillArc('red', 360, 110, 50, Math.PI-0.8, -0.8)
fillArc('red', 640, 110, 50, 1.5* Math.PI-0.8, 0.8)

function fillArc(color, x, y, r, startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(x, y, r, startAngle, endAngle);
    ctx.fillStyle = color;
    ctx.fill();
};


//  function for the big head of the panda 
function strokeArc(lineWidth,color,  x, y, r, startAngle, endAngle){
    ctx.beginPath();
    ctx.lineWidth= lineWidth;
    ctx.strokeStyle = color;
    ctx.arc(x, y, r,startAngle, endAngle);
    ctx.stroke()
};
