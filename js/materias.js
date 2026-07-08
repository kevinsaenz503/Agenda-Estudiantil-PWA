let materias = JSON.parse(localStorage.getItem("materias")) || [];

const tbody = document.querySelector("#tablaMaterias tbody");

function guardar() {
    localStorage.setItem("materias", JSON.stringify(materias));
}

function mostrar() {

    tbody.innerHTML = "";

    materias.forEach((m, i) => {

        tbody.innerHTML += `
            <tr>

                <td>
                    <div class="color-box" style="background:${m.color}"></div>
                </td>

                <td>${m.nombre}</td>

                <td>${m.profesor}</td>

                <td>${m.aula}</td>

                <td>

                    <button class="btnEliminar" onclick="eliminar(${i})">

                        Eliminar

                    </button>

                </td>

            </tr>
        `;

    });

}

document.getElementById("formMateria").addEventListener("submit", function(e){

    e.preventDefault();

    materias.push({

        nombre:document.getElementById("nombre").value,

        profesor:document.getElementById("profesor").value,

        aula:document.getElementById("aula").value,

        color:document.getElementById("color").value

    });

    guardar();

    mostrar();

    this.reset();

});

function eliminar(i){

    materias.splice(i,1);

    guardar();

    mostrar();

}

mostrar();