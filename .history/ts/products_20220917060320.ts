export class Product {
   constructor( 
      _id: number,  
      _name: string,
      _description: string,  
      _price: number,
      _countInStock: number,  
      _rating: number
      
      
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
 
 let products1 = new Product( "1",
 "Velcro Ballerinas For Girls  (Pink)",
  "/images/6.png",
 
   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
 89,
 3,
 4,
 4);
 {
    "1",
   "Velcro Ballerinas For Girls  (Pink)",
    "/images/6.png",
   
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   89,
   3,
   4,
   4
 }
 
 products.push(products1);
 
 export function getProducts() {
  
   return products;
 }
 