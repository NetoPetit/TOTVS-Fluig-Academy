var MyWidget = SuperWidget.extend({
    //variáveis da widget
   
	prop1: null,
	modo: null,
	par: null,
	impar: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	
    	if(this.isEditMode == true) {
    		console.log("Estou no modo de edição");
    		this.iniciarColorPicker();
    	}else {
    		console.log("Estou no modo de visualisação")
    	}
    	
    	
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'chamarEvento1': ['click_minhaFuncao1'],
    		'chamarEvento2': ['dblclick_minhaFuncao2'],
    		'chamarEvento3': ['mouseover_minhaFuncao3'],
    		'chamarEvento4': ['click_minhaFuncao4'],
    		'salvarDados': ['click_salvarDadosParImpar'],
    		'verificarParImpar': ['click_pintarCampoParImpar']
        },
        
        global: {
        	
        }
    },
    
    pintarCampoParImpar: function() {
    	var numero = $("#numero_"+this.instanceId).val();
    	
    	if (numero % 2 == 0) {
    		console.log("O número " + numero + " é par");
    		$("#numero_" + this.instanceId).css({
    			"color" : this.par,
    			"border-color" : this.par
    		})
    		
    	}else {
    		console.log("O número " + numero + " é ímpar");
    		$("#numero_" + this.instanceId).css({
    			"color" : this.impar,
    			"border-color" : this.impar
    		})
    		
    	}
    },
    
    salvarDadosParImpar: function() {
    	var hexPar = $("#colorpicker_par_"+this.instanceId).val();
    	var hexImpar = $("#colorpicker_impar_"+this.instanceId).val();
    	
    	var preferences = {
			par: hexPar,
			impar: hexImpar
		};

		WCMSpaceAPI.PageService.UPDATEPREFERENCES({
			async : true,
			success : function(data) {
				console.log("Dados salvos com sucesso!");
				console.log(data);
				FLUIGC.toast({
					title : 'Sucesso: ',
					message : 'Os dados foram salvos!',
					type : 'success'
				});
			},
			fail : function(xhr, message, errorData) {
				console.log("Erro ao salvar dados!");
				console.log(xhr, message, errorData);
				FLUIGC.toast({
					title : 'Erro: ',
					message : 'Não foi possível salvar os dados!',
					type : 'danger'
				});
			}
		}, this.instanceId, preferences);
    },
    
    iniciarColorPicker: function() {
    	var settings = {
    		    changeDelay: 200,
    		    control: 'wheel',
    		    inline: false,
    		    letterCase: 'lowercase',
    		    opacity: true,
    		    position: 'bottom left',
    		    customColorNames: {
    		        'mycustomcolor': '#123456'
    		    }
    		} 
    		var myColorPickerPar = FLUIGC.colorpicker('#colorpicker_par_'+this.instanceId, settings);
	    	var myColorPickerImpar = FLUIGC.colorpicker('#colorpicker_impar_'+this.instanceId, settings);
    },
    
    minhaFuncao1: function() {
    	console.log("Cliquei no botão 1");
    },
    minhaFuncao2: function() {
    	console.log("Cliquei 2x no botão 2");
    },
    minhaFuncao3: function() {
    	console.log("Passei o mouse por cima do botão 3");
    },
    minhaFuncao4: function() {
    	var email = $("#exampleInputEmail1_"+this.instanceId).val();
    	console.log("Valor do email: " + email);
    }

});

