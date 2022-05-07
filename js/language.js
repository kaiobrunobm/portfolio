$(function() {
    $(".en").click(function() { 
        // HEADER
    $(".logo-big").text("Portifolio");
    $(".navbar").children().eq (1).text("Contact me");
    $(".nav-name").eq(0).text("About me");
    $(".nav-name").eq(1).text("Resume");
    $(".nav-name").eq(2).text("Projects");
    $(".nav-name").eq(3).text("Contact me");

        // HOME
    $(".sub-heading").text("Developer and designer");
    $(".arrow-text").text("Scroll down");

        // ABOUT ME
    $(".about-me-title").text("About me");
    $(".about-me-p").text("My name is Kaio Bruno I'm 18 years old and I'm fascinated by technology. I graduated in IT, and today Front End student. I am a speaker of English I am a language lover, and I want to learn several languages and who knows live outside Brazil which is where I was born and live at this moment.");

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


    $(".language-selected").removeClass("change-br");
    $(".language-selected").addClass("change-en");


    });
});
$(function() {
    $(".br").click(function() { 


        // HEADER
    $(".logo-big").text("Portifólio");
    $(".navbar").children().eq(1).text("Contate-me");
    $(".nav-name").eq(0).text("Sobre mim");
    $(".nav-name").eq(1).text("Currículo");
    $(".nav-name").eq(2).text("Projetos");
    $(".nav-name").eq(3).text("Contate-me");


    // HOME
    $(".sub-heading").text("Desenvolvedor e designer");
    $(".arrow-text").text("Role abaixo");

        // ABOUT ME
    $(".about-me-title").text("Sobre mim");
    $(".about-me-p").text("Meu nome é Kaio Bruno, tenho 18 anos e sou fascinado por tecnologia. Eu me formei em TI e hoje sou estudante de front end. Sou falante de inglês e um amante de idiomas, quero aprender vários idiomas e quem sabe morar fora do Brasil, onde eu nasci e moro neste momento.");

        // RESUME
    $(".resume-title").text("Currículo");
    $(".resume-download-btn").text("Baixar");
    $(".skill-title").text("Habilidades");
    $(".language-title").text("Idiomas");

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
    $(".language-selected").addClass("change-br");
    
    });
});