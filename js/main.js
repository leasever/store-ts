"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = __importDefault(require("./products"));
/**
 * product gallery
 */
products_1.default.map(function (product, index) {
    document.getElementById("product").innerHTML += " <div class=\"col\" key=\"".concat(index, "\" >\n      <div class=\"card\">\n        <a href=\"#staticBackdrop").concat(index, "\" data-bs-toggle=\"modal\">\n          <img src=\"").concat(product.image[0], "\" class=\"card-img-top\" alt=\"").concat(product.name, "\">\n        </a>\n        <div class=\"card-body\">          \n          <h5 class=\"card-title\" id=\"productname\" >").concat(product.name, "</h5>\n          <p class=\"card-text\" id=\"productprice\" >$ ").concat(product.price, "</p>\n          <div>\n            <i class=\n            ").concat(product.rating >= 1
        ? "'fas  fa-star'"
        : product.rating >= 0.5
            ? "'fas fa-star-half-alt'"
            : "'far fa-star'", "></i>\n                      <i class=  \n                    ").concat(product.rating >= 2
        ? "'fas fa-star'"
        : product.rating >= 1.5
            ? "'fas fa-star-half-alt'"
            : "'far fa-star'", "></i>\n                    <i class=\n                      ").concat(product.rating >= 3
        ? "'fas fa-star'"
        : product.rating >= 2.5
            ? "'fas fa-star-half-alt'"
            : "'far fa-star'", "></i>\n                    <i class=\n                      ").concat(product.rating >= 4
        ? "'fas fa-star'"
        : product.rating >= 3.5
            ? "'fas fa-star-half-alt'"
            : "'far fa-star'", "></i>\n                    <i class=\n                      ").concat(product.rating >= 5
        ? "'fas fa-star'"
        : product.rating >= 4.5
            ? "'fas fa-star-half-alt'"
            : "'far fa-star'", "></i>\n          </div>\n        </div>\n        <div class=\"d-grid col-6 mx-auto mb-3\">\n          <button class=\"btn btn-outline-dark btn-custom text-break\" type=\"button\">A\u00F1adir&nbsp;\n            <i class=\"fa-solid fa-bag-shopping\"></i>\n          </button>\n        </div>\n      </div>\n   </div>");
});
/**
 * modal products
 */
products_1.default.map(function (product, index) {
    document.getElementById("productModal").innerHTML += "\n<div class=\"modal fade\" id=\"staticBackdrop".concat(index, "\" key=\"").concat(index, "\" >\n  <div class=\"modal-dialog modal-md modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title px-0\" id=\"exampleModalLabel\">").concat(product.name, "</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-12\">              \n              <div id=\"carouselExampleIndicators").concat(index, "\" class=\"carousel carousel-dark slide\" data-bs-ride=\"carousel\">\n                <div class=\"carousel-indicators\">\n                  <button type=\"button\" data-bs-target=\"#carouselExampleIndicators").concat(index, "\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\n                  <button type=\"button\" data-bs-target=\"#carouselExampleIndicators").concat(index, "\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\n                  <button type=\"button\" data-bs-target=\"#carouselExampleIndicators").concat(index, "\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\"></button>\n                </div>\n                <div class=\"carousel-inner text-center\">\n                  <div class=\"carousel-item active\">\n                    <img src=\"").concat(product.image[1], "\" class=\"d-block w-100 img-thumbnail\" alt=\"").concat(product.name, "\">\n                  </div>\n                  <div class=\"carousel-item\">\n                    <img src=\"").concat(product.image[2], "\" class=\"d-block w-100 img-thumbnail\" alt=\"").concat(product.name, "\">\n                  </div>\n                  <div class=\"carousel-item\">\n                    <img src=\"").concat(product.image[3], "\" class=\"d-block w-100 img-thumbnail\" alt=\"").concat(product.name, "\">\n                  </div>\n                </div>\n                <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleIndicators").concat(index, "\" data-bs-slide=\"prev\">\n                  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                  <span class=\"visually-hidden\">Previous</span>\n                </button>\n                <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleIndicators").concat(index, "\" data-bs-slide=\"next\">\n                  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                  <span class=\"visually-hidden\">Next</span>\n                </button>\n              </div> \n            </div>            \n            <div class=\"col-12  text-center pt-2\">              \n              <p>").concat(product.description, "</p>            \n            </div>\n          </div>\n        </div>        \n      </div>\n    </div>\n  </div>\n</div>");
});
