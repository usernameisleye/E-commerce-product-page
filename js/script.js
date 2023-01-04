const itemsNum = document.querySelector('.items span');
const itemsBtns = document.querySelectorAll('.items div');
const cartNum = document.querySelector('.cart-count');

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
