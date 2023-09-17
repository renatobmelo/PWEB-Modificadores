class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
        this.nome = super.nome + ' - Jurídica';
    }
    set cnpj(value) {
        this._cnpj = value;
    }
    get cnpj() {
        return this._cnpj;
    }
}
