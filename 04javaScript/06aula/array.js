let timesFutebol = ['Corinthians' , 'Botafogo' , 'Flamengo' , 'Ferroviario', 'Mirassol', 'Vasco', 'Fluminense', 'Santos', 'Palmeiras', 'SaoPaulo', 'Cuiaba']

//console.log(timesFutebol[0]);
//console.log(timesFutebol.length);

//console.log(`Qual meu time de futebol ${timesFutebol[9]}`);

timesFutebol.pop() //tira o ultimo elemento

timesFutebol.push('Bahia');// acrescenta um elemento
console.log(timesFutebol);
console.log(timesFutebol.length);

timesFutebol.splice(2,1) // splice recebe dois valores separados por virgula, o primeiro valor indica onde sera o corte e o segundo valor indica qual o tamanho do corte e tira um especifico
console.log(timesFutebol);
console.log(timesFutebol.length);
