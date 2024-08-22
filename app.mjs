import { food } from './food.mjs';
document.querySelector('.food').addEventListener('click',()=>{
    
    food()
});
document.querySelector('.clear').addEventListener('click',()=>{
    window.location.reload()
})