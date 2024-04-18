$( "#esconder" ).click(function() {
    $(".exemplo").css("display", "none");
});

var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

$("#paragrafo-html").html("Mudar conteúdo do parágrafo");
conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

var conteudo_texto = $("#paragrafo-text").text();
console.log(conteudo_texto);

$("#mudar_imagem").click(function(){
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});

   // Aplicação do loop each em um array:

   var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

   $.each(lista, function( indice, valor ) {
       console.log('O elemento de índice [' + indice + '] tem o valor de ' + valor);
   });
 

var interesses = $("#interesses li");
$.each(interesses, function(chave, valor) {
    console.log($(valor).text());
})                    

$("input[name='interesse']").change(function() {

    var checkboxes_selecionados = $("input[name='interesse']:checked");
    var textos = [];
    
    $.each(checkboxes_selecionados, function( index, value ) {
        
        textos.push($(value).parent("span").text());
    
    });
    
    console.log(textos);
    
});

$('#nome').on('input', function() {
    $("#confirmar").css("display", "flex");
})