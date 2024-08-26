// https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anim
import{postsFrame} from './post.mjs' ;

const apiKey = 'Xt4D6lMWKyFObOxW4PkhlJbubXxvG7kH90CC4nsd6Cgfj8SBgtQDgpjB';
const apiUrl = 'https://api.pexels.com/v1/search?query=anime';
let x;

async function anime() {
    const response = await axios.get(apiUrl, { headers: { 'Authorization': apiKey } });
    const images = response.data.photos;
           console.log(images);
            for (let i = 0; i <= 14; i++) {
                x = i;
                // console.log(`this is url ${i}`,images[i].src.original);
                postsFrame(images[i].src.original ,x);
            }
 }
 
 export{anime};