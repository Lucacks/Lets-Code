/* 
Crie uma classe Funcionario cujos atributos são nome e e-mail. Guarde as horas trabalhadas em um dicionário cujas chaves são o mês em questão e, em outro dicionário, guarde o salário por hora relativo ao mês em questão. Crie um método que retorna o salário mensal do funcionário.
*/

class Funcionario {
    constructor (nome, email, salarioHora, mes) {
        this.nome = nome;
        this.email = email;
        this.mes = this.mesAtual(mes);
        this.salarioHora = salarioHora;
        this.salarioMensal;
    }

    calculaHoras () {

    }

    calculaSalario () {
        
    }

    mesAtual (mes) {
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;

            case 2:
                return 28;
            default:
                break;
        }
    }

    imprimeSalarioMensal () {
        return salarioMensal;
    }
}

const funcionario = new Funcionario("Lucas", "abc@abc.com.br", 50, 3)

console.log(Funcionario)