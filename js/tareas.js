let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

let materias = JSON.parse(localStorage.getItem("materias")) || [];

const lista = document.getElementById("listaTareas");

const combo = document.getElementById("materia");

materias.forEach(m=>{

const op=document.createElement("option");

op.value=m.nombre;

op.textContent=m.nombre;

combo.appendChild(op);

});

function guardar(){

localStorage.setItem("tareas",JSON.stringify(tareas));

}

function mostrar(filtro=""){

lista.innerHTML="";

tareas
.filter(t=>t.titulo.toLowerCase().includes(filtro.toLowerCase()))
.forEach((t,i)=>{

lista.innerHTML+=`

<tr>

<td>${t.titulo}</td>

<td>${t.materia}</td>

<td>${t.prioridad}</td>

<td>${t.fecha}</td>

<td>${t.estado}</td>

<td>

<button onclick="eliminar(${i})">

Eliminar

</button>

</td>

</tr>

`;

});

}

document.getElementById("formTarea").addEventListener("submit",e=>{

e.preventDefault();

tareas.push({

titulo:titulo.value,

materia:combo.value,

prioridad:prioridad.value,

fecha:fecha.value,

estado:estado.value

});

guardar();

mostrar();

e.target.reset();

});

function eliminar(i){

tareas.splice(i,1);

guardar();

mostrar();

}

buscar.addEventListener("keyup",()=>{

mostrar(buscar.value);

});

mostrar();