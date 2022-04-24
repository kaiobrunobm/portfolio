$(function() {
    $(".en").click(function() { 

    $(".navbar").children().eq(0).text("About me");
    $(".navbar").children().eq(1).text("Resume");
    $(".navbar").children().eq(2).text("Projects");
    $(".navbar").children().eq (3).text("Contact me");
    $(".language-selected").removeClass("change-en");
    $(".language-selected").removeClass("change-br");
    $(".language-selected").addClass(".change-en");
    $(".home-title").text("Front end Developer and designer");
    });
});
$(function() {
    $(".br").click(function() { 

    $(".navbar").children().eq(0).text("Sobre mim");
    $(".navbar").children().eq(1).text("Curriculo");
    $(".navbar").children().eq(2).text("Projetos");
    $(".navbar").children().eq(3).text("Contate-me");
    $(".language-selected").removeClass("change-en");
    $(".language-selected").removeClass("change-br");
    $(".language-selected").addClass(".change-br");
    $(".home-title").text("Front end Desenvolvedor e designer");
    });
});