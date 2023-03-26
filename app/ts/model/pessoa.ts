class Pessoa {
    private nome: string;
    private idade: number;
    private dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date) {
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
    }

    // Métodos acessores

    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }

    getDataNascimento(): Date {
        return this.dataNascimento;
    }

    // Métodos modificadores

    setNome(nome: string): void {
        this.nome = nome;
    }

    setIdade(idade: number): void {
        this.idade = idade;
    }

    setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }
}

