class PessoaJuridica extends Pessoa{
    private _cnpj: number;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: number){
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
        this.nome = super.nome + ' Juridica';
    }

    set cnpj(value: number) {
        this._cnpj = value;
    }

    get cnpj(): number {
        return this._cnpj;
    }
}