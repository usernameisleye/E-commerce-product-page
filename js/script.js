const itemsNum = document.querySelector('.items span');
const itemsBtns = document.querySelectorAll('.items div');
const cartNum = document.querySelector('.cart-count');
const cart = document.querySelector('.cart');
const cartImg = document.querySelector('.cart-img');
const addToCart = document.querySelector('.cart-details button')
const cartContent = document.querySelector('.cart-content');

let count = 0;

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

        if (cartNum.innerText > 0){
            cartNum.style.display = 'block';
        }
        else{
            cartNum.style.display = 'none';
        }
    })
})
//probshere
function openCart(openedCart){
    let openCartVar = openedCart.parentElement.lastElementChild.firstElementChild
    openCartVar.classList.add('open');
    
    // document.addEventListener('click', e =>{
    //     if(e.target.tagName == 'DiV'){
    //         openCartVar.classList.remove('open');
    //     }
    // }
    // )
} 
