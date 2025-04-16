console.log('Olá, vc fala com a Ag-telefonia, o que deseja?');

let caso1 = 'Urgente'
let caso2 = 'Comum'
let caso3 = 'Informações gerais'
let casoCliente
console.log('O seu caso é', caso1);
console.log('O seu caso é', caso2);
console.log('O seu caso é', caso3);

if(casoCliente == caso1){
    console.log('Olá, meu nome é Joseildo, o que deseja?');
}
else if(casoCliente == caso2){
    console.log('Você está na linha de espera');
}
else if(casoCliente == caso2){
    console.log('Você está em um menu automático');
}
else{
    console.log('Não podemos prosseguir, não temos essa função aqui');
}