const btn=document.querySelector("#toggleBtn");
const msg=document.querySelector("#message");
btn.addEventListener("click",function(){
    msg.classList.toggle("hidden");

});