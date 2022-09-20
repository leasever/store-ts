import products from "./products";

console.log(products);

products.map((product, index) => {
  document.getElementById(
    "product",
  )!.innerHTML += ` <div class="col" key="${index}" >
      <div class="card">
         <a href="#staticBackdrop" data-bs-toggle="modal" id="modalProduct${index}"><img src="${product.image[0]
    }" class="card-img-top" alt="${product.name}"></a>
         <div class="card-body">
            <p class="visually-hidden" id="keyindex" >${index}</p>
            <h5 class="card-title" id="productname" >${product.name}</h5>
            <p class="card-text" id="productprice" >$ ${product.price}</p>
            <div>
            <i class=
            ${product.rating >= 1
      ? "'fas  fa-star'"
      : product.rating >= 0.5
        ? "'fas fa-star-half-alt'"
        : "'far fa-star'"
    }></i>
              <i class=  
            ${product.rating >= 2
      ? "'fas fa-star'"
      : product.rating >= 1.5
        ? "'fas fa-star-half-alt'"
        : "'far fa-star'"
    }></i>
            <i class=
              ${product.rating >= 3
      ? "'fas fa-star'"
      : product.rating >= 2.5
        ? "'fas fa-star-half-alt'"
        : "'far fa-star'"
    }></i>
            <i class=
              ${product.rating >= 4
      ? "'fas fa-star'"
      : product.rating >= 3.5
        ? "'fas fa-star-half-alt'"
        : "'far fa-star'"
    }></i>
            <i class=
              ${product.rating >= 5
      ? "'fas fa-star'"
      : product.rating >= 4.5
        ? "'fas fa-star-half-alt'"
        : "'far fa-star'"
    }></i>
            </div>
         </div>
         <div class="d-grid col-6 mx-auto mb-3">
            <button class="btn btn-outline-dark btn-custom text-break" type="button">Añadir&nbsp;
               <i class="fa-solid fa-bag-shopping"></i>
            </button>
         </div>
      </div>
   </div>`;
});

products.map((product, index) => {
  document.getElementById(
    "product",
  )!.innerHTML += ` <div class="col" key="${index}" >
      <div class="card">
        <a href="#staticBackdrop" data-bs-toggle="modal" id="modalProduct${index}">
         <img src="${product.image[0]}" class="card-img-top" alt="${product.name}">
         </a>
         <div class="card-body">
            <p class="visually-hidden" id="keyindex" >${index}</p>
            <h5 class="card-title" id="productname" >${product.name}</h5>
            <p class="card-text" id="productprice" >$ ${product.price}</p>
            <div>
            <i class=
            ${product.rating >= 1
      ? "'fas  fa-star'"
      : product.rating >= 0.5
        ? "'fas fa-star-half-alt'"
        : "'far fa-star'"
    }></i>
              <i class=  
            ${product.rating >= 2
      ? "'fas fa-star'"
      : product.rating >= 1.5
        ? "'fas fa-star-half-alt'"
        : "'far fa-star'"
    }></i>
            <i class=
              ${product.rating >= 3
      ? "'fas fa-star'"
      : product.rating >= 2.5
        ? "'fas fa-star-half-alt'"
        : "'far fa-star'"
    }></i>
            <i class=
              ${product.rating >= 4
      ? "'fas fa-star'"
      : product.rating >= 3.5
        ? "'fas fa-star-half-alt'"
        : "'far fa-star'"
    }></i>
            <i class=
              ${product.rating >= 5
      ? "'fas fa-star'"
      : product.rating >= 4.5
        ? "'fas fa-star-half-alt'"
        : "'far fa-star'"
    }></i>
            </div>
         </div>
         <div class="d-grid col-6 mx-auto mb-3">
            <button class="btn btn-outline-dark btn-custom text-break" type="button">Añadir&nbsp;
               <i class="fa-solid fa-bag-shopping"></i>
            </button>
         </div>
      </div>
   </div>`;
});
document
  .getElementById("modalProduct")!
  .addEventListener("click", function (e) {
    e.preventDefault();
    let password: string = (<HTMLInputElement>(
      document.getElementById("keyindex")
    )).textContent;

    // login(getUsers()[0], { user, password });
    console.log(products[password].image, password);
  });
