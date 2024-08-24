const posts = document.querySelector('.MainPage');
 
let ids;
function postsFrame(src, x) {
    ids=x;
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class','postFram');

    let newImge = document.createElement('img');
    newImge.setAttribute('src',src);
    newImge.setAttribute('class', 'PostImge');

    let reactionButtons = document.createElement('div');
    reactionButtons.setAttribute('class','reaction');

    let r1 =  document.createElement('img');
    r1.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Love_or_Heart_transparent.png/1124px-Love_or_Heart_transparent.png');
    r1.setAttribute('id',`r1${x}`);
    r1.setAttribute('class',`like`);

   
    let r2 =  document.createElement('img');
    r2.setAttribute('src',"https://static.vecteezy.com/system/resources/thumbnails/018/741/992/small/white-origami-paper-plane-deliver-message-symbol-interface-theme-3d-icon-render-illustration-isolated-png.png");
    r2.setAttribute('id',`r2${x}`);
    r2.setAttribute('class',`share`);

    let r3 =  document.createElement('img');
    r3.setAttribute('src','https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/512/comment-icon.png');
    r3.setAttribute('id',`r3${x}`);
    r3.setAttribute('class',`comment`);

    reactionButtons.appendChild(r1);
    reactionButtons.appendChild(r2); 
    reactionButtons.appendChild(r3);
    

    newDiv.appendChild(newImge); 
    newDiv.appendChild(reactionButtons);
    posts.appendChild(newDiv);
}




export{postsFrame};