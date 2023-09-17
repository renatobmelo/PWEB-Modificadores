class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
        this.nome = super.nome + ' - Jurídica';
    }
    get cnpj() {
        return this._cnpj;
    }
}
