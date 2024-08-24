import { food } from './food.mjs';
import { anime } from './anime.mjs';
import{postsFrame} from './post.mjs' ;

document.querySelector('.food').addEventListener('click',()=>{
    
    food()
});
document.querySelector('.clear').addEventListener('click',()=>{
    window.location.reload()
})
document.querySelector('.anime').addEventListener('click',()=>{
    anime()
})


document.querySelector('.MainPage').addEventListener('click', (event) => {
   let act = event.target
    if (act.classList.contains('like')) {
        let clickedId = document.getElementById(act.id);
        clickedId.setAttribute('src','https://png.pngtree.com/png-vector/20220428/ourmid/pngtree-smooth-glossy-heart-vector-file-ai-and-png-png-image_4557871.png') 
        console.log('Like button clicked',clickedId);
    } else if (act.classList.contains('share')) {
        let imge = document.getElementById(act.id);
        let lastChar = imge.id.charAt(imge.id.length - 1);
        let clickedId = document.querySelectorAll('.PostImge');

        console.log(clickedId[0].src,lastChar,'Share button clicked');
        window.open(clickedId[lastChar].src)

    } else if (event.target.classList.contains('comment')) {
        console.log('Comment button clicked');
        prompt('Enter your comment');

    }
});