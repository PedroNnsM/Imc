function calculaImc() {
  const imcNaTela = document.querySelector("#resultado");

  let altura = document.getElementById("altura").value;

  let peso = document.getElementById("peso").value;
  
  var imcCalculado = peso / ( altura * altura );
  
  imcNaTela.innerHTML = "Seu IMC é: <br>"  + imcCalculado.toFixed(2) + "<br>" + resultado
}