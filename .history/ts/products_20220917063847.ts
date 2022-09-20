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
  get name(): string {
    return this._name;
  }
  get image(): string {
    return this._image;
  }
  get description(): string {
    return this._description;
  }
  get price(): number {
    return this._price;
  }
  get countInStock(): number {
    return this._countInStock;
  }
  get rating(): number {
    return this._rating;
  }  
}

let products:object = [
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
   },
   {
     _id: "2",
     name: "Velcro Sneakers For Boys & Girls  (Blue)",
     image: "/images/5.png",
     description:
       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
     price: 599,
     countInStock: 10,
     rating: 2,
     numReviews: 2,
   },
   {
     _id: "3",
     name: "Sesame Street Unisex-Child ELMO Puppet Slipper",
     image: "/images/4.png",
     description:
       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
     price: 929,
     countInStock: 0,
     rating: 3.5,
     numReviews: 3,
   },
   {
     _id: "4",
     name: "Lace Casual Boots For Boys & Girls  (Tan)",
     image: "/images/3.png",
     description:
       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
     price: 399,
     countInStock: 10,
     rating: 5,
     numReviews: 9,
   },
   {
     _id: "5",
     name: "Lace Walking Shoes For Boys & Girls  (Pink)",
     image: "/images/2.png",
     description:
       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
     price: 49,
     countInStock: 7,
     rating: 2,
     numReviews: 2,
   },
   {
     _id: "6",
     name: "Women Red Heels Sandal",
     image: "/images/1.png",
     description:
       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
     price: 29,
     countInStock: 0,
     rating: 0,
     numReviews: 0,
   },
 ];
// products.push(products1,);

export function getProducts() {
  return products;
}
