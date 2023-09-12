// Funciones con Javascript

/*
funcion nombre(params){
    body function
}
*/
/** 
const nombre = function(params){
    body function
}
*/
// funcion sin parametros sin retorno
function saluda(){
    console.log('Helooo!');
}
saluda();

// funcion con parametros sin retorno
const saludaA = function(name){
    console.log(`Holaa ${ name }`);
}
saludaA('Batman');

// funcion con parametros y retorno
const duplica = function(num){
    return num * 2;
}
const doble = duplica(26);
console.log(doble);

// Arrow Function, funciones de las flechas ES6
/*
(params) => {
    body function
}
*/
const getFullName = (firstName, lastName) => {
    return firstName + '' + lastName;
}
const nombre = getFullName('Peter', 'Parker');
console.log(nombre);

// Podemos omitir () con un único parametro
const minusculas = (word) => {
    return word.toLowerCase();
}
console.log(minusculas('HELLO'));
const mayusculas = (word) => {
    return word.toUpperCase();
}
console.log(mayusculas('hello'));

// Podemos omitir llaves y return si solo hay una línea
const cuadrado = num => num * num;
console.log(cuadrado(25));

