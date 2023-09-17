let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const Lucas: Pessoa = new Pessoa('Luquinhas', 18, new Date('2005-10-23'));
console.log(Lucas.nome)
console.log(Lucas.idade)
console.log(Lucas.dataNascimento)

const Lukz: PessoaFisica = new PessoaFisica('Lukz', 22, new Date('2000-10-23'), "321.321.321-32");
console.log(Lukz.nome)
console.log(Lukz.idade)
console.log(Lukz.dataNascimento)
console.log(Lukz.cpf)

const LukzLTDA: PessoaJuridica = new PessoaJuridica('Lukz Crossing Montagens de Ilha - Ltda', 50, new Date('1965-10-23'), "123.123.123/0001-01");
console.log(LukzLTDA.nome)
console.log(LukzLTDA.idade)
console.log(LukzLTDA.dataNascimento)
console.log(LukzLTDA.cnpj)