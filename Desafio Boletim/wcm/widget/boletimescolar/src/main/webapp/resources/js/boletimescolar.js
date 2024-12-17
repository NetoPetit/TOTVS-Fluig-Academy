var MyWidget = SuperWidget.extend({
    //variáveis da widget
   prop1: null,
   modo: null,
   mediaInferior: null,
   mediaSuperior: null,

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
        	'salvarDados': ['click_salvarDadosInferiorSuperior'],
        	'verificarInferiorSuperior': ['click_pintarCampoInferiorSuperior']
        },
        global: {
        	
        }
    },
 
   //funções
    
    pintarCampoInferiorSuperior: function() {
    	
    	var nota1 = parseInt($("#nota1_"+this.instanceId).val());
    	var nota2 = parseInt($("#nota2_"+this.instanceId).val());
    	var nota3 = parseInt($("#nota3_"+this.instanceId).val());
    	
    	var media = (nota1 + nota2 + nota3) / 3;
    	
    	console.log("A media é " + media);
    	
    	/*PAREI AQUI, TENTANDO INSERIR NO CAMPO DA MEDIA O VALOR DA MEDIA
    	var mediaBorder = $("#media_"+this.instanceId).value = media;
    	var mediaText = $("#media_"+this.instanceId, media);
    	*/
    	
    	if (media < 7) {
    		console.log("A média " + media + " é inferior");
    		$("#media_" + this.instanceId).css({
    			"color" : this.mediaInferior,
    			"border-color" : this.mediaInferior
    		})
    		
    	}else {
    		console.log("A média"  + media +  "é superior");
    		$("#media_" + this.instanceId).css({
    			"color" : this.mediaSuperior,
    			"border-color" : this.mediaSuperior
    		})
    		
    	}
    	
    },
    
    salvarDadosInferiorSuperior: function() {
    	var hexInferior = $("#colorpicker_mediaInferior_"+this.instanceId).val();
    	var hexSuperior = $("#colorpicker_mediaSuperior_"+this.instanceId).val();
    	
    	var preferences = {
    		mediaInferior: hexInferior,
    		mediaSuperior: hexSuperior
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
    		var myColorPickerMediaInferior = FLUIGC.colorpicker('#colorpicker_mediaInferior_'+this.instanceId, settings);
    		var myColorPickerMediaSuperior = FLUIGC.colorpicker('#colorpicker_mediaSuperior_'+this.instanceId, settings);
    },

});

