$(function() {
    $(".en").click(function() { 
    $(".logo-big").text("Portifolio");
    $(".navbar").children().eq(1).text("About me");
    $(".navbar").children().eq(2).text("Resume");
    $(".navbar").children().eq(3).text("Projects");
    $(".navbar").children().eq (4).text("Contact me");
    $(".sub-heading").text("Developer and designer");
    $(".arrow-text").text("Scroll down");
    $(".about-me-title").text("About me");

    $(".resume-title").text("Resume");
    $(".resume-download-btn").text("Download");
    $(".skill-title").text("Skills:");
    $(".language-title").text("Languages:");
    $(".projects-title").text("Projects");
    $(".project").text("Projetc");
    $(".soon-project").text("Soon");
    $(".calculator-description").text("IOS Calculator replica");
    $(".footer-text ").text("Designed & Built by Kaio Bruno");
    $(".language-selected").removeClass("change-br");
    $(".language-selected").addClass(".change-en");
    });
});
$(function() {
    $(".br").click(function() { 

    $(".logo-big").text("Portifólio");
    $(".navbar").children().eq(1).text("Sobre mim");
    $(".navbar").children().eq(2).text("Currículo");
    $(".navbar").children().eq(3).text("Projetos");
    $(".navbar").children().eq(4).text("Contate-me");
    $(".sub-heading").text("Desenvolvedor e designer");
    $(".arrow-text").text("Role abaixo");
    $(".about-me-title").text("Sobre mim");

    $(".resume-title").text("Currículo");
    $(".resume-download-btn").text("Baixar");
    $(".skill-title").text("Habilidades:");
    $(".language-title").text("Idiomas:");
    $(".projects-title").text("Projetos");
    $(".project").text("Projeto");
    $(".soon-project").text("Em breve");
    $(".calculator-description").text("Replica da calculadora IOS");
    $(".footer-text ").text("Projetado & Criado por Kaio Bruno");
    $(".language-selected").removeClass("change-en");
    $(".language-selected").addClass(".change-br");
    
    });
});