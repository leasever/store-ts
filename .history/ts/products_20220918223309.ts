let products: Array<{
  _id: string;
  name: string;
  image: [<T>];
  description: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}> = [
  {
    _id: "1",
    name: "Rascador T-4000",
    image: [
      "/img/products/scraper.jpg",
      "/img/products/headphone.jpg",
      "/img/products/mochila.jpg",
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "2",
    name: "Headphone Pro",
    image: ["/img/products/headphone.jpg"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 599,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    _id: "3",
    name: "Mochila Pet 7000",
    image: ["/img/products/mochila.jpg"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 929,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
];

export default products;
