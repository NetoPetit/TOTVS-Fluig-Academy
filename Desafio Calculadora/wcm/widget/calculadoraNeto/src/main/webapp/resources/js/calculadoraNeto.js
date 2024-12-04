var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
    
     //BIND de eventos
    bindings: {
        local: {
            'somar': ['click_executaSoma'],
    		'subtrair': ['click_executaSubtrair'],
    		'multiplicar': ['click_executaMultiplicar'],
    		'dividir': ['click_executaDividir']
     },
     
        global: {}
    },
 
    executaSoma: function() {
    	var valor1 = parseInt($("#exampleInputCalculadora1_" + this.instanceId).val(), 10);
        var valor2 = parseInt($("#exampleInputCalculadora2_" + this.instanceId).val(), 10);
    	var soma = valor1 + valor2;
    	$("#exampleInputCalculadora3_"+this.instanceId).val(soma);
    },
    executaSubtrair: function() {
    	var valor1 = parseInt($("#exampleInputCalculadora1_" + this.instanceId).val(), 10);
        var valor2 = parseInt($("#exampleInputCalculadora2_" + this.instanceId).val(), 10);
    	var subtracao = valor1 - valor2;
    	$("#exampleInputCalculadora3_"+this.instanceId).val(subtracao);
    },
    executaMultiplicar: function() {
    	var valor1 = parseInt($("#exampleInputCalculadora1_" + this.instanceId).val(), 10);
        var valor2 = parseInt($("#exampleInputCalculadora2_" + this.instanceId).val(), 10);
    	var multiplicacao = valor1 * valor2;
    	$("#exampleInputCalculadora3_"+this.instanceId).val(multiplicacao);
    },
    executaDividir: function() {
        var valor1 = parseInt($("#exampleInputCalculadora1_" + this.instanceId).val(), 10);
        var valor2 = parseInt($("#exampleInputCalculadora2_" + this.instanceId).val(), 10);
        var divisao = valor1 / valor2;
    	$("#exampleInputCalculadora3_"+this.instanceId).val(divisao);
    }
  
});

