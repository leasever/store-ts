let products: Array<{
  _id: string;
  name: string;
  image: string[];
  description: string;
  price: number;  
  rating: number;  
}> = [
    {
      _id: "1",
      name: "Rascador T-4000",
      image: [
        "/img/products/scraper.jpg",
        "/img/products/scraperModal1.jpg",
        "/img/products/scraperModal2.jpg",
        "/img/products/scraperModal3.jpg",
      ],
      description:
        "Los gatos tienen un impulso natural de rascarse: la acción les ayuda a eliminar material viejo de sus garras y marcar el territorio con las glándulas olorosas de sus patas. Se puede evitar que los gatos de interior ejerzan este impulso en los muebles y tapicerías de la vivienda.",
      price: 89,      
      rating: 4,      
    },
    {
      _id: "2",
      name: "Headphone Pro",
      image: [
        "/img/products/headphone.jpg",
        "/img/products/headphoneModal1.jpg",
        "/img/products/headphoneModal2.jpg",
        "/img/products/headphoneModal3.jpg"
      ],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 599,      
      rating: 2,      
    },
    {
      _id: "3",
      name: "Mochila Pet 7000",
      image: ["/img/products/mochila.jpg"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 929,      
      rating: 3.5,
      numReviews: 3,
    },
  ];

export default products;
