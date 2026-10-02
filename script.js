function abrirModal(titulo, mensagem) {
    const modal = document.getElementById("modal-feedback");

    if (!modal) {
        return;
    }

    document.getElementById("modal-titulo").textContent = titulo;
    document.getElementById("modal-mensagem").textContent = mensagem;

    modal.classList.add("is-aberto");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-aberto");

    document.getElementById("modal-fechar").focus();
}

function fecharModal() {
    const modal = document.getElementById("modal-feedback");

    if (!modal) {
        return;
    }

    modal.classList.remove("is-aberto");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-aberto");
}

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       MENU MOBILE
    ========================================== */

    const botaoMenu = document.getElementById("menu-mobile");
    const navegacao = document.getElementById("navegacao");

    if (botaoMenu && navegacao) {
        botaoMenu.addEventListener("click", function () {

            const aberto = navegacao.classList.toggle("menu-aberto");

            botaoMenu.setAttribute(
                "aria-expanded",
                aberto ? "true" : "false"
            );

            botaoMenu.setAttribute(
                "aria-label",
                aberto ? "Fechar menu" : "Abrir menu"
            );
        });
    }

    /* ==========================================
       DROPDOWN
    ========================================== */

    const botoesDropdown = document.querySelectorAll(
        ".menu-dropdown > button"
    );

    botoesDropdown.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const dropdown = botao.parentElement;

            const aberto = dropdown.classList.toggle("aberto");

            botao.setAttribute(
                "aria-expanded",
                aberto ? "true" : "false"
            );
        });
    });

    /* ==========================================
       MODAL
    ========================================== */

    const modal = document.getElementById("modal-feedback");
    const botaoFechar = document.getElementById("modal-fechar");

    if (botaoFechar) {
        botaoFechar.addEventListener("click", fecharModal);
    }

    if (modal) {
        modal.addEventListener("click", function (evento) {

            if (evento.target === modal) {
                fecharModal();
            }
        });
    }

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {
            fecharModal();
        }
    });

    /* ==========================================
       FORMULÁRIO
    ========================================== */

    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();

            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                return;
            }

            abrirModal(
                "Cadastro recebido",
                "Seu cadastro foi preenchido corretamente. A equipe da ONG Esperança Viva poderá entrar em contato para apresentar as próximas oportunidades."
            );

            formulario.reset();
        });
    }

    /* ==========================================
       BOTÃO DE DOAÇÃO
    ========================================== */

    const botoesDoacao = document.querySelectorAll(
        "[data-acao='doacao']"
    );

    botoesDoacao.forEach(function (botao) {

        botao.addEventListener("click", function (evento) {

            evento.preventDefault();

            abrirModal(
                "Obrigado pelo interesse",
                "Sua intenção de apoiar a ONG Esperança Viva foi registrada. Entre em contato com nossa equipe para conhecer as formas de contribuição."
            );
        });
    });
});