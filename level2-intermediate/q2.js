const fruits=["apple","mango","orange","grapes","Watermelon"];
const fruitslist=document.querySelector("#fruitList");
fruits.forEach(function(fruit){
    const list=document.createElement("li");
    list.textContent=fruit;
    fruitslist.append(list);
});
