class Player {
    constructor(nombre,color){
        this._nombre= nombre;
        this._color = color;
    }
    saltar(){

    }
    correr(){

    }
    saludar(){
        return `hola mi nombre es ${this._nombre} y mi sombrero es ${this._color}`;
    }
}
let player1 =new Player('Mario', 'Rojo' );
console.log(player1);

let player2 =new Player('Luigi', 'Verde' );
console.log(player2);


// let nombre = 'Pedro';
// let edad =15;
// console.log('Hola tu nombre es ' + nombre + ' y tienes ' + edad + ' años ');
// console.log(`Hola tu nombre es  ${nombre}  y tienes  ${edad }  años`);



// ==========EJERCICIOS ============
// let nombre = "Juan";
// let edad =20;
// let nacionalidad ="peruano";
// let universidad = "Universidad Mayor de San Marcos";
// console.log('Hola tu nombre es ' + nombre + ' eres '+ nacionalidad + ' tienes ' + edad + ' años ' + 'y estas en la  ' + universidad);
// console.log(`Hola tu nombre es  ${nombre}   eres ${nacionalidad}  tienes  ${edad }  años y estas en la ${universidad}`);



// let nombre2 = " Valentina ";
// let edad2 =25;
// let nacionalidad2 =" peruana ";
// let dedicacion = " Enseñar ballet en una escuela de baile";
// console.log('Hola tu nombre es ' + nombre2 + 'eres '+ nacionalidad2 + ' tienes ' + edad2 + ' años ' + 'y te dedicas a ' + dedicacion);
// console.log(`Hola tu nombre es  ${nombre2}   eres ${nacionalidad2}  tienes  ${edad2}  años y te dedicas a ${dedicacion}`);