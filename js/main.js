'use strict';

const mobileMenuOpen=document.querySelector('[nav-open]');
const mobileMenuClose=document.querySelector('[nav-close]');
const nav=document.querySelector('[nav-data]');

mobileMenuOpen.addEventListener('click',()=>{
    nav.classList.add('active');
});
mobileMenuClose.addEventListener('click',()=>{
    nav.classList.remove('active');
})