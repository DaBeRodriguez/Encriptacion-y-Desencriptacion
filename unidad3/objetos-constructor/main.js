// let nombre ='Pedro'; 
// let edad = 21;
// let estudiante = true ;
// let fruta ='manzana';
// let frutas =['manzana','pera','platano']
// let usuario= {
//     nombre:'Juan',
//     edad: 15,
//     estudiante: true,
//     idiomas: {
//         nativo:'Español',
//         extranjeros:{
//             ingles:Avanzado,
//             Frances:intermedio,
//             aleman:basico,

//         }
//     }
// }
// console.log(nombre);
// console.log (edad);

// cobnsole.log(usuario);
// console.log (usuario.estudiante);


// //AGREGAR

// usuario.carrera ='desarrollo web';
// console.log(usuario);

// //ELIMINAR
// delete usuario.estudiante;
// console.log(usuario);
// console.log(usuario.idiomas.extranjeros);
// console.log (idiomas);

//************ Crear 2 objetos *************//
// let profesores = {
//     inicial: {
//         miss1: {
//             nombre: 'Juana Rodriguez',
//             edad: 25
//         },
//         miss2: {
//             nombre: 'carla Torres',
//             edad: 28
//         },
//         miss3: {
//             nombre: 'Luisa Jimenez',
//             edad: 22
//         }

//     },
//     primaria: {
//         hombres: {
//             profesor1: 'Sandro Figueroa',
//             profesor2: 'Carlos Calvin',
//         },
//         mujeres: {
//             profesora1: 'Juana Chavez',
//             profesora2: 'Maria Andrade',


//         }
//     },

//      secundaria: {
//          hombres: {
//              profesors1: 'Sandro Figueroa',
//              profesors2: 'Carlos Calvin',
//          },
//          mujeres: {
//              profesoras1: 'Juana Chavez',
//              profesoras2: 'Maria Andrade',
//          }
//      }
// }
// console.log(profesores);
let disco1={
    artista:'Bruno Mars',
    album:'Exitos',
    año:2012
}
console.log(disco1);

let disco2={
    artista:'Jessy y joy',
    album:'magic',
    año:2020
}
console.log(disco2);

// ============CONSTRUCTOR==============
function Disco(artista,album,año){
    this.artista = artista;
    this._album =album;
    this._año = año;

}

//=====Añadir en constructor========

