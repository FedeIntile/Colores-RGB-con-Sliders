
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textRojo = document.getElementById('texto-rojo');
const textVerde = document.getElementById('texto-verde');
const textAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value; //23
let verde = inputVerde.value; //41
let azul = inputAzul.value;  // 56

textRojo.innerText = rojo;
textVerde.innerText = verde;
textAzul.innerText = azul;

function actualizarColor(rojo,verde,azul){
   const colorRGB =  `rgb(${rojo},${verde},${azul})`;
   document.body.style.backgroundColor = colorRGB; 
}

// actualizar red (rojo)

inputRojo.addEventListener('change',()=>{
   rojo = inputRojo.value;
   textRojo.innerText = rojo;
   actualizarColor(rojo,verde,azul)
})

   // actualizar verde
inputVerde.addEventListener('change',(e)=>{
   verde = e.target.value;
   textVerde.innerText = verde;
   actualizarColor(rojo,verde,azul)
})

   // actualizar azul

inputAzul.addEventListener('change',(e)=>{
   azul = e.target.value;
   textAzul.innerText = azul;
   actualizarColor(rojo,verde,azul)
})



