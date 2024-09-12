'use strict'; 

function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => setTimeout(() => 
    (element.innerHTML += letter), 50 * i));
    setinterval(() => typeWriter(element), 6000);
    }

    typeWriter(type_writer);