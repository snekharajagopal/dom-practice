const msg=document.querySelector("#message");
const char=document.querySelector("#charCount");
msg.addEventListener("input",function(){
    char.textContent=msg.value.length+"/100";

});