//configuração do carrosel no js.

$('.owl-carousel').owlCarousel({
    loop:true,                   // Roda o Carrosel de modo infinito se colocar false para na ultima imagem;
    margin:10,                 //  Distanciamento entre as imagens do carrosel;
    nav:false,                  //   Menu de naveção se deixar false ficam apenas as bolinhas;
    responsive:{                //  modo de adaptação da tela conforme o tamanho
        0:{
            items:1             // quando a tela estiver proxima de 0px mostra 1 imagen por vez
        },
        600:{
            items:3            // 600px ou menos, ficam 3 imagens disponiveis
        },
        1000:{
            items:5          // tela de 1000px pra mais, ficam 5 imagens disponiveis
        }
    }
})