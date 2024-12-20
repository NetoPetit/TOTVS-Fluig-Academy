var MyWidget = SuperWidget.extend({
    myModal: null,
    
    init: function() {
    	
    },
  
    bindings: {
        local: {
            'modal-mustache': ['click_abrirModalMustache']
        },
        global: {
            'salvar-dados':['click_salvarDados']
        }
    },
    
    salvarDados: function(){
        console.log("Disparou o evento para salvar dados");
        this.myModal.remove();
        
    },
    
    abrirModalMustache: function(){
        var view = {
        		"param1": "Parametro enviado da minha widget do Mustache"
        };
        
        var content = Mustache.render($("#tpl-modal").html(), view);
    	
    	this.myModal = FLUIGC.modal({
            title: 'Title',
            content: content,
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
        
    }
    
});
