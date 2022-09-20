import products from "./products";

console.log(products);

products.map((product, index) => {
  document.getElementById(
    "product",
  )!.innerHTML += ` <div class="col" key="${index}" >
      <div class="card">
         <a href="#staticBackdrop" data-bs-toggle="modal" id="modalProduct"><img src="${product.image}" class="card-img-top" alt="${product.name}"></a>
         <div class="card-body">
            <h5 class="card-title" id="productname>${product.name}</h5>
            <p class="card-text"  id="productname>$ ${product.price}</p>
            
            <i class="fas fas fa-star"></i>
            <i class="fas fas fa-star"></i>
            <i class="fas fas fa-star"></i>
            <i class="far fa-star-half-alt"></i>
            <i class="far fa-star"></i>
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
    let username: string = (<HTMLInputElement>(
      document.getElementById("productname")
    )).value;
    let password: string = (<HTMLInputElement>(
      document.getElementById("password")
    )).value;

    // login(getUsers()[0], { username, password });
    console.log("click");
  });
