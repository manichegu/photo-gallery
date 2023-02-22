let images_details=[
    {
        "image":"image/image1.jpeg",
        "thumbnail":"Every thought is a seed. If you plant crab apples, don't count on harvesting Golden Delicious."
    },
    {
        "image":"image/image2.jpeg",
        "thumbnail":"Breakfast without orange juice is like a day without sunshine."
    },
    {
        "image":"image/image3.jpeg",
        "thumbnail":"Welcome to the planet of the grapes."
    },
    {
        "image":"image/image4.jpeg",
        "thumbnail":"An apple a day keeps doctor away"
    },
    {
        "image":"image/image5.jpeg",
        "thumbnail":"You'll never regret eating blueberries or working up a sweat."
    },
    {
        "image":"image/image6.jpeg",
        "thumbnail":"Life keeps throwing me lemons because I make the best lemonade."
    },
    {
        "image":"image/image7.jpeg",
        "thumbnail":"Strawberries! Fruit from the heart."
    },
    {
        "image":"image/image8.jpeg",
        "thumbnail":"Strawberries are native to the temperate regions of the Northern Hemisphere, and cultivated varieties are widely grown throughout the world."
    },
    {
        "image":"image/image9.jpeg",
        "thumbnail":"Trees are good for the soul."
    },
    {
        "image":"image/image10.jpeg",
        "thumbnail":"Veggies are good for health."
    },
]
var i;
let present_img="image/image1.jpeg";

for(i=0;i<images_details.length;i++){
    let new_div=document.createElement("div");
    let img_id="img"+i;
new_div.innerHTML=`<img class="small_img" id=${img_id} src=${images_details[i].image}>`
// new_div.id="img"+i;
console.log(new_div.id);
document.getElementById("add_gallery_many_img").append(new_div);
let id=document.getElementById("img"+i);
id.addEventListener("click",(e)=>{
    document.getElementById("main_img").src=document.getElementById(e.currentTarget.id).src;
    for(j=0;j<images_details.length;j++){
        if(document.getElementById(e.currentTarget.id).getAttribute("src")==images_details[j].image){
            thumb_nail.textContent=`${images_details[j].thumbnail}`;
        }
    }  

    console.log();
    var j,k;
    for(k=0;k<document.body.children[1].childNodes[3].children.length;k++){
        console.log("hiee");
                        document.getElementById(document.body.children[1].childNodes[3].children[k].children[0].id).style.backgroundColor="white";
                    }
            for(j=0;j<document.body.children[1].childNodes[3].children.length;j++){
                console.log(document.body.children[1].childNodes[3].children[j].children[0].src);
                if(document.body.children[1].childNodes[3].children[j].children[0].src==document.getElementById("main_img").src){
    
                   
                    document.getElementById(document.body.children[1].childNodes[3].children[j].children[0].id).style.backgroundColor="gray";

                    break;
                }
            }

})

}
document.getElementById("move_front_fn").addEventListener("click",()=>{

    console.log(present_img);
    for(i=0;i<images_details.length;i++){
        if(images_details[i].image==present_img)
        {
            console.log(document.body.children[1].childNodes[3].children[0].children[0]);
            var j;
            
            document.getElementById("main_img").src=images_details[(i+1)%(images_details.length)].image;
            present_img=images_details[(i+1)%(images_details.length)].image;

            for(k=0;k<document.body.children[1].childNodes[3].children.length;k++){
                        document.getElementById(document.body.children[1].childNodes[3].children[k].children[0].id).style.backgroundColor="white";
                    }
            for(j=0;j<document.body.children[1].childNodes[3].children.length;j++){
                console.log(document.body.children[1].childNodes[3].children[j].children[0].src);
                if(document.body.children[1].childNodes[3].children[j].children[0].src==document.getElementById("main_img").src){
                    document.getElementById(document.body.children[1].childNodes[3].children[j].children[0].id).scrollIntoView();
                   
                    document.getElementById(document.body.children[1].childNodes[3].children[j].children[0].id).style.backgroundColor="gray";


                    for(j=0;j<images_details.length;j++){
        if(present_img==images_details[j].image){
            thumb_nail.textContent=`${images_details[j].thumbnail}`;
        }
    }  
                    break;
                }
            }
            break;
            
        }
    }
})
document.getElementById("move_back_fn").addEventListener("click",()=>{
    console.log(present_img);
    for(i=0;i<images_details.length;i++){
        if(images_details[i].image==present_img)
        {
            document.getElementById("main_img").src=images_details[(i+images_details.length-1)%(images_details.length)].image;
            present_img=images_details[(i+images_details.length-1)%(images_details.length)].image;

            for(k=0;k<document.body.children[1].childNodes[3].children.length;k++){
                        document.getElementById(document.body.children[1].childNodes[3].children[k].children[0].id).style.backgroundColor="white";
                    }
            for(j=0;j<document.body.children[1].childNodes[3].children.length;j++){
                console.log(document.body.children[1].childNodes[3].children[j].children[0].src);
                if(document.body.children[1].childNodes[3].children[j].children[0].src==document.getElementById("main_img").src){
                    document.getElementById(document.body.children[1].childNodes[3].children[j].children[0].id).scrollIntoView();
                   
                    document.getElementById(document.body.children[1].childNodes[3].children[j].children[0].id).style.backgroundColor="gray";

                    for(j=0;j<images_details.length;j++){
        if(present_img==images_details[j].image){
            thumb_nail.textContent=`${images_details[j].thumbnail}`;
        }
    }  
                    break;
                }
            }
    
            break;
        }
    }
})
