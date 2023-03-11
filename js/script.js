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
const mainImage2 = document.querySelector(".img-center");
const thumbNails = document.querySelectorAll(".thumbnails img");
const options = document.querySelector(".options");
const options2 = document.querySelector(".options2");
const lightBoxOverlay = document.querySelector(".lightbox-overlay");
const lightClose = document.querySelector(".lightbox-close");

// Checking for media query matchs
const mediaQuery = window.matchMedia('(max-width: 375px)');

addToCart.addEventListener('click', addItem);
options.addEventListener("click", moveImg);
options2.addEventListener("click", moveMobileImg)
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

        if (items){
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

// If checkout or delete btn is clicked, empty the cart
cartContent.addEventListener('click', e =>{
    if(e.target.classList.contains("delete") || e.target.classList.contains("checkout")){
        emptyCart = '';
        emptyCart += `<div class="cart">
                        <p>Cart</p>
                        <span class="empty-msg">Your cart is empty</span>
                    </div>`
        cartContent.innerHTML = emptyCart;
        document.querySelector('.overlay').classList.remove('active');
    }
})

// Open menu tab
function showUl(){
    ulTab.classList.add('show-ul');
    document.querySelector('.overlay').classList.add('active');
}

// Close menu tab
function closeUl(){
    ulTab.classList.remove('show-ul');
    document.querySelector('.overlay').classList.remove('active');
}

// Open lightbox if media query is not in mobile view
function openLightBox(){
    if(mediaQuery.matches){
        return
    }else{
        lightBoxOverlay.style.display = "flex";
    }
}
// Close lightbox
function closeLightBox(){
    lightBoxOverlay.style.display = "none";
}

// Change main image when thumbnail is clicked
Array.from(thumbNails).forEach((img) => {
    img.addEventListener("click", () => {
        Array.from(thumbNails).forEach((i) => {
            i.classList.remove("active")
        })
        img.classList.add("active");

        Array.from(thumbNails).forEach((i) => {
            if(i.getAttribute("src") === img.getAttribute("src")){
                i.classList.add("active");
            }
        })
        mainImage.setAttribute("src", img.getAttribute("src").split("-thumbnail").join(""));
        mainImage2.setAttribute("src", img.getAttribute("src").split("-thumbnail").join(""));
    })
})

// Next and Previous options
function moveImg(e){
    if(e.target.classList.contains("next")){

        let num = document.querySelector(".lightbox-subs img.active").getAttribute("data-number");

        Array.from(thumbNails).forEach(i => {
            i.classList.remove("active");
        });

        if(num < 4){
            num++;
            let source = document.querySelector(`[data-number = '${num}']`);

            source.classList.add("active");
            mainImage.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));
            mainImage2.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));

            Array.from(thumbNails).forEach((i)=>{
                if(i.getAttribute("src") === source.getAttribute("src")){
                    i.classList.add("active")
                }
            })

        }

        else{
            num = 1 ;
            let source = document.querySelector(`[data-number = '${num}']`);

            source.classList.add("active");
            mainImage.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));
            mainImage2.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));    

            Array.from(thumbNails).forEach((i)=>{
                if(i.getAttribute("src") == source.getAttribute("src")){
                    i.classList.add("active")
                }
            })
    }
    }
    else if (e.target.classList.contains("previous")){
        let num = document.querySelector(".lightbox-subs img.active").getAttribute("data-number");


        Array.from(thumbNails).forEach((i)=>{
            i.classList.remove("active");
        });  

        if(num > 1){
                num--;
                let source = document.querySelector(`[data-number = '${num}']`);

                source.classList.add("active");
                mainImage.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));
                mainImage2.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));

                Array.from(thumbNails).forEach((i)=>{
                    if(i.getAttribute("src") == source.getAttribute("src")){
                        i.classList.add("active")
                    }
                })
            }
            else{
                num = 4 ;
                let source = document.querySelector(`[data-number = '${num}']`);
        
                source.classList.add("active");
                mainImage.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));
                mainImage2.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));
        
                Array.from(thumbNails).forEach((i)=>{
                    if(i.getAttribute("src") === source.getAttribute("src")){
                        i.classList.add("active")
                    }
                })
            }
    }
}

function moveMobileImg(e){
    if(e.target.classList.contains("nxt")){

        let num = document.querySelector(".lightbox-subs img.active").getAttribute("data-number");

        Array.from(thumbNails).forEach(i => {
            i.classList.remove("active");
        });

        if(num < 4){
            num++;
            let source = document.querySelector(`[data-number = '${num}']`);

            source.classList.add("active");
            mainImage.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));
            mainImage2.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));

            Array.from(thumbNails).forEach((i)=>{
                if(i.getAttribute("src") === source.getAttribute("src")){
                    i.classList.add("active")
                }
            })

        }

        else{
            num = 1 ;
            let source = document.querySelector(`[data-number = '${num}']`);

            source.classList.add("active");
            mainImage.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));
            mainImage2.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));    

            Array.from(thumbNails).forEach((i)=>{
                if(i.getAttribute("src") == source.getAttribute("src")){
                    i.classList.add("active")
                }
            })
    }
    }
    else if (e.target.classList.contains("prev")){
        let num = document.querySelector(".lightbox-subs img.active").getAttribute("data-number");


        Array.from(thumbNails).forEach((i)=>{
            i.classList.remove("active");
        });  

        if(num > 1){
                num--;
                let source = document.querySelector(`[data-number = '${num}']`);

                source.classList.add("active");
                mainImage.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));
                mainImage2.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));

                Array.from(thumbNails).forEach((i)=>{
                    if(i.getAttribute("src") == source.getAttribute("src")){
                        i.classList.add("active")
                    }
                })
            }
            else{
                num = 4 ;
                let source = document.querySelector(`[data-number = '${num}']`);
        
                source.classList.add("active");
                mainImage.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));
                mainImage2.setAttribute("src", source.getAttribute("src").split("-thumbnail").join(""));
        
                Array.from(thumbNails).forEach((i)=>{
                    if(i.getAttribute("src") === source.getAttribute("src")){
                        i.classList.add("active")
                    }
                })
            }
    }
}