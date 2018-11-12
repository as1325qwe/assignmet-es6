let text=document.getElementById("text"),
    user=document.querySelector(".wrap .mian span"),
    but=document.querySelector(".wrap .mian button"),
    vul=document.querySelector(".wrap .list ul");

user.onclick=function(){this.style.backgroundColor=="chocolate"?this.style.backgroundColor="red":this.style.backgroundColor="chocolate"}

but.onclick=function(){
    if(text.value=="")
    {
        alert("不能为空");
        return;
    }
   vul.innerHTML+=`<li><span style="background-color:${user.style.backgroundColor} "></span>${text.value}</li>`;
    text.value=null;
}