
```javascript
let orders = [];

window.searchOrders = searchOrders;

document.addEventListener("DOMContentLoaded", () => {

loadOrders();

});

function loadOrders(){

orders = JSON.parse(localStorage.getItem("orders")) || [];

renderOrders();

}

function renderOrders(){

const container = document.getElementById("ordersContainer");

if(!container) return;

let revenue = 0;
let pending = 0;

container.innerHTML = "";

orders.forEach((order,index)=>{

revenue += Number(order.total || 0);

if(order.status==="Pending"){

pending++;

}

container.innerHTML += `

<div class="order-card">

<h3>

${order.orderNumber}

</h3>

<p>

👤 ${order.name}

</p>

<p>

📧 ${order.email}

</p>

<p>

📍 ${order.address}

</p>

<p>

💷 £${order.total}

</p>

<p>

Status:
<b>${order.status}</b>

</p>

<div class="order-actions">

<button
class="icon-btn edit"
onclick="editOrder(${index})">

✏️

</button>

<button
class="icon-btn delete"
onclick="deleteOrder(${index})">

🗑️

</button>

<button
class="icon-btn complete"
onclick="completeOrder(${index})">

✅

</button>

</div>

</div>

`;

});

document.getElementById("revenueCard").innerHTML="£"+revenue.toFixed(2);

document.getElementById("ordersCard").innerHTML=orders.length;

document.getElementById("pendingCard").innerHTML=pending;

const emails=[...new Set(orders.map(o=>o.email))];

document.getElementById("customersCard").innerHTML=emails.length;

}

window.deleteOrder=function(index){

if(confirm("Delete this order?")){

orders.splice(index,1);

localStorage.setItem("orders",JSON.stringify(orders));

renderOrders();

}

}

window.completeOrder=function(index){

orders[index].status="Completed";

localStorage.setItem("orders",JSON.stringify(orders));

renderOrders();

}

window.editOrder=function(index){

const newAddress=prompt(

"New Address",

orders[index].address

);

if(newAddress){

orders[index].address=newAddress;

localStorage.setItem("orders",JSON.stringify(orders));

renderOrders();

}

}

function searchOrders(){

const search=document.getElementById("searchOrders").value.toLowerCase();

document.querySelectorAll(".order-card").forEach(card=>{

if(card.innerText.toLowerCase().includes(search)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}
```
