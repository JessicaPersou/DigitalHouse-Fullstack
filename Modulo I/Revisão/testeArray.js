// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
    let [dia, mes, ano] = dataDeNascimento.split('/');
    const d = new Date();
    const anoAtual = d.getFullYear();
    const mesAtual = d.getMonth() + 1;
    const diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    let quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
 }
  
 // Escreva aqui sua função
 function deixaEntrar(dataDeNascimento, censura){
     if(dataDeNascimento > censura){
         return true
     }else{
         return false
     }
 }

 console.log(deixaEntrar())