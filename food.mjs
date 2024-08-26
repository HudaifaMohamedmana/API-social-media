import{postsFrame} from './post.mjs' ;

let x;
async function food() {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const images = response.data;
    const imgurl = images.categories;
    console.log(imgurl);

//categories
    for (let i = 0; i < imgurl.length; i++) {
        // console.log(`this is url ${i}`,imgurl[i]);
        x = i+1000
        postsFrame(imgurl[i].strCategoryThumb, x);
    }

}
 

export { food };