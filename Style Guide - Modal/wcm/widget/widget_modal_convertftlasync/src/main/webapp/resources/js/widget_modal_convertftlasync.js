var MyWidget = SuperWidget.extend({
    myModal: null,
    
    init: function() {
    },
  
    bindings: {
        local: {
            'modal-convertftlasync': ['click_abrirModalConvertftlasync']
        },
        global: {
            'salvar-dados':['click_salvarDados']
        }
    },
    
    salvarDados: function(){
        console.log("Disparou o evento para salvar dados");
        this.myModal.remove();
        
    },
    
    abrirModalConvertftlasync: function(){
    	var _this = this;
    	
    	WCMAPI.convertFtlAsync('widget_reutilizavel', 'view.ftl', JSON.stringify({ 'meuParametro1' : 'Valor personalizado' }), function(data) {

    		_this.myModal = FLUIGC.modal({
                title: 'Title',
                content: data,
                id: 'fluig-modal',
                actions: [{
                    'label': 'Salvar',
                    'bind': 'data-salvar-dados',
                    'classType': 'btn-info'
                },{
                    'label': 'Close',
                    'autoClose': true
                }]
            }, function(err, data) {
                if(err) {
                } else {
                }
            });
            
            $("#fluig-modal").on('hide.bs.modal', function(){
                console.log("Disparou o evento hide.bs.modal");
            });
    	
    	});
    	
    	
        
    
    }

});