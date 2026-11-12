const mainImg=document.querySelector("#mainImage");
const thumbImg=document.querySelectorAll(".thumbnail");
thumbImg.forEach(function(img){
    img.addEventListener("click",function(){
        mainImg.src=img.getAttribute("data-src");

    })
});
