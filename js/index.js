document.getElementById("buttonText").addEventListener("click", function(){
    let text = document.getElementById("inputText").value;
    localStorage.setItem("storedData", text);
    alert("Guardado exitosamente");
})