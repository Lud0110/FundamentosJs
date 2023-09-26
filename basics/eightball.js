const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random() * 8);
    let resp;
    switch(opcion){
        case 1:
            resp = 'Todo saldrá bien!';
            break;
        case 2:
            resp = 'Todo saldrá mal!';
            break;
        case 3:
            resp = 'Media hora de comida';
            break;
        case 4:
            resp = '10 min de descanso por clase';
            break;
        case 5:
            resp = 'Hola';
            break;
        case 6:
            resp = 'Tacos de perro';
            break;
        case 7:
            resp = 'Pasamos porque pasamos';
            break;
        case 8:
            resp = 'Bola 10';
            break;
        default:
            resp = 'Si';    
    }
    respuesta.innerHTML = resp;
}