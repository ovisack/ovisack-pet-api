

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error));
  }
  
  
  const loadDataByCategory = (category) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then(res => res.json())
        .then(data => displayData(data.data))
        .catch(error => console.log(error));
  }
  
  
  
  const loadDataByCategoryLogo = () => {
      fetch(`https://openapi.programming-hero.com/api/peddy/category/log`)
          .then(res => res.json())
          .then(data => displayData(data.data))
          .catch(error => console.log(error));
    }
  
  
  const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("Categories");
  
    categories.forEach((item) => {
        console.log(item);
  
        const button = document.createElement("button");
        button.classList = "btn btn-primary";
        button.innerText = item.category;
  
        
        button.addEventListener("click", () => {
            loadDataByCategory(item.category);
        });
  
        
        categoryContainer.append(button);
    });
  };
  
  const displayData = (data) => {
    const dataContainer = document.getElementById("data-img");
    dataContainer.innerHTML = ''; 
  
    data.forEach((img) => {
        console.log(img);
        const card = document.createElement("div");
        card.classList = "card";
        card.innerHTML = `
            <figure class="h-[200px]">
                <img src=${img.image} alt="Image" class="h-full object-cover"/>
            </figure>
            <div class="px-0 py-2 m-9">
                <h2>${img.name}</h2>
                <p>${img.description}</p>
               
            </div>`;
        dataContainer.append(card);
        
      
  
    });
  }
  
  
  loadCategories();
  