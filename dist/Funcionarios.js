"use strict";
var Funcionarios = /** @class */ (function () {
    function Funcionarios(_nome, _salario, _dias, _faltas) {
        this._nome = _nome;
        this._salario = _salario;
        this._dias = _dias;
        this._faltas = _faltas;
    }
    Object.defineProperty(Funcionarios.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (salario) {
            this._salario = salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "dias", {
        get: function () {
            return this._dias;
        },
        set: function (dias) {
            this._dias = dias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "faltas", {
        get: function () {
            return this._faltas;
        },
        set: function (faltas) {
            this._faltas = faltas;
        },
        enumerable: false,
        configurable: true
    });
    Funcionarios.prototype.salarioBruto = function () {
        return this.salario * this.dias;
    };
    Funcionarios.prototype.prl = function () {
        switch (this.faltas) {
            case 0: {
                return this.salarioBruto();
            }
            case 1: {
                return this.salarioBruto() * 0.94;
            }
            case 2: {
                return this.salarioBruto() * 0.92;
            }
            case 3: {
                return this.salarioBruto() * 0.90;
            }
            case 4: {
                return this.salarioBruto() * 0.88;
            }
            default: {
                return 0;
            }
        }
    };
    Funcionarios.prototype.desconto = function () {
        return this.salarioBruto() * 0.05;
    };
    Funcionarios.prototype.salarioLiquido = function () {
        return this.salarioBruto() - this.desconto() + this.prl();
    };
    Funcionarios.prototype.message1 = function () {
        return "O funcion\u00E1rio de nome " + this.nome + " tem o sal\u00E1rio bruto de " + this.salarioBruto() + ", teve " + this.faltas + " faltas e sua PRL foi de " + this.prl();
    };
    Funcionarios.prototype.message2 = function () {
        return "O funcion\u00E1rio de nome " + this.nome + " tem o sal\u00E1rio bruto de " + this.salarioBruto() + ", o desconto de " + this.desconto() + ", a PLR de\n        " + this.prl() + " e o sal\u00E1rio l\u00EDquido de " + this.salarioLiquido();
    };
    return Funcionarios;
}());
var breno = new Funcionarios("Breno", 100, 22, 0);
console.log(breno.message1());
console.log(breno.message2());
