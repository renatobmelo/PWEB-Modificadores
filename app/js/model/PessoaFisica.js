class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
        this.nome = super.nome + ' Fisica';
    }
    set cpf(value) {
        this._cpf = value;
    }
    get cpf() {
        return this._cpf;
    }
}
