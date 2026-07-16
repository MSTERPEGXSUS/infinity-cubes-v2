
console.log("Infinity Cubes V2 Loaded");

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

```javascript
// --------------------------
// CUSTOM PRINT PRICE
// --------------------------

window.updateCustomPrice=function(){

const halfHours=

parseInt(

document.getElementById("printTime").value

)||1;

const total=

halfHours*0.5;

document.getElementById("customPrice").innerHTML=

total.toFixed(2);

}

// --------------------------
// CUSTOM REQUEST
// --------------------------

window.submitCustomRequest=function(){

const request={

name:

document.getElementById("customName").value,

email:

document.getElementById("customEmail").value,

address:

document.getElementById("customAddress").value,

colour:

document.getElementById("customColour").value,

material:

document.getElementById("customMaterial").value,

description:

document.getElementById("customDescription").value,

requirements:

document.getElementById("specialRequirements").value,

halfHours:

document.getElementById("printTime").value,

price:

document.getElementById("customPrice").innerHTML

};

console.log(request);

alert(

"Custom request submitted! Firebase integration is next."

);

}
```
