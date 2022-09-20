import products from "./products";

console.log(products);

// let div_products: any = <HTMLInputElement>document.querySelector("product");

products.map((product, index) => {
  document.getElementById("product")!.innerHTML += 
  ` <div class="col">
   <div class="card">

     <a href="#staticBackdrop" data-bs-toggle="modal"><img src="img/products/scraper.jpg" class="card-img-top"
         alt="..."></a>

     <div class="card-body">
       <h5 class="card-title">${index} - Rascador T-4000</h5>
       <p class="card-text">$ 25</p>
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
