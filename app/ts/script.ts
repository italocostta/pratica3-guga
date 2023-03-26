const p = new Pessoa ('Italo', 25, new Date('26/05/1997'));
const pf = new PessoaFisica ('Lucas', 25, new Date('13/11/1997'),'582.815.200-94');
const pj = new PessoaJuridica ('Alana', 24, new Date('19/08/1998'),'38.516.328/0001-38');

console.log('Pessoa: ', p.getNome, p.getIdade, p.getDataNascimento);
console.log('Pessoa Física: ', pf.getNome, pf.getIdade, pf.getDataNascimento, pf.cpf);
console.log('Pessoa Juridica: ', pj.getNome, pj.getIdade, pj.getDataNascimento, pj.cnpj);

const contaController = new ContaController();
contaController.listar();