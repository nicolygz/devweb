function calcularMedia(n1, n2, n3) {
    let pesos = [2, 3, 5];
    return ((n1 * pesos[0]) + (n2 * pesos[1]) + (n3 * pesos[2])) / (pesos[0] + pesos[1] + pesos[2]);
}

while (true) {
    let nome = prompt("Nome do aluno:");
    let n1 = parseFloat(prompt("Nota 1:"));
    let n2 = parseFloat(prompt("Nota 2:"));
    let n3 = parseFloat(prompt("Nota 3:"));
    
    let media = calcularMedia(n1, n2, n3);
    
    let classificacao = media >= 7 ? "Aprovado" : media >= 5 ? "Recuperação" : "Reprovado";

    alert(`Aluno: ${nome}\nMédia: ${media.toFixed(2)}\nClassificação: ${classificacao}`);

    let continuar = prompt("Deseja calcular outra média?").toLowerCase();
    if (continuar !== 'sim') break;
}
