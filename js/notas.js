let notas = JSON.parse(localStorage.getItem("notas")) || [];

let materias = JSON.parse(localStorage.getItem("materias")) || [];

const combo = document.getElementById("materia");

const tabla = document.getElementById("tablaNotas");

materias.forEach(m => {

    const op = document.createElement("option");

    op.value = m.nombre;

    op.textContent = m.nombre;

    combo.appendChild(op);

});

function guardar(){

    localStorage.setItem("notas", JSON.stringify(notas));

}

function promedio(){

    if(notas.length===0){

        document.getElementById("promedioGeneral").textContent="0.00";

        return;

    }

    let suma=0;

    notas.forEach(n=>{

        suma+=parseFloat(n.nota);

    });

    document.getElementById("promedioGeneral").textContent=

        (suma/notas.length).toFixed(2);

}

function mostrar(){

    tabla.innerHTML="";

    notas.forEach((n,i)=>{

        tabla.innerHTML+=`

        <tr>

            <td>${n.materia}</td>

            <td>${n.actividad}</td>

            <td>${parseFloat(n.nota).toFixed(2)}</td>

            <td>

                <button onclick="eliminar(${i})">

                    Eliminar

                </button>

            </td>

        </tr>

        `;

    });

    promedio();

}

formNota.addEventListener("submit",function(e){

    e.preventDefault();

    notas.push({

        materia:combo.value,

        actividad:actividad.value,

        nota:nota.value

    });

    guardar();

    mostrar();

    this.reset();

});

function eliminar(i){

    notas.splice(i,1);

    guardar();

    mostrar();

}

mostrar();