var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	this.exemploMustache1();
    	this.exemploMustache2();
    	this.exemploMustache3();

    },
  
    //BIND de eventos
    bindings: {
        
    	local: {
            'execute': ['click_executeAction']
        },
        global: {
        	
        }
    
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
    },
    exemploMustache2: function() {
    	
    	const view = {
    			pessoas: [
    			          	{"nome": "Luis", "idade": "19"},
    			          	{"nome": "Ana", "idade": "20"},
    			          	{"nome": "João", "idade": "21"}
    			          ]
    	};
    	
    	var template = document.getElementById("pessoasTemplate").innerHTML;
    	const output = Mustache.render(template , view);
    	$("[data-pessoasTemplate]").append(output);
    },
	exemploMustache3: function() {
		
		const view = {
				produtos: [
				           	{
				           		"nome": "Produto A",
				           		"descricao": "aqui vai a descricao do produto A",
				           		"preco": "R$ 112,00",
				           		"icone": "/aprendendoMustache/resources/images/clientimg.png",
				           		"avaliacao": [
				           		              	{"autor": "Cliente 1", "conteudo": "Descricao da avaliacao 1"},
				           		              	{"autor": "Cliente 2", "conteudo": "Descricao da avaliacao 2"},
				           		              	{"autor": "Cliente 3", "conteudo": "Descricao da avaliacao 3"},
				           		              	{"autor": "Cliente 4", "conteudo": "Descricao da avaliacao 4"}
				           		              ]
				           	},
				           	{
				           		"nome": "Produto B",
				           		"descricao": "aqui vai a descricao do produto B",
				           		"preco": "R$ 150,00",
				           		"icone": "/aprendendoMustache/resources/images/clientimg.png",
				           		"avaliacao": [ ]
				           	}
				           ]
		
		}
		
		var template = document.getElementById("produtosTemplate").innerHTML;
    	const output = Mustache.render(template , view);
    	$("[data-produtosTemplate]").append(output);
		
	}

   
});

