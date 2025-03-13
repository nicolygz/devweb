function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    if (imc < 16) return "Baixo peso1";
    if (imc < 17) return "Baixo peso2";
    if (imc < 18.5) return "Baixo peso";
    if (imc < 25) return "Peso normal ";
    if (imc < 30) return "Sobrepeso ";
    if (imc < 35) return "Obesidade grau1";
    if (imc < 40) return "Obesidade2!";
    return "Obesidade3";
}

while (true) {
    let peso = parseFloat(prompt("Digite seu peso"));
    let altura = parseFloat(prompt("Digite sua altura:"));
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Inválido");
        continue;
    }

    alert(`Seu IMC é ${calcularIMC(peso, altura)}`);

    let continuar = prompt("Digite sim pra calcular novamente").toLowerCase();
    if (continuar !== 'sim') {
        alert("fim");
        break;
    }
}


