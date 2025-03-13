let contadores = {crianca: 0, adolescente: 0, adulto: 0, idoso: 0};

while (true) {
    let idade = parseInt(prompt("Digite a idade:"));
    
    if (idade <= 12) contadores.crianca++;
    else if (idade <= 17) contadores.adolescente++;
    else if (idade <= 59) contadores.adulto++;
    else contadores.idoso++;
    
    let continuar = prompt("Deseja inserir outra idade?").toLowerCase();
    if (continuar !== 'sim') break;
}

alert(`Crianças: ${contadores.crianca}, Adolescentes: ${contadores.adolescente}, Adultos: ${contadores.adulto}, Idosos: ${contadores.idoso}`);
