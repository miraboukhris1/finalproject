$(function(){
    $(".toggle").on("click", function(){
        if($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        } else {
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
        }
    });
});
/*payment shop*/
console.log("hello");
let tColorA = document.getElementById('tColorA'),
tColorB = document.getElementById('tColorB'),
tColorC = document.getElementById('tColorC'),
iconA = document.querySelector('.fa-credit-card'),
iconB = document.querySelector('.fa-building-columns'),
iconC = document.querySelector('.fa-wallet'),
cDetails = document.querySelector('.card-details');


function doFun(){
 tColorA.style.color = "greenyellow";
 tColorB.style.color = "#444";
 tColorC.style.color = "#444";
 iconA.style.color = "greenyellow";
 iconB.style.color = "#aaa";
 iconC.style.color = "#aaa";
 cDetails.style.display = "block";
}
function doFunA(){
 tColorA.style.color = "#444";
 tColorB.style.color = "greenyellow";
 tColorC.style.color = "#444";
 iconA.style.color = "#aaa";
 iconB.style.color = "greenyellow";
 iconC.style.color = "#aaa";
 cDetails.style.display = "none";
}
function doFunB(){
 tColorA.style.color = "#444";
 tColorB.style.color = "#444";
 tColorC.style.color = "greenyellow";
 iconA.style.color = "#aaa";
 iconB.style.color = "#aaa";
 iconC.style.color = "greenyellow";
 cDetails.style.display = "none";
}
let cNumber = document.getElementById('number');
cNumber.addEventListener('keyup', function(e){
 let num = cNumber.value;

 let newValue = '';
 num = num.replace(/\s/g, '');
 for(var i = 0; i < num.length; i++) {
  if(i%4 == 0 && i > 0) newValue = newValue.concat(' ');
  newValue = newValue.concat(num[i]);
  cNumber.value = newValue;
 }

 let ccNum = document.getElementById('c-number');
 if(num.length<16){
  ccNum.style.border="1px solid red";
 }else{
  ccNum.style.border="1px solid greenyellow";
 }
});

let eDate = document.getElementById('e-date');
eDate.addEventListener('keyup', function( e ){

 let newInput = eDate.value;

 if(e.which !== 8) {
  var numChars = e.target.value.length;
  if(numChars == 2){
   var thisVal = e.target.value;
   thisVal += '/';
   e.target.value = thisVal;
   console.log(thisVal.length)
  }
 }

 if(newInput.length<5){
  eDate.style.border="1px solid red";
 }else{
  eDate.style.border="1px solid greenyellow";
 }
});

let cvv = document.getElementById('cvv');
cvv.addEventListener('keyup', function(e){

 let elen = cvv.value;
 let cvvBox = document.getElementById('cvv-box');
 if(elen.length<3){
  cvvBox.style.border="1px solid red";
 }else{
  cvvBox.style.border="1px solid greenyellow";
 }
})




/*shop section*/

const products = [
    {
        id: 0,
        image: 'https://m.media-amazon.com/images/I/B1wANZB6VCS._CLa%7C2140%2C2000%7C51GGHMcBKCL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png',
        title: 'Palestinian Heritage T-Shirt',
        price: 120,
    },
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7F6Ih-3UTFvOAoPq2HkVQlbTmpojus47I2Q&s',
        title: 'Freedom Step Sneakers',
        price: 60,
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/519feypDzML._AC_SY580_.jpg',
        title: 'Shemagh Scarf',
        price: 230,
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAmqL4RIWFeJKGEl7WsICaySkC3EVv5Q9ZQ&s',
        title: 'Palestine Unity Cap',
        price: 100,
    },
    {
        id: 4,
        image: 'https://i.ebayimg.com/images/g/GBIAAOSw8aJlX83a/s-l1200.jpg',
        title: 'Cultural Heritage Bracelets',
        price: 20,
    },
    {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAW6L_nYDdjYkJT2ip-5PTTzfLGWPDC9BFMQ&s',
        title: 'Freedom Fighter Mug',
        price: 30,
    },
    {
        id: 6,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPOhKKnZ-lWzTGvRX9n_thsUyvT5GaYWuWA&s',
        title: 'Unity Carryall',
        price: 15,
    },
    {
        id: 7,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbY95wjRhUpA-B6-EzAmaV4yAZPqgEVomBcg&s',
        title: 'Resistance Hoodie',
        price: 25,
    }
];

const categories = [...new Set(products.map((item) => item))];

let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    const { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00dt</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    );
}).join('');

let cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "0.00 dt";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            const { image, title, price } = items;
            total += price;
            document.getElementById("total").innerHTML =  total + ".00"+"dt";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price}.00dt</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}








