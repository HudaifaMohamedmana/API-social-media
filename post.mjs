const posts = document.querySelector('.MainPage');
 
function postsFrame(src) {
    let newDiv = document.createElement('div')
    newDiv.setAttribute('class','postFram');
    let newImge = document.createElement('img')
    newImge.setAttribute('src',src);
    let reactionButtons = document.createElement('div')
    reactionButtons.setAttribute('id','reaction');
    let r1 =  document.createElement('img')
    r1.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Love_or_Heart_transparent.png/1124px-Love_or_Heart_transparent.png');
    let r2 =  document.createElement('img')
    r2.setAttribute('src',"https://static.vecteezy.com/system/resources/thumbnails/018/741/992/small/white-origami-paper-plane-deliver-message-symbol-interface-theme-3d-icon-render-illustration-isolated-png.png");
    let r3 =  document.createElement('img')
    r3.setAttribute('src','https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/512/comment-icon.png');



    
    reactionButtons.appendChild(r1);
    reactionButtons.appendChild(r2);
    reactionButtons.appendChild(r3); 

    newDiv.appendChild(reactionButtons);

    newDiv.appendChild(newImge); 
    
    posts.appendChild(newDiv);
}

export{postsFrame};