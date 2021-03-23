canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "racing.jpg";

car1_height = 70;
car1_width = 120;

car1_image = "car1.png";

car1_x = 10;
car1_y = 10;

car2_height = 70;
car2_width = 120;

car2_image = "car2.png";

car2_x = 10;
car2_y = 100;

function add(){
    background_img = new Image();
    background_img.onload = upload_background ; 
  background_img.src = background_image;

  car1_img  = new Image();
 car1_img.onload = upload_car1 ;
car1_img.src = car1_image ;


car2_img  = new Image();
car2_img.onload = upload_car2 ;
car2_img.src = car1_image ;

}
function upload_background(){
ctx.drawImage(background_img,0,0,canvas.width , canvas.height);

}
function upload_car1(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width , car1_height);
    
    }
    function upload_car2(){
        ctx.drawImage(car2_img,car2_x,car2_y,car2_width , car2_height);
        
        }

    window.addEventListener("keydown",my_keydown());
    function my_keydown(e){
        keypress = e.keyCode;
        if(keypress == "37"){
            Left();
        }
        if(keypress == "38"){
            Up();
        }
        if(keypress == "39"){
            Right();
        }
        if(keypress == "40"){
            Down();
        }
    }