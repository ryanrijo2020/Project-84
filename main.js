canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
background_image = " racing.jpg ";
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 50;
car1_y = 50;

car2_width = 120;
car2_height = 70;
car2_image = "Picture1.png";
car2_x = 50;
car2_y = 500;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.scr = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.scr = car2_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",key_down);
function key_down(e) {
    var asci=e.keyCode;
    console.log(asci);
    if (asci=='38') {
    car1_up();
    console.log("up arrow key");
    }
    if (asci=='40') {
        car1_down();
        console.log("down arrow key");
    }     
    if (asci=='37') {
    car1_left();
    console.log("left arrow key");
    }
    if (asci=='39') {
    car1_right();
    console.log("right arrow key");
    }
}


