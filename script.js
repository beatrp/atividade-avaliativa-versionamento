const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    const usuarioVal = usuario.value.trim();
    const senhaVal = senha.value.trim();

    if (usuarioVal === "" || senhaVal === "") {
        mensagem.style.color = "#ff5252";
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    // Busca dados salvos do cadastro
    const usuarioCadastrado = localStorage.getItem("usuarioCadastrado");
    const senhaCadastrada = localStorage.getItem("senhaCadastrada");

    // Valida com os dados cadastrados OU com a conta padrão adm / 123
    const eUsuarioValido = (usuarioVal === usuarioCadastrado && senhaVal === senhaCadastrada) || 
                           (usuarioVal === "adm" && senhaVal === "123");

    if (eUsuarioValido) {
        // Salva a sessão do usuário logado
        localStorage.setItem("usuarioLogado", usuarioVal);

        mensagem.style.color = "#03dac6";
        mensagem.textContent = "Login realizado com sucesso! Entrando...";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        mensagem.style.color = "#ff5252";
        mensagem.textContent = "Usuário ou senha incorretos.";
    }
});
