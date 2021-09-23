"use strict";
var Produto = /** @class */ (function () {
    function Produto(_produto, _preco, _quantidade) {
        this._produto = _produto;
        this._preco = _preco;
        this._quantidade = _quantidade;
    }
    Object.defineProperty(Produto.prototype, "produto", {
        get: function () {
            return this._produto;
        },
        set: function (produto) {
            if (produto === "") {
                throw new Error('Nome do  produto em branco !!');
            }
            this._produto = produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            if (preco === 0) {
                throw new Error('Preço inválido !!');
            }
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if (quantidade === 0) {
                throw new Error('Quantidade inválida !!');
            }
            this._quantidade = quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.desconto = function () {
        if (this.quantidade <= 10) {
            return 0;
        }
        else if (this.quantidade >= 11 && this.quantidade <= 20) {
            return this.preco * 0.1;
        }
        else if (this.quantidade >= 21 && this.quantidade <= 50) {
            return this.preco * 0.2;
        }
        else if (this.quantidade > 50) {
            return this.preco * 0.25;
        }
        return 0;
    };
    Produto.prototype.message = function () {
        var desc = this.desconto();
        var total = (this.preco * this.quantidade) - desc;
        return "O produto " + this.produto + " de pre\u00E7o " + this.preco + ", quantidade comprada de " + this.quantidade + " teve o desconto de " + desc + " e o valor pago foi de  " + total + " ";
    };
    return Produto;
}());
var produto = new Produto('Televisão', 1500, 50);
try {
    produto.produto = '';
}
catch (err) {
    console.log(err.message);
}
try {
    produto.quantidade = 0;
}
catch (err) {
    console.log(err.message);
}
try {
    produto.preco = 0;
}
catch (err) {
    console.log(err.message);
}
console.log(produto);
console.log(produto.message);
