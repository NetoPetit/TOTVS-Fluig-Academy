<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance({'prop1' : ' valor 1' , 'modo' : 'estou no edit'})">
	<h2>Estou no arquivo edit.ftl</h2>
	<div class="panel panel-primary">
   			<div class="panel-heading">
        		<h3 class="panel-title">
        			<i class="flaticon flaticon-build icon-lg" aria-hidden="true"></i>Configurações da widget Hello Widget
        		</h3>
   			</div>
    		<div class="panel-body">
    		
    			<div class="form-group">
					<label for="colorpicker_par_${instanceId}">Cor do número par</label>
					<input class="form-control" id="colorpicker_par_${instanceId}" type="text" name="colorpicker_par_${instanceId}" value="${par ! ''}" />
				</div>
				<div class="form-group">
					<label for="colorpicker_impar_${instanceId}">Cor do número ímpar</label>
					<input class="form-control" id="colorpicker_impar_${instanceId}" type="text" name="colorpicker_impar_${instanceId}" value="${impar ! ''}" />
				</div>	
   	 		</div>
   	 		
   	 		<button type="button" class="btn btn-info" data-salvarDados>Salvar dados</button>
   	 		
	</div>
</div>

