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
 
 let pro: Product[] = [];
 
 let pro1 = new Product("leandro", "123456");
 
 pro.push(pro1);
 
 export function getUsers() {
  
   return users;
 }
 