console.log("Teste");
const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // impede o recarregamento da página

    let C = document.getElementById("idtexto").value;
    let F = document.getElementById("idtexto2").value;

    if(C !== ""){
        F = (C*(9/5))+32;
        console.log("O valor de Faren é: ", F);
    } else if(F !== ""){
        C = (F-32)*(5/9);
        console.log("O valor de celsius é: ", C);
    } else {
        console.log("Digite algum valor!");
    }
});