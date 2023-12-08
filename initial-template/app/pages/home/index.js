// import { createClient } from "../../node_modules/@supabase/supabase-js/dist/main/createclien"



// Create a single supabase client for interacting with your database


const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);



let { data: video2, error } = await supabase
    .from('video2')
    .select('img_video')


console.log(data)

// let link2 = document.querySelector('.link-2');
// const posicoeNoEixoX = link2.getBoundingClientRect().x;

// console.log(Math.floor(posicoeNoEixoX));

// function indentificarRolagemContenerScroll() {

//     let rolandoLink2 = document.querySelector('.link-2').getBoundingClientRect().x;

//     let posicoeNoEixoX = link2.getBoundingClientRect().x;

//     var numeroNegativo = rolandoLink2 - Math.floor(posicoeNoEixoX);
//     var numeroPositivo = Math.abs(numeroNegativo);

//     console.log(numeroPositivo); // Saída: 10

//     console.log(numeroPositivo >= 1)
//     if (rolandoLink2 - Math.floor(posicoeNoEixoX) >= 1) {
//         console.log("Rolando Contener Scroll")

//         return;
//     }


//     console.log(rolandoLink2)
//     console.log(Math.floor(posicoeNoEixoX));
//     console.log("Erros")
// }

const informacoesVideos = {
    "video-2": {
        "img-video": "",
        "tempo": "",
        "nome-criador": "",
        "visualizacoes": "",
        "avaliacao": ""
    }
}


var div = document.createElement("div");

div.classList.add("videos__div");



// Cria um novo nó de texto
var text = document.createTextNode("Este é um novo elemento div.");

// Adiciona o nó de texto ao div
div.appendChild(text);

// Adiciona o div ao corpo do documento
document.body.appendChild(div);


