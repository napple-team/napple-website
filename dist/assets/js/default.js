!function(a,e,t){function r(a){for(var e=o.width+20,t=o.height+20,r=i.numChildren-1,n=1;n<r;n++){var h=i.getChildAt(n);h.alpha<1&&(h.alpha+=.01),h.x=(h.x+10+h.velX+e)%e-10,h.y=(h.y+10+h.velY+t)%t-10,h.rotation+=h.rotate}i.update(a)}var o,i,r;window.addEventListener("load",function(){o=document.getElementById("background"),i=new a.Stage(o);for(var e=["#EA3348","#ED8032","#9959A5","#FFE734","#8ACFCB","#1E88E5","#283593"],t=0;t<75;t++){var n=new a.Shape,h=Math.floor(5*Math.random()+5),d=e[Math.floor(Math.random()*e.length)];switch(Math.floor(4*Math.random())){case 0:n.graphics.setStrokeStyle(2).beginStroke(d).drawCircle(0,0,h);break;case 1:n.graphics.beginFill(d).drawCircle(0,0,h);break;case 2:n.graphics.setStrokeStyle(2).beginStroke(d).drawPolyStar(0,0,h,3,0,0);break;case 3:n.graphics.beginFill(d).drawPolyStar(0,0,h,3,0,0)}n.x=Math.random()*o.width,n.y=Math.random()*o.height,n.velX=.5*Math.random()-.25,n.velY=-.5*Math.random(),n.rotate=3*Math.random(),n.snapToPixel=!0,n.alpha=0,n.cache(-15,-15,30,30),i.addChild(n)}a.Ticker.timingMode=a.Ticker.RAF,a.Ticker.addEventListener("tick",r)})}(createjs);