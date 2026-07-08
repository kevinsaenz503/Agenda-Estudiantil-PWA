const materias = JSON.parse(localStorage.getItem("materias")) || [];
const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
const horario = JSON.parse(localStorage.getItem("horario")) || [];
const examenes = JSON.parse(localStorage.getItem("examenes")) || [];

document.getElementById("totalMaterias").textContent = materias.length;

document.getElementById("totalHorario").textContent = horario.length;

const pendientes = tareas.filter(t => t.estado !== "Completada");

document.getElementById("totalTareas").textContent = pendientes.length;

const notas = JSON.parse(localStorage.getItem("notas")) || [];

let promedio = 0;

if(notas.length>0){

    promedio = notas.reduce((s,n)=>s+parseFloat(n.nota),0)/notas.length;

}

document.getElementById("promedio").textContent = promedio.toFixed(2);

const lista = document.getElementById("actividades");

const futuros = examenes
.filter(e => new Date(e.fecha + "T" + e.hora) >= new Date())
.sort((a,b)=> new Date(a.fecha+"T"+a.hora)-new Date(b.fecha+"T"+b.hora));

if(futuros.length>0){

    lista.innerHTML += `
        <li>
        📖 <strong>Próximo examen</strong><br>
        ${futuros[0].materia}<br>
        ${futuros[0].fecha} ${futuros[0].hora}
        </li>
    `;

}

if(pendientes.length === 0){

    lista.innerHTML="<li>No hay tareas pendientes.</li>";

}else{

    pendientes.slice(0,5).forEach(t=>{

        lista.innerHTML += `
            <li>
                📝 <strong>${t.titulo}</strong><br>
                Materia: ${t.materia}<br>
                Entrega: ${t.fecha}
            </li>
            <hr>
        `;

    });

}