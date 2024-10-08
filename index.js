const lodCategories=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res=>res.json())
    .then((data)=>displayCategories(data.categories))
     .catch(error =>console.log(error));
}


const loadData= (category)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then(res=>res.json())
    .then((data)=>displayData(data.data))
     .catch(error =>console.log(error));
}



const displayData= (data) =>{
  const dataContainer= document.getElementById("data-img");
  dataContainer.innerHTML="";
data.forEach((img)=>{
    console.log(img);
    const card=document.createElement("div");
    card.classList="card";
    card.innerHTML=`


    <div class="card bg-base-100 w-60 shadow-xl">
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
      <h2 class="card-title">  ${img.price}</h2>
  
<button onclick="" class="btn btn-primary">Details</button>
    </div>
  </div>
</div>

   `;
  dataContainer.append(card);
})
}

//create displayCategories 


// category
// : 
// "Cat"
// category_icon
// : 
// "https://i.ibb.co.com/N7dM2K1/cat.png"
// id
// : 
// 1

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























