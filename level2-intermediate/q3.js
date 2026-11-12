const btn=document.querySelector("#themeBtn");
const bg=document.body;
btn.addEventListener("click",function(){
    bg.classList.toggle("dark");
})