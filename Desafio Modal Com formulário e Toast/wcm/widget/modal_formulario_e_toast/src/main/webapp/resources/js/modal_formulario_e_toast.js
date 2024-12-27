var MyWidget = SuperWidget.extend({
    //variáveis da widget
    

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});

