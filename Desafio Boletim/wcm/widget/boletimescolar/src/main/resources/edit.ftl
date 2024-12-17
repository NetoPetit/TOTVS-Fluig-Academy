<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance({'prop1' : ' valor 1' , 'modo' : 'estou no edit'})">
	
	<div class="panel panel-primary">
		<div class="panel-heading">
       		<h3 class="panel-title">
       			<i class="flaticon flaticon-build icon-lg" aria-hidden="true"></i>Configurações da widget Boletim Escolar
       		</h3>
  		</div>
  		
  		<div class="panel-body">
    		
   			<div class="form-group">
				<label for="colorpicker_mediaInferior_${instanceId}">Valor da Média Inferior</label>
				<input class="form-control" id="colorpicker_mediaInferior_${instanceId}" type="text" name="colorpicker_mediaInferior_${instanceId}" value="${mediaInferior ! ''}" />
			</div>
			<div class="form-group">
				<label for="colorpicker_mediaSuperior_${instanceId}">Valor da Média Superior</label>
				<input class="form-control" id="colorpicker_mediaSuperior_${instanceId}" type="text" name="colorpicker_mediaSuperior_${instanceId}" value="${mediaSuperior ! ''}" />
			</div>
			
		</div>
		
		<button type="button" class="btn btn-info" data-salvarDados>Salvar dados</button>
	
	</div>
	
</div>

