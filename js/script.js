const itemsNum = document.querySelector('.items span');
const itemsBtns = document.querySelectorAll('.items div');
let cartNum = document.querySelector('.cart-count');
let total = document.querySelector('.total');
let itemsNumber = document.querySelector('.num');
const cart = document.querySelector('.cart');
const cartImg = document.querySelector('.cart-img');
const addToCart = document.querySelector('.cart-details button');
const cartContent = document.querySelector('.cart-content');
const showUlBtn = document.querySelector('.tab');
const ulTab = document.querySelector('.links ul');
const closeUlBtn = document.querySelector('.links ul img');
const mainImage = document.querySelector(".main-image");
const lightBoxOverlay = document.querySelector(".lightbox-overlay");
const lightClose = document.querySelector(".lightbox-close");

// Checking for media query matchs
const mediaQuery = window.matchMedia('(max-width: 375px)');

addToCart.addEventListener('click', addItem);
showUlBtn.addEventListener('click', showUl);
closeUlBtn.addEventListener('click', closeUl);
mainImage.addEventListener("click", openLightBox);
lightClose.addEventListener("click", closeLightBox);

let count = 0;
let items = '';


itemsBtns.forEach(btn =>{
    btn.addEventListener('click', e =>{
        const type = e.target.classList;
        if (type.contains('minus')){
            if(count > 0){
                count --;
            }
        }
        else if (type.contains('plus')){
            count ++;
        }
        else{return}
        itemsNum.innerText = count; 
        cartNum.innerText = count;
        itemsNumber = count;
        total = `$${125 * count}`;

        if (cartNum.innerText > 0){
            cartNum.style.display = 'block';
        }
        else{
            cartNum.style.display = 'none';
        }
    })
})

function openCart(openedCart){
    let openCartVar = openedCart.parentElement.lastElementChild.firstElementChild
    openCartVar.classList.toggle('open');
    document.querySelector('.overlay').classList.toggle('active');
    cartNum.style.display = 'none';
    
    document.addEventListener('click', e =>{
        if(e.target.classList.contains('overlay')){
            openCartVar.classList.remove('open');
            document.querySelector('.overlay').classList.remove('active');
            cartNum.style.display = 'block';

        }
    }
    )
   
} 


function addItem(){
    items += `<div class="cart">
                <p>Cart</p>
                <div class="">
                    <img src="./images/image-product-1-thumbnail.jpg" alt="" >

                    <div class="infos">
                        <p>Fall Limited Edition Sneakers</p>
                        <p>$125 x <span class="num">${itemsNumber}</span><span class="total">${total}</span></p>
                    </div>

                    <img class="delete" src="./images/icon-delete.svg" alt="">
                </div>
                <button class="checkout">Checkout</button>
            </div>`

    if(count > 0){
        cartContent.innerHTML = items; 
    }else{return}               
}

cartContent.addEventListener('click', e =>{
    if(e.target.classList.contains("delete") || e.target.classList.contains("checkout")){
        emptyCart = '';
        emptyCart += `<div class="cart">
                        <p>Cart</p>
                        <span class="empty-msg">Your cart is empty</span>
                    </div>`
        cartContent.innerHTML = emptyCart;
        document.querySelector('.overlay').classList.remove('active');
        location.reload();
    }
})

function showUl(){
    ulTab.classList.add('show-ul');
    document.querySelector('.overlay').classList.add('active');
}

function closeUl(){
    ulTab.classList.remove('show-ul');
    document.querySelector('.overlay').classList.remove('active');
}

let selectedImg = ""
function openLightBox(){
    if(mediaQuery.matches){
        return
    }else{
        lightBoxOverlay.style.display = "flex";
    }
}
function closeLightBox(){
    lightBoxOverlay.style.display = "none";
}
