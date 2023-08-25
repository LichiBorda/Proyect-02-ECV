


  export  const ArrayProductos = [
    
        {id:0 ,sabor: "Menta" , puffs:2500 , precio:10000 , descripcion:"Vape fume sabor menta 2500 puffs" , imagen: '..//imagenes/menta-2500.png'},
        {id :1 ,sabor: "Banana" , puffs:2500 , precio:10000 , descripcion:"Vape fume sabor banana 2500 puffs" , imagen:'..//imagenes/banana-2500.png'},
        {id :2 ,sabor: "MultiFruta" , puffs:2500 , precio:10000 ,descripcion:"Vape fume sabor multifruta 2500 puffs" , imagen:'..//imagenes/multifruta-2500.png'},
        {id :3 ,sabor: "Sandia" , puffs:3500, precio:20000 , descripcion:"Vape fume sabor sandia 3500 puffs" , imagen: '..//imagenes/sandia-3500.png'},
        {id :4 ,sabor: "Blueberry" , puffs:3500 , precio:20000 , descripcion:"Vape fume sabor blueberry 3500 puffs" , imagen:'..//imagenes/blueberry-3500.png'},
        {id :5 ,sabor: "MultiFruta" , puffs:3500 , precio:20000 ,descripcion:"Vape fume sabor multifruta 3500 puffs" , imagen:'..//imagenes/multifruta-3500.png'},
    
  ];

 export function getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ArrayProductos);
      }, 1000); // Simulamos un retraso de 1 segundo
    });
  }
  
 export  function getProductsByCategory(category) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredProducts = ArrayProductos.filter(product => product.category === category);
        resolve(filteredProducts);
      }, 1000);
    });
  }
  
 export function getProductById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundProduct = ArrayProductos.find(product => product.id === id);
        resolve(foundProduct);
      }, 1000);
    });
  }
 
