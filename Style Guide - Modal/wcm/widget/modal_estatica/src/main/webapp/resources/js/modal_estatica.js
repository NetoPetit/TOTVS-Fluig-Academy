var MyWidget = SuperWidget.extend({
    //variáveis da widget
    	myModal: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'modalEstatico': ['click_abrirModalEstatico']
        },
        global: {
        	'salvar-dados': ['click_salvarDados']
        }
    },
 
    salvarDados: function() {
    	console.log("Disparou evento para salvar os dados");
    	this.myModal.remove();
    },
    
    abrirModalEstatico: function() {
    	this.myModal = FLUIGC.modal({
    	    title: 'Title',
    	    content: '<h1>Modal Content</h1>',
    	    id: 'fluig-modal',
    	    actions: [{
    	        'label': 'Save',
    	        'bind': 'data-salvar-dados',
    	        'classType': 'btn-info'
    	    },{
    	        'label': 'Close',
    	        'autoClose': true
    	    }]
    	}, function(err, data) {
    	    if(err) {
    	        // do error handling
    	    } else {
    	        // do something with data
    	    }
    	});
    	
    	$("#fluig-modal").on('hide.bs.modal', function() {
    		console.log("Disparou o evento hide.bs.modal");
    	})
    
    }

});

