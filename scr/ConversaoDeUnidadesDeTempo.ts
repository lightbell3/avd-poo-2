class ConversaoDeUnidadesDeTempo{
    static converMinutoParaSegundo(tempo: number){
        return `${tempo * 60} segundos`
    }
    
    static converHoraParaMinuto(tempo: number){
        return `${tempo * 60} minutos`
    }

    static converDiaParaHoras(tempo: number){
        return `${tempo * 24} horas`
    }

    static converSemanaParaDias(tempo: number){
        return `${tempo * 7} dias`
    }

    static converAnoParaDias(tempo: number){
        return `${tempo * 365.25} dias`
    }

}

console.log(ConversaoDeUnidadesDeTempo.converMinutoParaSegundo(1))
console.log(ConversaoDeUnidadesDeTempo.converHoraParaMinuto(1))
console.log(ConversaoDeUnidadesDeTempo.converDiaParaHoras(1))
console.log(ConversaoDeUnidadesDeTempo.converSemanaParaDias(1))
console.log(ConversaoDeUnidadesDeTempo.converAnoParaDias(1))
