/**
 * Created by Administrator on 2017/3/1.
 */
var myStar=function(){
    this.x;
    this.y;
    this.picNo;
    this.xsped;
    this.ysped;
};
myStar.prototype.init=function(){
    this.x=Math.random()*800;
    this.y=Math.random()*500;
    this.picNo=Math.floor(Math.random()*7);
    this.timer=0;
};
myStar.prototype.update=function(){


    this.timer+=deltaTime;
    if(this.timer>50){
        this.picNo+=1;
        this.picNo%=7;
        this.timer=0;
    }
};
myStar.prototype.draw=function(){
    if(this.y<360&&this.y>0) {
        ctx.drawImage(img, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
    }
};

function drawStar(){
  for(var i=0;i<num;i++){
      stars[i].update();
      stars[i].draw();
  }
}

function shooting(){


    for(var i=0;i<5;i++){
        stars[i].update();

        stars[i].draw();
    }

}