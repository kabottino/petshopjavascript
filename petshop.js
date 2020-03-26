let divPet = document.getElementById("pets");

document.createElement("div") //ele vai criar um elemento momentaneamente temporáriamente no caso uma div


let listaDeAnimais = [
    {
    nome: "Doguinho",
    raça: "golden",
    idade: 2,
    sexo: "M",
    tipo:"cachorro",
    porte: "grande",
    Tutor:{
        nome:"Anna",
        telefone:"(11)451233555",
    },
    Vacinado:true,
    },
    {
    nome: "Maia",
    raça: undefined,
    idade: 4,
    sexo: "F",
    tipo:"gato",
    porte: "pequeno",
    Tutor: {
        nome:"Lola",
        telefone:"(11)451233555",
    },
    Vacinado:false,
    }
];

function adicionarPet(nome, raça, idade, sexo, tipo, porte, tutor, vacinado){
    let novoPet = {
        nome: nome,
        raça: raça,
        idade: idade,
        sexo: sexo,
        tipo: tipo,
        porte: porte,
        Tutor: {
        nome: tutor,
        telefone:undefined,
    },
        Vacinado:vacinado,
    }
  listaDeAnimais.push(novoPet);
  console.log("salvo com sucesso")
};

// function visualizarPet(){
//     for (let i=0; i < listaDeAnimais.length; i++){ /* percorrer toda lista de animais*/
//         let animal = listaDeAnimais[i] /* criou a variavel animal para gravar as informação */
//         console.log("---------------------------")
//         console.log("Nome do animal:" + animal.nome)
//         console.log("Tipo do animal:" + animal.tipo)
//         console.log("Sexo do animal:" + animal.sexo)
//         console.log("Nome do Tutor:" + animal.tutor.nome)
//     }
// }
function visualizarPet(){
    for (let i=0; i < listaDeAnimais.length; i++){ 
         let animal = listaDeAnimais[i]
         
         let divConteudoPet = document.createElement('div')
         divConteudoPet.setAttribute('class','bixinho');
         
         let pSeparador = document.createElement('p'); // p para cada informação que quero guardar
         pSeparador.textContent = "--------------------------";
         
         let pNomeAnimal = document.createElement('p');
         pNomeAnimal.textContent = "Nome do Animal: " + animal.nome
         
         let pTipoDoAnimal = document.createElement('p');
         pTipoDoAnimal.textContent = "Tipo do Animal: " + animal.tipo

         divConteudoPet.appendChild(pSeparador) /*está criando uma div filho */
         divConteudoPet.appendChild(pNomeAnimal)
         divConteudoPet.appendChild(pTipoDoAnimal)
         divConteudoPet.appendChild(divConteudoPet)
    }
}
// function buscarPet(nome){ 
//     //for (let i=0; i < listaDeAnimais.length; i++)
//     if (name = listaDeAnimais.find(element=>element == animal.nome)){

//       console.log (name);
//   }else{
//       console.log ( "esse animal não está cadastrado");
//   }

// };
function buscarPet(nomePet)
for (let index = 0; index < listaDeAnimais.length; index++) {
    const animal = listaDeAnimais[index];
    if (animal.nome == nomePet){
        return console.log ("Sim, existe esse animal cadastrado no sistema")
    }
    console.log ("não existe esse animal no nosso sistema");
    
}