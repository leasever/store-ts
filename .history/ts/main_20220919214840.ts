import products from "./products";

/**
 * product gallery
 */
products.map((product, index) => {
  document.getElementById(
    "product",
  )!.innerHTML += ` <div class="col" key="${index}" >
      <div class="card">
        <a href="#staticBackdrop${index}" data-bs-toggle="modal">
          <img src="${product.image[0]}" class="card-img-top" alt="${product.name}">
        </a>
        <div class="card-body">          
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
/**
 * modal products
 */
products.map((product, index) => {
  document.getElementById(
    "productModal",
  )!.innerHTML += `
<div class="modal fade" id="staticBackdrop${index}" key="${index}" >
  <div class="modal-dialog modal-md modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title px-0" id="exampleModalLabel">${product.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">              
              <div id="carouselExampleIndicators${index}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner text-center">
                  <div class="carousel-item active">
                    <img src="${product.image[1]}" class="d-block w-100 img-thumbnail" alt="${product.name}">
                  </div>
                  <div class="carousel-item">
                    <img src="${product.image[2]}" class="d-block w-100 img-thumbnail" alt="${product.name}">
                  </div>
                  <div class="carousel-item">
                    <img src="${product.image[3]}" class="d-block w-100 img-thumbnail" alt="${product.name}">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div> 
            </div>            
            <div class="col-12  text-center pt-2">              
              <p>${product.description}</p>            
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>
</div>`;
});