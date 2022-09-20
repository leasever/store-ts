import products from "./products";

console.log(products);

products.map((product, index) => {
  document.getElementById(
    "product",
  )!.innerHTML += ` <div class="col" key="${index}" >
      <div class="card">
        <a href="#staticBackdrop${index}" data-bs-toggle="modal">
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

products.map((product, index) => {
  document.getElementById(
    "productModal",
  )!.innerHTML += `
<div class="modal fade" id="staticBackdrop${index}" key="${index}" >
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <div class="container-fluid">
        <div class="row">
          <div>
            <div class="col-12 col-md-6">
              <div class="card">
                <img src="${product.image[0]}" class="card-img-top" alt="...">
              </div>
            </div>
            <div class="col-12 col-md-6 text-center py-3 py-sm-0">
              <h5 class="card-title">${product.name}</h5>
              <p>Los gatos tienen un impulso natural de rascarse: la acción les ayuda a eliminar material viejo de sus garras y marcar el territorio con las glándulas olorosas de sus patas. Se puede evitar que los gatos de interior ejerzan este impulso en los muebles y tapicerías de la vivienda si cuentan con un rascador aceptable.</p>
            </div>
            
        </div>
      </div>
        <div class="col">            
            <div class="d-grid col-6 mx-auto py-sm-3">
              <button class="btn btn-outline-dark btn-custom text-break" type="button">Añadir&nbsp;
                <i class="fa-solid fa-bag-shopping"></i>
              </button>
            </div>
      </div>
    </div>
  </div>
</div>`;
});
// products.map((product, index) => {
//   document.getElementById(
//     "product",
//   )!.innerHTML += ` `;
// })

// document.getElementById("modalProduct")!.addEventListener("click", function (e) {
//   e.preventDefault();
//   let password: string = (<HTMLInputElement>(
//     document.getElementById("keyindex")
//   )).textContent;

//   // login(getUsers()[0], { user, password });
//   console.log(products[password].image, password);
// });
