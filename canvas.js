const canvas = document.getElementById('canvas');

function clearCanvas(){
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function drawGallow(x,y){
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+50, y);
        ctx.moveTo(x+25, y);
        ctx.lineTo(x+25, y-125);
        ctx.lineTo(x+100, y-125)
        ctx.lineTo(x+100, y-115)
        // ctx.lineTo(x+25, y-25);
        ctx.stroke();
    }
}

function drawHead(x,y){
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x, y, 13, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke();
    }
}

function drawBody(x,y){
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y+42);
        ctx.stroke();
    }
}

function drawRightLeg(x,y){
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+10, y+33);
        ctx.stroke();
    }
}

function drawLeftLeg(x,y){
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x-10, y+33);
        ctx.stroke();
    }
}

function drawLeftArm(x,y){
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x-15, y+30);
        ctx.stroke();
    }
}

function drawRightArm(x,y){
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+15, y+30);
        ctx.stroke();
    }
}

function drawFace(x,y){
    if(canvas.getContext){
        let ctx = canvas.getContext('2d')
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI, true);  // Mouth (clockwise)
        ctx.moveTo(x-4, y-12);
        ctx.arc(x-4, y-12, 2, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(x+4, y-12);
        ctx.arc(x+4, y-12, 2, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    }
}

function drawHappyFace(x,y){
    if(canvas.getContext){
        let ctx = canvas.getContext('2d')
        ctx.beginPath();
        ctx.arc(x, y-6, 5, 0, Math.PI,false);  // Mouth (clockwise)
        ctx.moveTo(x-4, y-12);
        ctx.arc(x-4, y-12, 2, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(x+4, y-12);
        ctx.arc(x+4, y-12, 2, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    }
}

function printGameState(num){
    let ctx = canvas.getContext('2d')
    clearCanvas()
    ctx.lineWidth = 2.5;
    drawGallow(65,135)
    ctx.strokeStyle= "blue"
    //We need to print all the body parts of the game in this current moment
    if(num == 0) return
    drawHead(165,34)
    if(num == 1) return
    drawBody(165,48)
    if(num == 2) return
    drawLeftLeg(165,90)
    if(num == 3) return
    drawRightLeg(165,90)
    if(num == 4) return
    drawLeftArm(165,48)
    if(num == 5) return
    drawRightArm(165,48)
    drawFace(165,42)
    if(num == 6) return
}

function printWinScreen(){
    let ctx = canvas.getContext('2d')
    clearCanvas()
    ctx.lineWidth = 2.5;
    drawGallow(65,135)
    ctx.strokeStyle= "blue"
    //Print the man happy and safe standing at the ground
    const dy = 15
    drawHead(165,34 +dy)
    drawBody(165,48 +dy)
    drawLeftLeg(165,90 +dy)
    drawRightLeg(165,90 +dy)
    drawLeftArm(165,48 +dy)
    drawRightArm(165,48 +dy)
    drawHappyFace(165,42 +dy)
    ctx.font = "20px Arial";
ctx.strokeText("Thank you!", 180, 50);
}

export {printGameState, printWinScreen};


