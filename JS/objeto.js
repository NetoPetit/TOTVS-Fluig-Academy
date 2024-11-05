function externo() {
    var pessoa = {
        Nome: "Wilson",
        Sobrenome: "Bizon",
        Departamento: "Fluig"
    };

    document.getElementById("local").innerHTML = pessoa.Nome + " trabalha no departamento "
    + pessoa.Departamento + "<br />" + pessoa.Nome + " " + pessoa.Sobrenome;
}