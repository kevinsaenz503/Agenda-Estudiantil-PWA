let horario = JSON.parse(localStorage.getItem("horario")) || [];

let materias = JSON.parse(localStorage.getItem("materias")) || [];

const tabla = document.getElementById("tablaHorario");

const combo = document.getElementById("materia");

materias.forEach(m => {

    let op = document.createElement("option");

    op.value = m.nombre;

    op.textContent = m.nombre;

    combo.appendChild(op);

});

function guardar(){

    localStorage.setItem("horario",JSON.stringify(horario));

}

function mostrar(){

    tabla.innerHTML="";

    horario.forEach((h,i)=>{

        tabla.innerHTML += `

        <tr>

        <td>${h.dia}</td>

        <td>${h.materia}</td>

        <td>${h.inicio}</td>

        <td>${h.fin}</td>

        <td>${h.aula}</td>

        <td>${h.profesor}</td>

        <td>

        <button onclick="eliminar(${i})">

        Eliminar

        </button>

        </td>

        </tr>

        `;

    });

}

formHorario.addEventListener("submit",function(e){

    e.preventDefault();

    horario.push({

        dia:dia.value,

        materia:combo.value,

        inicio:inicio.value,

        fin:fin.value,

        aula:aula.value,

        profesor:profesor.value

    });

    guardar();

    mostrar();

    this.reset();

});

function eliminar(i){

    horario.splice(i,1);

    guardar();

    mostrar();

}

mostrar();