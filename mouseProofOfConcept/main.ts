const es = new Es();
es.background("skyblue");
let mousePos={};
let rect ={
    x:250,
    y:350,
    width:200,
    height:100
};
function isInside(pos,rect){
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y <rect.y+rect.height && pos.y > rect.y;
}
function update(){
    es.background("skyblue");
    es.rect(rect.x,rect.y,rect.width,rect.height,"#00cc00");
    canvas.addEventListener('click', function(evt){
        mousePos = es.getMousePos(canvas,evt);
        if(isInside(mousePos,rect)){
            rect.x = 100;
            rect.y -= 10;
        }
    });
    es.rect(mousePos.x-25,mousePos.y-25,50,50,"blue",0.5);
    es.text("mouseX:"+mousePos.x,100,100,"#00cc00");
    es.text("mouseY:"+mousePos.y,100,200,"#00cc00");             
} 