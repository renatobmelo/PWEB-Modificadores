class PessoaFisica extends Pessoa{
    
    readonly _cpf: number;
    
    constructor(nome: string, idade: number, dataNascimento: Date, cpf: number){
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
        this.nome = super.nome + ' - Física';
    }

    get cpf(): number {
        return this._cpf;
    }
}