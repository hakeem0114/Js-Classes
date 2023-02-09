 
class Bubble{ //Template

    constructor(tempX, tempY){ //Setup
        this.x = tempX;
        this.y = tempY;
    }

    //Functions & Variables
    move(){
       // this.x = this.x + Math.floor(Math.random()*-10)+10; //random(-10,10)
       this.x = this.x + Math.floor(Math.random()*-10)+10; //random(-10,10)
       this.y = this.y + Math.floor(Math.random()*-10)+10; //random(-10,10)
    }
    
    show(){
        
            let canvas = document.getElementById('circle');
            if (canvas.getContext)
            {
                let ctx = canvas.getContext('2d'); 
                this.x = canvas.width / 2;
                var Y = canvas.height / 2;
                var R = 45;
                ctx.beginPath();
                ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
                ctx.lineWidth = 3;
                ctx.strokeStyle = '#FF0000';
                ctx.stroke();
            }
    }

}

function setup(){
    let bubble = new Bubble(100,200);  //Object instance using template

    console.log(bubble.x, bubble.y)  //print = console.log
    
    bubble.move();
    bubble.show();
}
