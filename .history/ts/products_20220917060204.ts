export class Product {
   constructor( 
      _id: string,  
      _name: string,
      _description: string,  
      _price: string,
      _countInStock: string,  
      _name: string
      
      
      ) {}
 
   // get username(): string {
   //   return this._username;
   // }
 
   // set username(username) {
   //   this._username = username;
   // }
 
   // get password(): string {
   //   return this._password;
   // }
 
   // set password(password) {
   //   this._password = password;
   // }
 }
 
 let products: Product[] = [];
 
 let products1 = new Product("leandro", "123456");
 {
   _id: "1",
   name: "Velcro Ballerinas For Girls  (Pink)",
   image: "/images/6.png",
   description:
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   price: 89,
   countInStock: 3,
   rating: 4,
   numReviews: 4,
 }
 
 products.push(products1);
 
 export function getProducts() {
  
   return products;
 }
 