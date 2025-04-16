console.log('______________________________________________________');
console.log('Seja bem-vindo a Ag-burguers');

console.log('Aqui voce pode escolher o tamanho do seu lanche a seguir:');

let lanche1 = 'Pequeno'
let lanche2 = 'Médio'
let lanche3 = 'Grande'
let lancheCliente = 'Grande'

console.log('Lanche', lanche1);
console.log('Lanche', lanche2);
console.log('Lanche', lanche3);

if(lancheCliente == lanche1){
    console.log('Seu lanche escolhido foi', lanche1, 'ficará pronto em 5 minutos');
}
else if(lancheCliente == lanche2){
    console.log('Seu lanche escolhido foi', lanche2, 'ficará pronto em 10 minutos');
}
else if(lancheCliente == lanche3){
    console.log('Seu lanche escolhido foi', lanche3, 'ficará pronto em 15 minutos');
}
else{
    console.log('Não temos esse tamanho de lanche aqui');
}

console.log('Obrigado pela preferncia! Volte sempre');
console.log('________________________________________________________');