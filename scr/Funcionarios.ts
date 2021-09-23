class Funcionarios{
    constructor(
        private _nome: string,
        private _salario: number,
        private _dias: number,
        private _faltas: number
    ){}

    get nome(){
        return this._nome;
    }

    get salario(){
        return this._salario;
    }

    get dias(){
        return this._dias;
    }

    get faltas(){
        return this._faltas;
    }

    set nome(nome: string){
        this._nome = nome
    }

    set salario(salario: number){
        this._salario = salario
    }

    set dias(dias: number){
        this._dias = dias
    }

    set faltas(faltas: number){
        this._faltas = faltas
    }

    private salarioBruto(){
        return this.salario * this.dias
    }

    private prl(){
        switch(this.faltas){
            case 0:{ 
                return this.salarioBruto() 
            }
            case 1:{ 
                return this.salarioBruto() * 0.94
            }
            case 2:{ 
                return this.salarioBruto() * 0.92
            }
            case 3:{ 
                return this.salarioBruto() * 0.90
            }
            case 4:{ 
                return this.salarioBruto() * 0.88
            }
            default:{
                return 0
            }


        }
    }
    private desconto(){
        return this.salarioBruto() * 0.05
    }
    private salarioLiquido(){
        return this.salarioBruto() - this.desconto() + this.prl()
    }
    public message1(){
        return `O funcionário de nome ${this.nome} tem o salário bruto de ${this.salarioBruto()}, teve ${this.faltas} faltas e sua PRL foi de ${this.prl()}` 
    }
    public message2(){
        return `O funcionário de nome ${this.nome} tem o salário bruto de ${this.salarioBruto()}, o desconto de ${this.desconto()}, a PLR de
        ${this.prl()} e o salário líquido de ${this.salarioLiquido()}`
    }
}

const breno = new Funcionarios("Breno", 100, 22, 0);
console.log(breno.message1())
console.log(breno.message2())

