export class User {
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
 
 let users: User[] = [];
 
 let users1 = new User("leandro", "123456");
 
 users.push(users1);
 
 export function getUsers() {
  
   return users;
 }
 