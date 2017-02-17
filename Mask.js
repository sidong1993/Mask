"use strict";
function Mask() {
    this.MaskColor="#000000";
}
Mask.prototype.SetWH= function (w,h){
     if (isNaN(w) || isNaN (h)) 
        throw new TypeError();
    this.Width=w;
    this.Height=h;
};
Mask.prototype.SetBackgroundImg= function (url){
    this.BackgroundImg=url;
};
Mask.prototype.SetMaskColor= function (r,g,b){
    this.R=r;
    this.G=g;
    this.B=b;
};
Mask.prototype.SetOpacity= function (opacity){
    this.Opacity=opacity;
};
Mask.prototype.SetPosition=function(l,t){
    this.left=l;
    this.top=t;
}
Mask.prototype.DrawBackground=function (BackgourndId,MaskId){
    var canvas=document.getElementById(BackgourndId);
    var ctx=canvas.getContext("2d");
    var w=this.Width;
    var h=this.Height;
    canvas.width=w;
    canvas.height=h;
    canvas.style.position="absolute";
    canvas.style.left=this.left+"px";
    canvas.style.top=this.top+"px";
    var img = new Image();
    img.onload = function (){
        ctx.drawImage(img,0,0,w,h);
    }
        img.src=this.BackgroundImg;
    var MaskCavans=document.getElementById(MaskId);
    MaskCavans.width=w;
    MaskCavans.height=h;
    MaskCavans.style.position="absolute";
    MaskCavans.style.left=this.left+"px";
    MaskCavans.style.top=this.top+"px";
    
    
};
function SetCirCle(r,id,target,type){
    var canvas=document.getElementById(id);
    canvas.height=target.Height;
    canvas.width=target.Width;
    target.Path=canvas.getContext("2d");
    target.Path.beginPath();
    target.Path.fillRect(0,0,target.Width,target.Height);
    target.Path.fillStyle="rgb("+target.R+","+target.G+","+target.B+")";
    target.Path.fill(); 
    if(type==1)
        target.Path.globalCompositeOperation="destination-out";
    else
        target.Path.globalCompositeOperation="destination-in";
    target.Path.arc(target.Width/2,target.Height/2,r,0,Math.PI*2,true);
    target.Path.fillStyle="rgb("+target.R+","+target.G+","+target.B+")";
    target.Path.fill();
    canvas.style.opacity=target.Opacity;
    
}
function SetRecPath(w,h,id,target,type){
    var canvas=document.getElementById(id);
    canvas.height=target.Height;
    canvas.width=target.Width;
    target.Path=canvas.getContext("2d");
    target.Path.fillRect(0,0,target.Width,target.Height);
    target.Path.fillStyle="rgb("+target.R+","+target.G+","+target.B+")";
    target.Path.fill();
    if(type==1)
        target.Path.globalCompositeOperation="destination-out";
    else
        target.Path.globalCompositeOperation="destination-in";
    target.Path.fillRect(target.Width/2-w/2,target.Height/2-h/2,w,h);
    target.Path.fillStyle="rgb("+target.R+","+target.G+","+target.B+")";
    target.Path.fill();
    canvas.style.opacity=target.Opacity;

}
function SetTextPath(text,size,font1,id,target,type){
    var canvas=document.getElementById(id);
    canvas.height=target.Height;
    canvas.width=target.Width;
    target.Path=canvas.getContext("2d");
    target.Path.fillRect(0,0,target.Width,target.Height);
    target.Path.fillStyle="rgb("+target.R+","+target.G+","+target.B+")";
    target.Path.fill();
    if(type==1)
        target.Path.globalCompositeOperation="destination-out";
    else
        target.Path.globalCompositeOperation="destination-in";
    target.Path.fillStyle="rgb("+target.R+","+target.G+","+target.B+")";
    target.Path.font=size+"px"+" "+font1;
    target.Path.fillText(text,Math.round(target.Width/2-target.Path.measureText(text).width/2),Math.round(target.Height/2+size/2)); 
    canvas.style.opacity=target.Opacity;
}

