function calcularFrete(pecas, distancia, regiao, rastrear) {
    let precos = {1: 1.2, 2: 1.3, 3: 1.5};
    let precoPorPeca = precos[regiao];
    
    let precoTotal = pecas <= 1000 ? pecas * precoPorPeca : 
        (1000 * precoPorPeca) + ((pecas - 1000) * (precoPorPeca * 0.88));
    
    let precoPorKm = distancia * 1;
    let rastreamento = rastrear ? 200 : 0;
    
    return precoTotal + precoPorKm + rastreamento;
}

while (true) {
    let pecas = parseInt(prompt("Digite a quantidade de peças:"));
    let distancia = parseInt(prompt("Digite a distância em km:"));
    let regiao = parseInt(prompt("Digite a região"));
    let rastrear = prompt("Deseja rastrear?").toLowerCase() === 's';
    
    alert("Total do frete: R$ " + calcularFrete(pecas, distancia, regiao, rastrear).toFixed(2));

    let continuar = prompt("Deseja calcular outro frete?").toLowerCase();
    if (continuar !== 'sim') break;
}
