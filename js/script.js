const itemsNum = document.querySelector('.items span');
const itemsBtns = document.querySelectorAll('.items div');
const cartNum = document.querySelector('.cart-count');
const total = document.querySelector('.total');
const itemsNumber = document.querySelector('.num');
const cart = document.querySelector('.cart');
const cartImg = document.querySelector('.cart-img');
const addToCart = document.querySelector('.cart-details button')
const cartContent = document.querySelector('.cart-content');

addToCart.addEventListener('click', addItem);

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
    openCartVar.classList.add('open');
    
    document.addEventListener('click', e =>{
        if(e.target.classList.contains('body')){
            openCartVar.classList.remove('open');
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
                <button>Checkout</button>
            </div>`
    cartContent.innerHTML = items;           
}

cartContent.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        emptyCart = '';
        emptyCart += `<div class="cart">
                        <p>Cart</p>
                        <span class="empty-msg">Your cart is empty</span>
                    </div>`
        cartContent.innerHTML = emptyCart;
    }
})