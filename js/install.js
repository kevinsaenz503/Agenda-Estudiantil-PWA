let deferredPrompt;

const btn = document.getElementById("btnInstalar");

window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();

    deferredPrompt = e;

    btn.hidden = false;

});

btn.addEventListener("click", async () => {

    btn.hidden = true;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    console.log("Resultado:", outcome);

    deferredPrompt = null;

});

window.addEventListener("appinstalled", () => {

    alert("Agenda Estudiantil instalada correctamente.");

});
