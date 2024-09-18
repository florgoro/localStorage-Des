document.addEventListener("DOMContentLoaded", function(){
    let inData = localStorage.getItem("storedData");
    if (inData) {
        document.getElementById("data").textContent = inData;
    } else {
        docuement.getElementById("data").textContent = "No hay datos";
    }
})