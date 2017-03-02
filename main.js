/**
 * Created by Administrator on 2017/3/1.
 */
var can=document.getElementById("canvas");
var ctx=can.getContext("2d");
var w=can.width,h=can.height;
var lastTime,deltaTime;
var img=new Image();
var stars=[];
var num=200;


//初始化函数
function init(){
    img.src="star.png";
    for(var i=0;i<num;i++){
        var obj=new myStar();
        stars.push(obj);
        stars[i].init();

    }
    lastTime=Date.now();
    gameloop();
}
//绘制背景
function backGround() {

    var bgRadius = ctx.createLinearGradient(0, 0, 0, h);
    bgRadius.addColorStop(1.0, "#1b316a");
    bgRadius.addColorStop(0.6, "#122140");
    bgRadius.addColorStop(0.0, "#000");
    ctx.fillStyle = bgRadius;
    ctx.fillRect(0, 0, w, h);

}
//绘制月亮
function drawMoon(){
    ctx.beginPath();
    ctx.save();
    ctx.translate(200,-400);
    ctx.rotate(Math.PI/6);
    ctx.arc(600,250,50,0.5*Math.PI,1.5*Math.PI,true);
    ctx.moveTo(600,200);
    ctx.arcTo(700,250,600,300,25*Math.sqrt(5));
    ctx.fillStyle="yellow";
    ctx.shadowColor="#1b316a";
    ctx.shadowOffsetX=5;
    ctx.shadowOffsetY=5;
    ctx.shadowBlur=0.2;
    ctx.fill();

    ctx.restore();

}
//夜色城市
function city(){
    ctx.beginPath();
    ctx.moveTo(0,500);
    ctx.lineTo(50,500);
    ctx.lineTo(75,475);
    ctx.lineTo(100,500);//
    ctx.lineTo(100,450);
    ctx.lineTo(130,425);//
    ctx.lineTo(160,450);
    ctx.lineTo(160,800);
    ctx.lineTo(0,800);
    ctx.closePath();
    ctx.fillStyle="#000";
    ctx.fill();
    //窗户
    ctx.beginPath();
    ctx.fillStyle="yellow"
    ctx.fillRect(60,520,30,20);
    ctx.fillRect(60,560,30,20);
    ctx.fillRect(110,470,20,20);
    ctx.fillRect(130,500,20,20);
    ctx.fillRect(110,530,20,20);
    ctx.fillRect(130,560,20,20);

    ctx.beginPath();
    ctx.moveTo(160,475);
    ctx.lineTo(200,440);
    ctx.lineTo(240,475);
    ctx.lineTo(300,475);
    ctx.lineTo(340,440);
    ctx.lineTo(380,475);
    ctx.lineTo(380,800);
    ctx.lineTo(160,800);
    ctx.closePath();
    ctx.fillStyle="#000";
    ctx.fill();

    //窗户
    ctx.beginPath();
    ctx.fillStyle="yellow";
    ctx.fillRect(170,500,20,20);
    ctx.fillRect(210,500,20,20);
    ctx.fillRect(170,560,20,20);
    ctx.fillRect(210,560,20,20);
    ctx.fillRect(255,500,30,20);
    ctx.fillRect(255,540,30,20);
    ctx.fillRect(255,580,30,20);

}

document.body.onload=init;
//画布刷新
function gameloop(){
    window.requestAnimFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;


    backGround();
    drawMoon();
    drawStar();
    city();

}

