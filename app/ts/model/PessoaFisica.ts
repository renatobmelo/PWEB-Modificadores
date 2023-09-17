class PessoaFisica extends Pessoa{
    
    private _cpf: number;
    
    constructor(nome: string, idade: number, dataNascimento: Date, cpf: number){
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
        this.nome = super.nome + ' - Física';
    }

    set cpf(value: number) {
        this._cpf = value;
    }

    get cpf(): number {
        return this._cpf;
    }
}