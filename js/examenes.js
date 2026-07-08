let examenes = JSON.parse(localStorage.getItem("examenes")) || [];

let materias = JSON.parse(localStorage.getItem("materias")) || [];

const tabla = document.getElementById("tablaExamenes");

const combo = document.getElementById("materia");

materias.forEach(m => {

    let op = document.createElement("option");

    op.value = m.nombre;

    op.textContent = m.nombre;

    combo.appendChild(op);

});

function guardar(){

    localStorage.setItem("examenes", JSON.stringify(examenes));

}

function mostrar(){

    tabla.innerHTML = "";

    examenes.sort((a,b)=>
        new Date(a.fecha+"T"+a.hora)-new Date(b.fecha+"T"+b.hora)
    );

    examenes.forEach((e,i)=>{

        tabla.innerHTML += `

        <tr>

        <td>${e.materia}</td>

        <td>${e.fecha}</td>

        <td>${e.hora}</td>

        <td>${e.aula}</td>

        <td>${e.tema}</td>

        <td>

        <button onclick="eliminar(${i})">

        Eliminar

        </button>

        </td>

        </tr>

        `;

    });

}

formExamen.addEventListener("submit",function(event){

    event.preventDefault();

    examenes.push({

        materia:combo.value,

        fecha:fecha.value,

        hora:hora.value,

        aula:aula.value,

        tema:tema.value

    });

    guardar();

    mostrar();

    this.reset();

});

function eliminar(i){

    examenes.splice(i,1);

    guardar();

    mostrar();

}

mostrar();