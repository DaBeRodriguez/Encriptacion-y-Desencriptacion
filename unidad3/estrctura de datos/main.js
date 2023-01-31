class pila{
    //creamos constructor
    constructor(){
        this.pila =[];
    }
    //agregar un elemento al fial de la clase
    push (item){
        this.pila.push(item);
        return this.pila;
    }
    //metodo para eliminar elemento 
    pop(){
        return this.pila.pop
    }
    //metodo que retorne el ultimo valor ingresado
    speek(){
        return this.pila[this.pila.length -1];
    }
    //metodo que retorna el cantidad de elementos del array
    elemento (){
        return this.pila.length;
    }
    //muestre el contrenido del array en la consola 

    mostrar(){
        console.log(this.pila);
    }
}






// let array= ['pedro', 'juan' , 'maria', 'jhosselyn' ]
// console.log(array.length); 