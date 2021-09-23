"use strict";
var ConversaoDeUnidadesDeTempo = /** @class */ (function () {
    function ConversaoDeUnidadesDeTempo() {
    }
    ConversaoDeUnidadesDeTempo.converMinutoParaSegundo = function (tempo) {
        return tempo * 60 + " segundos";
    };
    ConversaoDeUnidadesDeTempo.converHoraParaMinuto = function (tempo) {
        return tempo * 60 + " minutos";
    };
    ConversaoDeUnidadesDeTempo.converDiaParaHoras = function (tempo) {
        return tempo * 24 + " horas";
    };
    ConversaoDeUnidadesDeTempo.converSemanaParaDias = function (tempo) {
        return tempo * 7 + " dias";
    };
    ConversaoDeUnidadesDeTempo.converAnoParaDias = function (tempo) {
        return tempo * 365.25 + " dias";
    };
    return ConversaoDeUnidadesDeTempo;
}());
console.log(ConversaoDeUnidadesDeTempo.converMinutoParaSegundo(1));
console.log(ConversaoDeUnidadesDeTempo.converHoraParaMinuto(1));
console.log(ConversaoDeUnidadesDeTempo.converDiaParaHoras(1));
console.log(ConversaoDeUnidadesDeTempo.converSemanaParaDias(1));
console.log(ConversaoDeUnidadesDeTempo.converAnoParaDias(1));
