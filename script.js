//Calcular Salário

function calculateSalary(salarioFixo, valorVendas) {
  let salarioTotal = 0;
  let comissao = 0;
  if (valorVendas <= 1200) {
    comissao = valorVendas * 0.03;
  } else if (valorVendas > 1200) {
    let diferenca = 0.03 * 1200;
    comissao = (valorVendas - 1200) * 0.05 + diferenca;
  }
  salarioTotal = salarioFixo + comissao;
  return salarioTotal;
}
console.log(calculateSalary(1200, 1300));

// Saque de dinheiro

function cashMachine(saqueValor, salarioFixo, valorVendas) {
  let saldo = 0;
  let salario = calculateSalary(salarioFixo, valorVendas);
  let saque = saqueValor;
  let nota200 = 0;
  let nota100 = 0;
  let nota50 = 0;
  let nota20 = 0;
  let nota10 = 0;
  let nota5 = 0;
  let nota2 = 0;

  if (saqueValor > salario) {
    return "Saldo Insuficiente";
  }

  for (let i = 0; i < saqueValor; i++) {
    if (saqueValor >= 200) {
      nota200++;
      saldo = saqueValor -= 200;
    } else if (saldo >= 100) {
      nota100++;
      saldo -= 100;
    } else if (saldo >= 50) {
      nota50++;
      saldo -= 50;
    } else if (saldo >= 20) {
      nota20++;
      saldo -= 20;
    } else if (saldo >= 10) {
      nota10++;
      saldo -= 10;
    } else if (saldo >= 5) {
      nota5++;
      saldo -= 5;
    } else if (saldo >= 2) {
      nota2++;
      saldo -= 2;
    }
  }

  return `Notas sacadas: ${nota200} notas de R$200, ${nota100} notas de R$100, ${nota50} notas de R$50, ${nota20} notas de R$20, ${nota10} notas de R$10, ${nota5} notas de R$5, ${nota2} notas de R$2. Seu salario final é R$${
    salario - saque + saldo
  }`;
}
console.log(cashMachine(1999, 2500, 1300));

//Calcular Estoque

function calculateStock(estoqueAtual, estoqueMax, estoqueMin) {
  let mediaProdutos = (estoqueMax + estoqueMin) / 2;
  if (estoqueAtual >= mediaProdutos) {
    return "Não efetuar compra";
  } else {
    return "Efetuar compra";
  }
}
console.log(calculateStock(0, 10, 2));

// Calcular Idade

function calculateAge(anoNascimento, anoAtual) {
  let anos = 0;
  let meses = 0;
  let dias = 0;
  let semanas = 0;
  let resultado;

  anos = anoAtual - anoNascimento;
  meses = anos * 12;
  semanas = anos * 48;
  dias = anos * 365;
  resultado = `Essa pessoa esta viva a: ${anos} anos, ou: ${meses} meses, ou: ${semanas} semanas ou: ${dias} dias.`;
  return resultado;
}

console.log(calculateAge(1994, 2022));

// Matriz Quadrada

let matrizQuadrada3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function getDiagonal(matrizQuadrada) {
  let vetor = [];
  for (let i = 0; i < matrizQuadrada.length; i++) {
    vetor.push(matrizQuadrada[i][i]);
  }
  return vetor;
}

console.log(getDiagonal(matrizQuadrada3x3));
