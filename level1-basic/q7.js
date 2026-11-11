const userInput=document.querySelector("#user");
const userOutput=document.querySelector("#output");
userInput.addEventListener("input",function(){
    userOutput.textContent=userInput.value;
});