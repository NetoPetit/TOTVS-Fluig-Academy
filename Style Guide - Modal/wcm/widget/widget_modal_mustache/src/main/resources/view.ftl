<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
   
    <div class="panel panel-success">
        <div class="panel-heading">
            <h3 class="panel-title">Modal com dados vindos do Mustache</h3>
        </div>
        <div class="panel-body">
           <p>Este é um exemplo de modal com dados provenientes do Mustache.</p>
            <button class="btn btn-default btn-lg" data-modal-mustache>
                Abrir
            </button>
        </div>
    </div>
   
   
    <script type="text/template" id="tpl-modal">
        <h4>Este é o meu conteúdo criado no Mustache</h4>
        <p>Aqui abaixo eu vou colocar um texto qualquer apenas para nós testarmos</p>
        <p>A seguir é o parâmetro enviado através do meu js --->>> {{param1}}</p>
    </script>
</div>
