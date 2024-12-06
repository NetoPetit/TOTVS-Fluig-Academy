var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	this.exemploMustache1();
    },
  
    //BIND de eventos
    bindings: {
        
    	local: {
            'execute': ['click_executeAction']
        },
        global: {}
    
    },
    
    exemploMustache1: function() {
    	
    	const view = {
    		title: "Joe",
    		calc: function() {
                return 2 + 4;
            }
    	}
    	
    	var template = document.getElementById("meuPrimeiroTemplate").innerHTML;
    	const output = Mustache.render(template , view);
    	$("[data-meuPrimeiroTemplate]").append(output);
    }
   
});

