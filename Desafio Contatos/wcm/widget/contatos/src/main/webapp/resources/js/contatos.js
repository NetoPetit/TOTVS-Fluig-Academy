var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	this.listaContatos();
    },
  
    //BIND de eventos
    bindings: {
        local: {

        },
        global: {
        	
        }
    },
 
    listaContatos: function() {
    	
    	const view = {
    			contatos: [
    			           	{
    			           		"nome": "José",
    			           		"email": "jose@hotmail",
    			           		"telefone": "30180203",
    			           		"temNovoTelefone": true,
    			           		"telefoneAntigo": "32033443",
    			           		"telefoneNovo": "23456789",
    			           		"estaAtivo": true,
    			           		"corNome": ""
    			           	},
    			           	{
    			           		"nome": "Maria",
    			           		"email": "maria@hotmail",
    			           		"telefone": "91547824",
    			           		"temNovoTelefone": false,
    			           		"telefoneAntigo": "91333634",
    			           		"telefoneNovo": "96845686",
    			           		"estaAtivo": true,
    			           		"corNome": ""
    			           	},
    			           	{
    			           		"nome": "Miguel",
    			           		"email": "miguel@hotmail",
    			           		"telefone": "30181014",
    			           		"temNovoTelefone": true,
    			           		"telefoneAntigo": "36203738",
    			           		"telefoneNovo": "98764321",
    			           		"estaAtivo": false,
    			           		"corNome": ""
    			           	}
    			           ]
    		}
    	
    	$(view.contatos).each(function(index, contato){
    		if(contato.estaAtivo == true){
    			contato.corNome = "sucssess";
    		}else{
    			contato.corNome = "primary";
    		}
    	});
    	
    	var template = document.getElementById("contatosTemplate").innerHTML;
    	const output = Mustache.render(template , view);
    	$("[data-contatosTemplate]").append(output);
    			
    }
    

});

