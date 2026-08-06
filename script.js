const avanca = document.querySelectorAll(".btn-proximo");

avanca.forEach(button => {
    button.addEventListener("click", function () {
        const atual = document.querySelector(".ativo");
        const proximoPasso = document.getElementById(
            "passo-" + this.dataset.proximo
        );

        atual.classList.remove("ativo");

        if (proximoPasso) {
            proximoPasso.classList.add("ativo");
        }
    });
});