// Funciones de Orden Superior
// Hight Order Functions
/*
    Funciones que reciben 
    como parametros
*/

const myFunction = () => {
    console.log('Ejecuta Mi Funcion');
}
myFunction();
const sameFunction = myFunction;
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne = () => {
    console.log('Ejecuta funcion One');
}

const funTwo = (username) => {
    console.log('Ejecuta Funcion Two');
    console.log('Hola ' + username);
}

const funThree = (otherFunction) => {
    console.log('Inicia funcion 3');
    otherFunction();
    console.log('Termina funcion 3');
}

funOne();
funTwo('Ludwin');
funTwo('Señor Galleta');
funThree(funOne);
funThree(() => console.log('Soy una Arrow Function'));