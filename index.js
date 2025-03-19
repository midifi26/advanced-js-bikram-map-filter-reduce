//RESUELVE LOS EJERCICIOS AQUI
/*1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** que devuelva un array con el cuadrado de cada uno de los elementos.
*/

const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
    return numbers.map(num => Math.pow(num, num));
  }
  console.log(elevados(numbers));
  

/*- [ ] 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
```
[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]
``` */
let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
  let result2 = foodList.map(food => {
    if (food ==='Pizza') {
      return 'Como soy de Italia, amo comer Pizza';
    } else if (food ==='Ramen'){
      return 'Como soy de Japón, amo comer Ramen';
    } else if (food ==='Paella'){
      return 'Como soy de Valencia, amo comer Paella';
    } else{
      return 'Aunque no como carne, el Entrecot es sabroso';
    }
  });

console.log(result2);
/*Ejercicio 3. Dado el array staff, generar un segundo array staffDescriptions con el siguiente resultado [ 'Pepe es The Boss y le gusta leer y ver pelis', 'Ana es becaria y le gusta nadar y bailar', 'Luis es programador y le gusta dormir y comprar', 'Carlos es secretario y le gusta futbol y queso' ] */
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

let result3=staff.map(personal=>{
  return `${personal.name} es ${personal.role} y le gusta ${personal.hobbies.join(' y ')}`;
});
console.log(result3);

/* Ejercicio 4 - Crea un segundo array result4 a partir del array number2 que devuelva solo los pares*/
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4=numbers2.filter(elemento=>{
 return elemento % 2 != 0;
  }
);
console.log(result4);
/*Ejercicio 5 - Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo */

const foodList2 =[
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }];

   const result5 = foodList2.filter(food =>food.isVeggie)
   .map(food=>{
      if (food.name==='Tempeh'){
      return `Que rico ${food.name} me voy a comer!`;
    } else {
      return `Que rica ${food.name} me voy a comer!`
    };
   });
  /*Ejercicio 6 - Dado el array inventario, devolver un array result 6 con los nombres de los elementos que valgan más de 300 euros > El array inventario está declarado */
  const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];
  let result6 = inventory.filter(producto=>
    producto.price > 300).map(producto=>producto.name);

console.log(result6);

/*Ejercicio 7 - Dado el array numeros3, obten la multiplicación de todos los elementos del array en la variable result7 */
  const numeros3=[39, 2, 4, 25, 62];
  const result7= numeros3.reduce(function(acc,actual){
    return acc * actual
  } );
  console.log(result7);

  /*8.- Concatena todos los elementos del array con reduce para que devuelva una sola frase */
  const sentenceElements = [
    'Me',
    'llamo',
    'Michelle',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];
   let result8=sentenceElements.reduce(function(acc,actual){
    return acc + ' ' + actual;
   });
   console.log(result8);
   /*Ejercicio 9 - Obtener el monto total de los elementos que pertenecen a catergory "code" en la variable result9 */
   const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];
  let result9=books.reduce(function(acc,actual){
    if(actual.category==='code'){
     return acc + actual.price;
    }
    return acc;
  },0);
  console.log(result9);