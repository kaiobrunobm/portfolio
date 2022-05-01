$(function() {
    $(".en").click(function() { 
        // HEADER
    $(".logo-big").text("Portifolio");
    $(".navbar").children().eq(1).text("About me");
    $(".navbar").children().eq(2).text("Resume");
    $(".navbar").children().eq(3).text("Projects");
    $(".navbar").children().eq (4).text("Contact me");

        // HOME
    $(".sub-heading").text("Developer and designer");
    $(".arrow-text").text("Scroll down");

        // ABOUT ME
    $(".about-me-title").text("About me");
    

        // RESUME
    $(".resume-title").text("Resume");
    $(".resume-download-btn").text("Download");
    $(".skill-title").text("Skills:");
    $(".language-title").text("Languages:");

        // PROJECTS
    $(".projects-title").text("Projects");
    $(".project").text("Project");
    $(".soon-project").text("Soon");
    $(".calculator-description").text("IOS Calculator replica");

        // FOTTER
    $(".footer-text ").text("Designed & Built by Kaio Bruno");

        // FORM
    $(".form-title").text("Contact me");
    $(".form-input-name").text("Name");
    $(".form-input-email").text("Email");
    $(".form-input-message").text("Message");


    $(".language-selected").removeclass("change-br");
    $(".language-selected").addClass("change-en");


    });
});
$(function() {
    $(".br").click(function() { 


        // HEADER
    $(".logo-big").text("Portifólio");
    $(".navbar").children().eq(1).text("Sobre mim");
    $(".navbar").children().eq(2).text("Currículo");
    $(".navbar").children().eq(3).text("Projetos");
    $(".navbar").children().eq(4).text("Contate-me");

    // HOME
    $(".sub-heading").text("Desenvolvedor e designer");
    $(".arrow-text").text("Role abaixo");

        // ABOUT ME
    $(".about-me-title").text("Sobre mim");


        // RESUME
    $(".resume-title").text("Currículo");
    $(".resume-download-btn").text("Baixar");
    $(".skill-title").text("Habilidades:");
    $(".language-title").text("Idiomas:");

        // PROJECTS
    $(".projects-title").text("Projetos");
    $(".project").text("Projeto");
    $(".soon-project").text("Em breve");
    $(".calculator-description").text("Replica da calculadora IOS");

        //FOTTER 
    $(".footer-text ").text("Projetado & Criado por Kaio Bruno");

        // FORM
    $(".form-title").text("Contate-me");
    $(".form-input-name").text("Nome");
    $(".form-input-email").text("Email");
    $(".form-input-message").text("Mensagem");


    $(".language-selected").removeClass("change-en");
    $(".language-selected").addClass(".change-br");
    
    });
});