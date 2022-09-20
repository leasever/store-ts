import products from "./products";

console.log(products);

products.map((product, index) => {
  document.getElementById(
    "product",
  )!.innerHTML += ` `;
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
