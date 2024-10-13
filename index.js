const lodCategories=(data)=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res=>res.json(data))
    .then((data)=>displayCategories(data.categories))
     .catch(error =>console.log(error));

     const lodDataAll= () => {


   document.getElementById("spinner").style.display="none"


   console.log("ami to make valo  basi go ");


   console.log(lodDataAll);

} 

}



const handleSearch = () => {
 document.getElementById("spinner").style.display="block"
setTimeout(function (){
loadAllPhones()

},3000)

}



const loadData= (category)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then(res=>res.json())
    .then((data)=>displayData(data.data))
     .catch(error =>console.log(error));
}


// const lodePetName= () =>{
//   fetch("https://openapi.programming-hero.com/api/peddy/pet/cat")
//   .then(res =>res.json())
//   .then(data =>displayData(data.data))
//   .catch(error =>console.log(error))
// }


const displayData= (data) =>{
  const dataContainer= document.getElementById("data-img");
 
  dataContainer.innerHTML="";
data.forEach((img)=>{
    console.log(img);

    const card=document.createElement("div");
    card.classList="card";
    card.innerHTML=`

    <div class=" cart  w-72 m-7  shadow-xl">
  <figure>
    <img
      src=${img.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h1 class="font-bold text-3xl">${img.pet_name}</h1>

    <h2 class="card-title">${img.breed}</h2>
    <h2 class="card-title">${img.date_of_birth}</h2>
    <h2 class="card-title">${img.gender}</h2>
      <h2 class="card-title">${img.price}</h2>
      <div class="flex gap-3">
  <button class="card-title btn"><img
      src="download.png"
      alt="" class="w-6"></button>
   <button class=" font-bold btn text-[16px] ">Adopt</button>
 
  <button class=" font-bold text-[16px] btn">Details</button>

   
</div>
    </div>
    
  </div>
 
</div>
 

   `;
  dataContainer.append(card);




 })


// const likContainer= document.getElementById("data-img");
// likContainer.innerHTML="";
// data.forEach((imgs)=>{
//     console.log(imgs);

//     const div=document.createElement("div");
//     div.classList="div";
//     div.innerHTML=`
//     <div>  <div class="model"></div> </div>`


//     likContainer.append(div);


// })






}

















// create displayCategories 




const  displayCategories = (categories)=>{

  const categoryContainer =document.getElementById("Categories");
 

  categories.forEach((item) => {
      console.log(item);

      const button = document.createElement("button");
      button.classList = "btn btn-primary";
      button.innerText = item.category;

   
      
      button.addEventListener("click",() => {
        loadData(item.category);
      });

         
     
      
      categoryContainer.append(button);
      
  });
   
}



lodCategories()











































// const loadAllPhones =() =>{
//   document.getElementById("spinner").style.display="none"

  
// console.log("ami to make valo basi na");

// }



// // const cartLode= () => {
// //     document.getElementById("cart");
// // }




// const handleSearch = () => {
//  document.getElementById("spinner").style.display="block"
// setTimeout(function (){
// loadAllPhones()

// },3000)

// }