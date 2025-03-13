function calcularSalario(codigo, horas, turno, categoria, salarioMin) {
    let percentual = {
        'F': {'M': 0.1, 'V': 0.15, 'N': 0.2},
        'G': {'M': 0.3, 'V': 0.35, 'N': 0.4}
    };
    
    let valorHora = salarioMin * percentual[categoria][turno];
    let salarioInicial = valorHora * horas;
    let auxilio = salarioInicial <= 800 ? salarioInicial * 0.25 :
                  salarioInicial <= 1200 ? salarioInicial * 0.2 :
                  salarioInicial * 0.15;

    return {
        codigo, horas, turno, categoria, valorHora, salarioInicial,
        auxilio, salarioFinal: salarioInicial + auxilio
    };
}

while (true) {
    let codigo = prompt("Código do funcionário:");
    let horas = parseInt(prompt("Horas trabalhadas:"));
    let turno = prompt("Turno").toUpperCase();
    let categoria = prompt("Categoria (F/G):").toUpperCase();
    let salarioMin = parseFloat(prompt("Salário mínimo:"));
    
    let dados = calcularSalario(codigo, horas, turno, categoria, salarioMin);

    alert(`Código: ${dados.codigo}\nHoras: ${dados.horas}\nTurno: ${dados.turno}\nCategoria: ${dados.categoria}\nValor Hora: R$ ${dados.valorHora.toFixed(2)}\nSalário Inicial: R$ ${dados.salarioInicial.toFixed(2)}\nAuxílio: R$ ${dados.auxilio.toFixed(2)}\nSalário Final: R$ ${dados.salarioFinal.toFixed(2)}`);
    
    let continuar = prompt("Deseja cadastrar outro funcionário?").toLowerCase();
    if (continuar !== 'sim') break;
}
