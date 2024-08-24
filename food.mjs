import{postsFrame} from './post.mjs' ;

let x;
function food() {
    let images;
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(Response =>{
    images = Response.data
    let imgurl = images.categories
    console.log(images.categories);
//categories
    for (let i = 0; i < imgurl.length; i++) {
        // console.log(`this is url ${i}`,imgurl[i]);
        x = i+1000
        postsFrame(imgurl[i].strCategoryThumb, x);
    }
}) 
}


export{food};