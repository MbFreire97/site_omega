'use strict'

        // ativar o slick
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true
    });

        // ativação do jquery mask
        $("#telefone").mask("(00) 0000-0000");


        //script para o contador de caracteres

            var spanMaximo = $("#maximo");
            var bCaracteres = $("#caracteres");
            var textMensagem = $("#mensagem");

            //Detreminado a qntd de caracteres
            var quantidade = 400;


        // Evento para detectar entrada (digitação) no campo
        textMensagem.on("input", function(){
                //captura em tempo real
            //console.log(textMensagem.val());


                var conteudo = textMensagem.val();

                // criando contagem regressiva
                var contagem = quantidade - conteudo.length;
            console.log(contagem);

            //Exibindo a contagem no HTML
            bCaracteres.text(contagem);
            
            if(contagem == 0){
                spanMaximo.css("color", "red");
            } else {
                spanMaximo.css("color", "preto");
            }

        });