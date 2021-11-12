"use strict"

let books = {
    "pasakos": [
        {
            isbn: "GR8421K",
            year: 2000,
            name: "Mano mintys debesyse",
            pages: 215,
            price: 30
        },
        {
            isbn: "GR3542P",
            year: 2020,
            name: "soka raganos ant sniego nepaliktdamos",
            pages: 412,
            price: 50
        },
        {
            isbn: "GR7885L",
            year: 2021,
            name: "abek nes pagausiu",
            pages: 500,
            price: 60
        },
        {
            isbn: "GR6812T",
            year: 2008,
            name: "girts meistras",
            pages: 431,
            price: 70
        }
    ],
    "grozine": [
        {
            isbn: "MK3522R",
            year: 2001,
            name: "debesu lyga",
            pages: 389,
            price: 90
        },
        {
            isbn: "MK1111R",
            year: 2007,
            name: "labas as krabas",
            pages: 700,
            price: 50
        },
        {
            isbn: "MK5123R",
            year: 1999,
            name: "tesk",
            pages: 820,
            price: 40
        },
        {
            isbn: "MK1234L",
            year: 1980,
            name: "laukiniai vakarai arba kaip",
            pages: 190,
            price: 20
        }
    ],
    "romatines": [
        {
            isbn: "FN3521R",
            year: 2004,
            name: "nebijok",
            pages: 350,
            price: 10
        },
        {
            isbn: "FN7854P",
            year: 2021,
            name: "nu ir ka",
            pages: 410,
            price: 70
        },
        {
            isbn: "FN1232R",
            year: 2008,
            name: "marozas",
            pages: 430,
            price: 100
        },
        {
            isbn: "FN8432L",
            year: 2012,
            name: "grazule",
            pages: 500,
            price: 120
        }
    ]
}
//knygų kainą visame kataloge padidina 15 proc.
function raisePrices(item) {
   for (let key in item) {
      item[key] = item[key];

      if (key === "price") {
         item ["price"] = Number((item.price * 1.15).toFixed(2))
      }
   }
   return item;
}

for (let genre in books) {
    books[genre] = books[genre].map(raisePrices)
}

console.log(books);



let katalogas = [];

for (let [key, value] of Object.entries(books)) {
   value.forEach( element => this.longer30(element));
   value.forEach( element => katalogas.push(element));
   

 }
// sortas(katalogas);
//pavadinimas yra ilgesnis nei  30 simbolių
function longer30(item) {

      if (item.name.length > 30) {
		 console.log('-----------2 uzduotis-----------');
		 console.log(item);
         console.log(item.name + ' | Knygos pavadinimo ilgis = '+ item.name.length);
      }
    

}

sortas(katalogas);
// Isrikiuoja kataloga pagal abecele
function sortas(item) {
	
		//item.sort((a, b) => a.name > b.name && 1 || -1);
		item.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
		
		console.log('------------3 uzduotis---------');
		console.log(item);

}


// for ( let type in books ){

//    console.log( type + " literatura " + books[type].length + " knygos" );
//    console.log("-----------------------------");
//    for ( let book of books[type] ) {

//        for ( let data in book ){

//            // metai tik vieni tai taip galiu sulygint
//            if ( book[data] === 2021 ) {

//                book.name +=  ' (nauja knyga) ';
//            }
           
//            console.log( data + ": " + book[data] );
//        }

//        console.log("\n");
//    }
//    console.log("---------------------------\n");
// }

//     for ( let type in books ){

//       console.log( type + " literatura " + books[type].length + " knygos" );
//       console.log("-----------------------------");
//       for ( let book of books[type] ) {
  
//           for ( let data in book ){
  
//               // metai tik vieni tai taip galiu sulygint
//               if ( book[data] === 2021 ) {
  
//                   book.name +=  ' (nauja knyga) ';
//               }
              
//               console.log( data + ": " + book[data] );
//           }
  
//           console.log("\n");
//       }
//       console.log("---------------------------\n");
//   }



    //  let kategorijos = [];

   //  books.forEach(value => console.log(value ));
   //  console.log(books);

// (function() { //self invoking function
// const sumNumbers = (...numbers) => {
//    const reducer = (previousValue, currentValue) => previousValue + currentValue;
//    return numbers.reduce(reducer)
// }
// console.log(sumNumbers(numbers: 3, 4, 5))
// })();

// (function() { //self invoking function
//       const syHi = (name, callback) => {
//          console.log(name)
//          callback()
//       }

//    syHi(name: "Martynas", callback: function (){console.log("labas")})

//    })();
  
// (function() { 
//    let prices = [
//       123,
//       156,
//       567,
//       890,
//       123
//    ]
//    const result = (items) => {return items.map(items => items*1.1)}
//    console.log(result(prices))
// })();

// (function() { 
//    const prices = [
//       123,
//       156,
//       567,
//       890,
//       123
//    ];
//    prices.sort();
//    console.log(prices);
// })();

// const searchPrice = (items, search)=>{
//    if(items.includes(search)) {
//       console.log("Kaina surasta");
//    }
//    else{
//       console.log("Kaina nerasta");
//    }
// }