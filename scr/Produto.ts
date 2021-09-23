class Produto{

    constructor(
        private _produto: string,
        private _preco: number,
        private _quantidade: number
    ) { }
    
    get produto() {
        return this._produto
    }
    
    get preco() {
        return this._preco
    }
    
    get quantidade() {
        return this._quantidade
    }

    set produto(produto: string) {
        if (produto === "") {
          throw new Error('Nome do  produto em branco !!')
        }
        this._produto = produto
    }

    set preco(preco: number) {
        if (preco === 0 ) {
          throw new Error('Preço inválido !!')
        }
        this._preco = preco
    }

    set quantidade(quantidade: number) {
        if (quantidade === 0) {
          throw new Error('Quantidade inválida !!')
        }
        this._quantidade = quantidade
    }

    private desconto(){
        if(this.quantidade<=10){
            return 0
        }
        else if(this.quantidade >= 11 &&  this.quantidade<=20){
            return this.preco * 0.1
        }
        else if(this.quantidade >= 21 && this.quantidade<=50){
            return this.preco * 0.2
        }
        else if(this.quantidade > 50){
            return this.preco * 0.25
        }
        return 0
    }

    public message(){
        const desc = this.desconto()
        const total = (this.preco *  this.quantidade) - desc
        return `O produto ${this.produto} de preço ${this.preco}, quantidade comprada de ${this.quantidade} teve o desconto de ${desc} e o valor pago foi de  ${total} `
    }

}
const produto = new Produto('Televisão', 1500, 50)
try{
    produto.produto = ''
}catch(err){
    console.log(err.message)
}
try{
    produto.quantidade = 0
}catch(err){
    console.log(err.message)
}
try{
    produto.preco = 0
}catch(err){
    console.log(err.message)
}

console.log(produto)
console.log(produto.message)
