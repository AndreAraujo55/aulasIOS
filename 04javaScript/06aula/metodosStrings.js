let nome = 'José Silva'

console.log(nome[1]);
console.log(nome.charAt(1));// CharAt acessa o caracter onde voce indicar a posição do indice do array/string

console.log(nome.length); //Lenght indicara quantos caracteres possui em sua string

console.log(nome.toLowerCase());//Transforma tudo em maiusculo
console.log(nome.toUpperCase()); // TRansformar tudo em minusculo

console.log(nome.substring(0,4)); // O primeiro numero indica onde começo o corte e o segundo numero indica onde termina

console.log(nome.split(' '));

let batata = 'batata'

console.log(batata.split('a'));// o split corta tudo o que voce especificar e separa o restante em strings separadas

let meuNome = 'André Araujo'
let nomeAlterado = meuNome.replace('André', 'Araujo') //replace: substituir seu nome com outro
console.log('Olá',nomeAlterado);
