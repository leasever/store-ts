export class Product {
  constructor(
   private _id: number,
   private _name: string,
   private _image: string,
   private _description: string,
   private _price: number,
   private _countInStock: number,
   private _rating: number,
  ) {}

  get id(): number {
    return this._id;
  }
  get username(): string {
    return this._username;
  }
  get username(): string {
    return this._username;
  }
  get username(): string {
    return this._username;
  }
  get username(): string {
    return this._username;
  }
  get username(): string {
    return this._username;
  }
  get username(): string {
    return this._username;
  }

  
}

let products: Product[] = [];

let products1 = new Product(
  1,
  "Velcro Ballerinas For Girls  (Pink)",
  "/images/6.png",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  89,
  3,
  4,
);

products.push(products1);

export function getProducts() {
  return products;
}
