console.group("Cuadrado");

const perimetroCuadrado = (lado) => (lado*4);
const areaCuadrado = (lado) => (lado**2);

console.groupEnd();

console.group("Triángulo");

const perimetroTriangulo = (base, lado1, lado2) => (base+lado1+lado2);
const areaTriangulo = (base,altura) => ((base*altura)/2);

console.groupEnd();

console.group("Círculo");

const PI = Math.PI;
const perimetroCirculo = (radio) => (2*PI*radio);
const areaCirculo = (radio) => (PI*(radio**2));

console.groupEnd();

function perimetroCuadrados(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function areaCuadrados(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    
    const areaC = document.getElementById("AreaC");
    areaC.innerText = `El área del cuadrado es: ${area}cm2`;
};

function perimetroTriangulos(){
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
};

function areaTriangulos(){
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    const area = areaTriangulo(value);
    alert(area);
};

function perimetroCirculos(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};

function areaCirculos(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
};