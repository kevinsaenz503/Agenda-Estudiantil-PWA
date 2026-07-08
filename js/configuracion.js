// ======================
// PERFIL
// ======================

const perfil = JSON.parse(localStorage.getItem("perfil")) || {};

nombre.value = perfil.nombre || "";
instituto.value = perfil.instituto || "";
bachillerato.value = perfil.bachillerato || "";

formPerfil.addEventListener("submit", function(e){

    e.preventDefault();

    const datos = {

        nombre:nombre.value,

        instituto:instituto.value,

        bachillerato:bachillerato.value

    };

    localStorage.setItem("perfil", JSON.stringify(datos));

    alert("Perfil guardado correctamente.");

});

// ======================
// MODO OSCURO
// ======================

if(localStorage.getItem("modo")=="oscuro"){

    document.body.classList.add("dark");

}

modoOscuro.onclick=function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("modo","oscuro");

    }else{

        localStorage.setItem("modo","claro");

    }

};

// ======================
// COLOR PRINCIPAL
// ======================

const color = localStorage.getItem("color");

if(color){

    document.documentElement.style.setProperty("--principal",color);

    colorPrincipal.value=color;

}

colorPrincipal.addEventListener("input",function(){

    document.documentElement.style.setProperty("--principal",this.value);

    localStorage.setItem("color",this.value);

});

// ======================
// EXPORTAR
// ======================

exportar.onclick=function(){

    const datos={

        materias:JSON.parse(localStorage.getItem("materias"))||[],

        tareas:JSON.parse(localStorage.getItem("tareas"))||[],

        horario:JSON.parse(localStorage.getItem("horario"))||[],

        examenes:JSON.parse(localStorage.getItem("examenes"))||[],

        notas:JSON.parse(localStorage.getItem("notas"))||[],

        perfil:JSON.parse(localStorage.getItem("perfil"))||{}

    };

    const blob=new Blob([JSON.stringify(datos,null,2)],{

        type:"application/json"

    });

    const a=document.createElement("a");

    a.href=URL.createObjectURL(blob);

    a.download="AgendaEstudiantil.json";

    a.click();

};

// ======================
// IMPORTAR
// ======================

importar.addEventListener("change",function(){

    const archivo=this.files[0];

    if(!archivo) return;

    const lector=new FileReader();

    lector.onload=function(e){

        const datos=JSON.parse(e.target.result);

        Object.keys(datos).forEach(k=>{

            localStorage.setItem(k,JSON.stringify(datos[k]));

        });

        alert("Datos importados correctamente.");

        location.reload();

    };

    lector.readAsText(archivo);

});

// ======================
// BORRAR TODO
// ======================

borrarTodo.onclick=function(){

    if(confirm("¿Deseas borrar toda la información?")){

        localStorage.clear();

        alert("Datos eliminados.");

        location.reload();

    }

};