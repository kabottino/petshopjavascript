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

function visualizarPet(){
    for (let i=0; i < listaDeAnimais.length; i++){ /* percorrer toda lista de animais*/
        let animal = listaDeAnimais[i] /* criou a variavel animal para gravar as informação */
        console.log("---------------------------")
        console.log("Nome do animal:" + animal.nome)
        console.log("Tipo do animal:" + animal.tipo)
        console.log("Sexo do animal:" + animal.sexo)
        console.log("Nome do Tutor:" + animal.tutor.nome)
    }
}
function buscarPet(){ /*recebe o nome do pet e precisa falar se existe ou não*/

}