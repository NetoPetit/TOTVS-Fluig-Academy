var MyWidget = SuperWidget.extend({

    myModal: null,

    init: function() {

    },

     bindings: {

        local: {

            'modal-contentWidget': ['click_abrirModalContentWidget']

        },

        global: {

            'salvar-dados':['click_salvarDados']

        }

    },

    salvarDados: function(){

        console.log("Disparou o evento para salvar dados");

        this.myModal.remove();

       

    },

    abrirModalContentWidget: function(){

        this.myModal = FLUIGC.modal({

            title: 'Title',

            content: {
            	'widgetCode' : 'widget_reutilizavel',
            	'ftl' : 'view.ftl',
            	'data' : {
            		'meuParametro1' : 'Parametro enviado da widget modal_content'
            	}
            },

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