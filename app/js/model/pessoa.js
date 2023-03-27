class Pessoa {
    nome;
    idade;
    dataNascimento;
    constructor(nome, idade, dataNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
    }
    // Métodos acessores
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getDataNascimento() {
        return this.dataNascimento;
    }
    // Métodos modificadores
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setDataNascimento(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
