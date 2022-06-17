var input = document.getElementById('input');//pega o input
var btnEnviar = document.querySelector('input[type=submit]')//pega o botao enviar
var indice = 0;//contagem

    function exibir() {
        document.getElementById("total").style.display = "block";//display block
        // document.querySelector(".parar").style.display = "block";outra forma
    }

    function ocultar() {
        document.getElementById("total").style.display = "none";//display none
        // document.querySelector(".parar").style.display = "none";
    }

   ocultar()// chamando a função para ocultar o id total

btnEnviar.addEventListener('click',(e) => {//evento de click no enviar

    e.preventDefault();

    const pokemon = [//nome de todos os Pokemon da primeira geração
        {nome: 'missingno'},
        {nome: 'bulbasaur'},
        {nome: 'ivysaur'},
        {nome: 'venusaur'},
        {nome: 'charmander'},
        {nome: 'charmeleon'},
        {nome: 'charizard'},
        {nome: 'squirtle'},
        {nome: 'wartortle'},
        {nome: 'blastoise'},
        {nome: 'caterpie'},
        {nome: 'metapod'},
        {nome: 'butterfree'},
        {nome: 'weedle'},
        {nome: 'kakuna'},
        {nome: 'beedril'},
        {nome: 'pidgey'},
        {nome: 'pidgeotto'},
        {nome: 'pidgeot'},
        {nome: 'rattata'},
        {nome: 'raticate'},
        {nome: 'spearow'},
        {nome: 'fearow'},
        {nome: 'ekans'},
        {nome: 'arbok'},
        {nome: 'pikachu'},
        {nome: 'raichu'},
        {nome: 'sandshrew'},
        {nome: 'sandslash'},
        {nome: 'nidoran'},
        {nome: 'nidorina'},
        {nome: 'nidoqueen'},
        {nome: 'nidoran'},
        {nome: 'nidorino'},
        {nome: 'nidoking'},
        {nome: 'clefairy'},
        {nome: 'clefable'},
        {nome: 'vulpix'},
        {nome: 'ninetales'},
        {nome: 'jigglypuff'},
        {nome: 'wigglytuff'},
        {nome: 'zubat'},
        {nome: 'golbat'},
        {nome: 'oddish'},
        {nome: 'gloom'},
        {nome: 'vileplume'},
        {nome: 'paras'},
        {nome: 'parasect'},
        {nome: 'venonat'},
        {nome: 'venomoth'},
        {nome: 'digglet'},
        {nome: 'dugtrio'},
        {nome: 'meowth'},
        {nome: 'persian'},
        {nome: 'psyduck'},
        {nome: 'golduck'},
        {nome: 'mankey'},
        {nome: 'primeape'},
        {nome: 'growlithe'},
        {nome: 'arcanine'},
        {nome: 'poliwag'},
        {nome: 'poliwhirl'},
        {nome: 'poliwrath'},
        {nome: 'abra'},
        {nome: 'kadabra'},
        {nome: 'alakazam'},
        {nome: 'machop'},
        {nome: 'machoke'},
        {nome: 'machamp'},
        {nome: 'bellsprout'},
        {nome: 'weepinbell'},
        {nome: 'victreebel'},
        {nome: 'tentacool'},
        {nome: 'tentacruel'},
        {nome: 'geodude'},
        {nome: 'graveler'},
        {nome: 'golem'},
        {nome: 'ponyta'},
        {nome: 'rapidash'},
        {nome: 'slowpoke'},
        {nome: 'slowbro'},
        {nome: 'magnemite'},
        {nome: 'magneton'},
        {nome: 'farfetch'},
        {nome: 'doduo'},
        {nome: 'dodrio'},
        {nome: 'seel'},
        {nome: 'dewgong'},
        {nome: 'grimer'},
        {nome: 'muk'},
        {nome: 'shellder'},
        {nome: 'cloyster'},
        {nome: 'gastly'},
        {nome: 'haunter'},
        {nome: 'gengar'},
        {nome: 'onix'},
        {nome: 'drowzee'},
        {nome: 'hypno'},
        {nome: 'krabby'},
        {nome: 'kingler'},
        {nome: 'voltorb'},
        {nome: 'electrode'},
        {nome: 'exeggcute'},
        {nome: 'exeggutor'},
        {nome: 'cubone'},
        {nome: 'marowak'},
        {nome: 'hitmonlee'},
        {nome: 'hitmonchan'},
        {nome: 'lickitung'},
        {nome: 'koffing'},
        {nome: 'weezing'},
        {nome: 'rhyhorn'},
        {nome: 'rhydon'},
        {nome: 'chansey'},
        {nome: 'tangela'},
        {nome: 'kangaskhan'},
        {nome: 'horsea'},
        {nome: 'seadra'},
        {nome: 'goldeen'},
        {nome: 'seaking'},
        {nome: 'staryu'},
        {nome: 'starmie'},
        {nome: 'mr.mime'},
        {nome: 'scyther'},
        {nome: 'jynx'},
        {nome: 'electabuzz'},
        {nome: 'magmar'},
        {nome: 'pinsir'},
        {nome: 'tauros'},
        {nome: 'magikarp'},
        {nome: 'gyarados'},
        {nome: 'lapras'},
        {nome: 'ditto'},
        {nome: 'evee'},
        {nome: 'vaporeon'},
        {nome: 'jolteon'},
        {nome: 'flareon'},
        {nome: 'porygon'},
        {nome: 'omanyte'},
        {nome: 'omastar'},
        {nome: 'kabuto'},
        {nome: 'kabutops'},
        {nome: 'aerodactyl'},
        {nome: 'snorlax'},
        {nome: 'articuno'},
        {nome: 'zapdos'},
        {nome: 'moltres'},
        {nome: 'dratini'},
        {nome: 'dragonair'},
        {nome: 'dragonite'},
        {nome: 'mewtwo'},
        {nome: 'mew'}
    ];
    
    if(input.value =='missigno'){//Alguns erros comuns sobre o nome dos Pokemon
        alert('Você quis dizer missingno')
    }else if(input.value =='yvisaur'){
        alert('Você quis dizer ivysaur')
    }else if(input.value =='squartle'){
        alert('Você quis dizer squirtle')
    }else if(input.value =='wartotle'){
        alert('Você quis dizer wartortle')
    }else if(input.value =='buterfree'){
        alert('Você quis dizer butterfree')
    }else if(input.value =='beedrill'){
        alert('Você quis dizer beedril')
    }else if(input.value =='sandsrew'){
        alert('Você quis dizer sandshrew')
    }else if(input.value =='sandshlash'){
        alert('Você quis dizer sandslash')
    }else if(input.value =='cleafairy'){
        alert('Você quis dizer clefairy')
    }else if(input.value =='cleafable'){
        alert('Você quis dizer clefable')
    }else if(input.value =='venonath'){
        alert('Você quis dizer venonat')
    }else if(input.value =='monkey'){
        alert('Você quis dizer mankey')
    }else if(input.value =='primape'){
        alert('Você quis dizer primeape')
    }else if(input.value =='growlith'){
        alert('Você quis dizer growlithe')
    }else if(input.value =='growlite'){
        alert('Você quis dizer growlithe')
    }else if(input.value =='poliwhril'){
        alert('Você quis dizer poliwhirl')
    }else if(input.value =='poliwirl'){
        alert('Você quis dizer poliwhirl')
    }else if(input.value =='poliwrhil'){
        alert('Você quis dizer poliwhirl')
    }else if(input.value =='poliwarth'){
        alert('Você quis dizer poliwrath')
    }else if(input.value =='alakazan'){
        alert('Você quis dizer alakazam')
    }else if(input.value =='belsprout'){
        alert('Você quis dizer bellsprout')
    }else if(input.value =='wempimbel'){
        alert('Você quis dizer weepinbell')
    }else if(input.value =='weempimbel'){
        alert('Você quis dizer weepinbell')
    }else if(input.value =='wempimbell'){
        alert('Você quis dizer weepinbell')
    }else if(input.value =='victrebel'){
        alert('Você quis dizer victreebel')
    }else if(input.value =='victrebell'){
        alert('Você quis dizer victreebel')
    }else if(input.value =='ponita'){
        alert('Você quis dizer ponyta')
    }else if(input.value =='magnamite'){
        alert('Você quis dizer magnemite')
    }else if(input.value =='duodrio'){
        alert('Você quis dizer dodrio')
    }else if(input.value =='sel'){
        alert('Você quis dizer seel')
    }else if(input.value =='drowze'){
        alert('Você quis dizer drowzee')
    }else if(input.value =='execggute'){
        alert('Você quis dizer exeggcute')
    }else if(input.value =='exeggute'){
        alert('Você quis dizer exeggcute')
    }else if(input.value =='execggutor'){
        alert('Você quis dizer exeggutor')
    }else if(input.value =='exeggcutor'){
        alert('Você quis dizer exeggutor')
    }else if(input.value =='ryhon'){
        alert('Você quis dizer rhyhorn')
    }else if(input.value =='ryrorn'){
        alert('Você quis dizer rhyhorn')
    }else if(input.value =='rhyron'){
        alert('Você quis dizer rhyhorn')
    }else if(input.value =='rhyrorn'){
        alert('Você quis dizer rhyhorn')
    }else if(input.value =='ryhorn'){
            alert('Você quis dizer rhyhorn')
    }else if(input.value =='rydon'){
        alert('Você quis dizer rhydon')
    }else if(input.value =='stariu'){
        alert('Você quis dizer staryu')
    }else if(input.value =='stariu'){
        alert('Você quis dizer staryu')
    }else if(input.value =='mr. mime'){
        alert('Você quis dizer mr.mime')
    }else if(input.value =='scyter'){
        alert('Você quis dizer scyther')
    }else if(input.value =='jinx'){
        alert('Você quis dizer jynx')
    }else if(input.value =='electabuz'){
        alert('Você quis dizer electabuzz')
    }else if(input.value =='porigon'){
        alert('Você quis dizer porygon')
    }else if(input.value =='omanite'){
        alert('Você quis dizer omanyte')
    }else if(input.value =='aerodactil'){
        alert('Você quis dizer aerodactyl')
    }else if(input.value =='aerodatyl'){
        alert('Você quis dizer aerodactyl')
    }else if(input.value =='snorlex'){
        alert('Você quis dizer snorlax')
    }
    
    else if(input.value =='odish'){
        alert('Você quis dizer oddish')
    }


    let listaTbody = document.getElementById('listaTbody');
    let total = document.getElementById('total');
    let tr = document.createElement('tr');
    var td = document.createElement('td');

    
    pokemon.find(object =>{//rodando na lista do nome dos pokemon
        if(input.value == object.nome){
            td.innerText = input.value;//dizendo que dentro do td tem o mesmo valor que o input
            listaTbody.appendChild(tr);//adicionado tr dentro do tbody
            total.innerText = `Total = ${++indice}`//exibindo o total + indice
            exibir()//exibindo o total dps de achar 1

            td.id = `${object.nome}`;//colocando o id do TD com mesmo nome do pokemon


            input.value = '';//limpando o valor do input
        }
    });

    
    let tdCheckBox = document.createElement('td');//criando um td
    let tdInput = document.createElement('input');//criando um input
    tdInput.type = 'checkbox';//colocando o tipo do input

   

    tdCheckBox.appendChild(tdInput);//colocando input dentro do td
    tr.appendChild(tdCheckBox);//colocando tdCheckBox dentro do tr
    tr.appendChild(td);//colocando td dentro do tr

    tdInput.addEventListener('change',() =>{//evento de escolha
        let resposta = confirm('Deseja excluir da lista?');
        if(resposta){
            
            total.innerText = `Total = ${--indice}`//quando remover da lista diminui 1 no indice
            tr.style.backgroundImage = 'linear-gradient(to right, #6165EB , #AB87E8)';//cor
            tr.style.transition = '2s';//tempo

            setTimeout(() =>{
                tr.remove();//removendo tr
            }, 250);//tempo
        }
    });
})

