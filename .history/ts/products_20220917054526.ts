export class Product {
   constructor(private _username: string, private _password: string) {}
 
   get username(): string {
     return this._username;
   }
 
   set username(username) {
     this._username = username;
   }
 
   get password(): string {
     return this._password;
   }
 
   set password(password) {
     this._password = password;
   }
 }
 
 let products: Product[] = [];
 
 let products1 = new Product("leandro", "123456");
 
 products.push(products1);
 
 export function get() {
  
   return products;
 }
 