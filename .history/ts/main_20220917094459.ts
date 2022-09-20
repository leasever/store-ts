import products from "./products";

console.log(products);

products.map((product, index) => {
  return (document.getElementById(
    "addGalleryItemButtonContainer",
  )!.innerHTML = `<a href="#staticBackdrop" data-bs-toggle="modal"><img src="img/products/scraper.jpg"  class="card-img-top" alt="..."></a>

<div class="card-body">
<h5 class="card-title">Rascador T-4000</h5>
<p class="card-text">$ 25</p>
<i class="fas fas fa-star"></i>
<i class="fas fas fa-star"></i>
<i class="fas fas fa-star"></i>
<i class="far fa-star-half-alt"></i>
<i class="far fa-star"></i>`);
});
