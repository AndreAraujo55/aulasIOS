console.log('_______________________________________________________________________________');
console.log('Olá, somos a Ag-Telefonia ');
console.log('Qual é o seu problema? temos alguns códigos abaixo que você pode escolher:');
console.log('_______________________________________________________________________________');
console.log('Erro na conexão de Internte - Código: E101');
console.log('Há uma falha no servidor - Código: E202');
console.log('Erro no login do sistema - Código: E303');
console.log('_______________________________________________________________________________');

let erro = 'E101'

switch (erro) {
    case 'E101':
        console.log('Encontramos a falha, desligue e ligue o seu Wifi, que o problema será resolvido');
        break;

    case 'E202':
        console.log('A sua falha foi resolvida, tente novamente');
        break;

    case 'E303':
        console.log('Resetamos seu login, tente noamente, e já estará resolvido');

    default:
        console.log('Erro desconhecido, entre em contato com o suporte');
        break;
}
console.log('_______________________________________________________________________________');
console.log('Obrigado por entrar em contato conosco, a sua ligação está sendo encerrada');
console.log('_______________________________________________________________________________');
