<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	<div class="panel panel-primary">
    	
    	<div class="panel-heading">
        	<h3 class="panel-title">${i18n.getTranslation("view.titulo")}</h3>
    	</div>
    	
    	<div class="panel-body">
    		<div class="row">
       	 		<form class="form-inline" role="form">
					<div class="form-group">
				        <label for="exampleInputCalculadora">${i18n.getTranslation("view.v1")}</label>
				        <input type="number" class="form-control" id="exampleInputCalculadora1_${instanceId}" placeholder="Insira um valor">
				    </div>
				    <div class="form-group">
				        <label for="exampleInputCalculadora">${i18n.getTranslation("view.v2")}</label>
				        <input type="number" class="form-control" id="exampleInputCalculadora2_${instanceId}" placeholder="Insira um valor">
				    </div>
				</form>
				<br />
				    <div id="buttons">
				    	<button type="button" class="btn btn-primary" data-somar>${i18n.getTranslation("view.add")}</button>	
				    	<button type="button" class="btn btn-primary" data-subtrair>${i18n.getTranslation("view.sub")}</button>			
				    	<button type="button" class="btn btn-primary" data-multiplicar>${i18n.getTranslation("view.mult")}</button>			
				    	<button type="button" class="btn btn-primary" data-dividir>${i18n.getTranslation("view.div")}</button>			
				    </div>
				    <br />
				    <div class="form-group">
				        <label for="exampleInputCalculadora" id="resultado">${i18n.getTranslation("view.result")}</label>
				        <input type="text" class="form-control" id="exampleInputCalculadora3_${instanceId}" placeholder="Resultado" readonly>
					</div>
			</div>
   		</div>
	
	</div>
</div>

