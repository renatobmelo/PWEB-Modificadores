class PessoaJuridica extends Pessoa{
    private _cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string){
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
        this.nome = super.nome + ' - Jurídica';
    }

    set cnpj(value: string) {
        this._cnpj = value;
    }

    get cnpj(): string {
        return this._cnpj;
    }
}