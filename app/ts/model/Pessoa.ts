class Pessoa {
    protected _nome:string;
    private _idade:number;
    private _dataNascimento:Date;
    constructor(nome: string, idade: number, dataNascimento: Date){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(value: number) {
        this._idade = value;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(value: Date) {
        this._dataNascimento = value;
    }

}