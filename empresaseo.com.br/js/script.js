/* Script do Menu Mobile */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const servicosBtn = document.getElementById("menu-servicos"); // O link "Serviços"
const dropdownMenu = document.querySelector(".dropdown-menu"); // O submenu

// 1. Abrir/Fechar Menu Geral (Hambúrguer)
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

// 2. Abrir/Fechar Submenu Serviços (Acordeão)
if (servicosBtn && dropdownMenu) {
    servicosBtn.addEventListener("click", (e) => {
        // Só ativa essa lógica se for no celular (tela menor que 768px)
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Impede de ir para a página, apenas abre o menu
            dropdownMenu.classList.toggle("show"); // Adiciona/Remove a classe que mostra o menu
        }
    });
}

// 3. Fechar menu ao clicar em qualquer link (Exceto o de abrir serviços)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {
        // Se não for o botão de serviços (que serve pra abrir submenu), fecha o menu geral
        if (link !== servicosBtn || window.innerWidth > 768) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});