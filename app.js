let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    Navbar.classList.remove('active');
}
let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    Navbar.classList.remove('active');
}


let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    Navbar.classList.remove('active');
}


let Navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    Navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active'); 
}

window.onscroll = () => {
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    Navbar.classList.remove('active'); 
}


//Navbar Scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});







//swipper
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        568: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 2,
        },

        1020: {
            slidesPerView: 3,
        },

    },

});

// --- Search to Google ---
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
if(searchBtn){
    searchBtn.addEventListener('click', () => {
        const q = (searchInput && searchInput.value) ? searchInput.value.trim() : '';
        if(q) window.open('https://www.google.com/search?q=' + encodeURIComponent(q), '_blank');
    });
}
if(searchInput){
    searchInput.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
            const q = searchInput.value.trim();
            if(q) window.open('https://www.google.com/search?q=' + encodeURIComponent(q), '_blank');
        }
    });
}

// --- Cart functionality (localStorage-backed) ---
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');

function storageGet(){
    try{ return JSON.parse(localStorage.getItem('gh_cart') || '[]'); }catch(e){ return []; }
}
function storageSave(arr){ localStorage.setItem('gh_cart', JSON.stringify(arr)); }

function renderCart(){
    if(!cartItemsEl) return;
    const items = storageGet();
    cartItemsEl.innerHTML = '';
    if(items.length === 0){
        cartItemsEl.innerHTML = '<p>No items in cart.</p>';
        if(cartTotalEl) cartTotalEl.textContent = 'Total: $0.00';
        return;
    }
    items.forEach((it, idx) => {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerHTML = `
            <img src="${it.img}" alt="">
            <div class="text">
                <h3>${it.name}</h3>
                <span>$${it.price.toFixed(2)}</span>
                <span>${it.qty}x</span>
            </div>
            <button class="remove-item" data-index="${idx}" title="Remove item"><i class='bx bxs-trash-alt'></i></button>
        `;
        cartItemsEl.appendChild(box);
    });
    const total = items.reduce((s,i) => s + (i.price * i.qty), 0);
    if(cartTotalEl) cartTotalEl.textContent = 'Total: $' + total.toFixed(2);

    // attach remove handlers
    cartItemsEl.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const i = parseInt(btn.dataset.index, 10);
            const arr = storageGet();
            arr.splice(i,1);
            storageSave(arr);
            renderCart();
        });
    });
}

// add-to-cart buttons (handles clicks across the page)
document.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('.add-to-cart');
    if(!btn) return;
    const name = btn.dataset.name || 'Item';
    const price = parseFloat(btn.dataset.price) || 0;
    const img = btn.dataset.img || '';
    const arr = storageGet();
    const existing = arr.find(x => x.name === name && x.img === img);
    if(existing){ existing.qty = (existing.qty || 0) + 1; }
    else { arr.push({ name, price, img, qty: 1 }); }
    storageSave(arr);
    renderCart();
    // open cart panel when item added
    if(typeof cart !== 'undefined' && cart.classList) cart.classList.add('active');
});

// initialize cart on load
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});
