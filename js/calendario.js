document.addEventListener("DOMContentLoaded", function () {

    const calendarEl = document.getElementById("calendar");

    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    const examenes = JSON.parse(localStorage.getItem("examenes")) || [];

    let eventos = [];

    tareas.forEach(t => {

        eventos.push({

            title: "📝 " + t.titulo,

            start: t.fecha,

            color: "#1976D2"

        });

    });

    examenes.forEach(e => {

        eventos.push({

            title: "📖 " + e.materia,

            start: e.fecha,

            color: "#D32F2F"

        });

    });

    const calendar = new FullCalendar.Calendar(calendarEl, {

        initialView: "dayGridMonth",

        locale: "es",

        height: 700,

        events: eventos,

        eventClick(info){

            alert(

                info.event.title +

                "\nFecha: " +

                info.event.start.toLocaleDateString()

            );

        }

    });

    calendar.render();

});