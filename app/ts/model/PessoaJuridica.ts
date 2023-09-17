class PessoaJuridica extends Pessoa{
    readonly _cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string){
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
        this.nome = super.nome + ' - Jurídica';
    }

        get cnpj(): string {
        return this._cnpj;
    }
}