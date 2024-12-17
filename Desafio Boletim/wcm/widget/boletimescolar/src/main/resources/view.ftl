<#assign parametros = "{'prop1' : ' valor 1' , 'modo' : 'estou na view' , 'mediaInferior' : '${mediaInferior ! ''}' , 'mediaSuperior' : '${mediaSuperior ! ''}'}">


<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance(${parametros})">
	
	<div class="row">
		<div class="panel panel-primary">
			
			<div class="panel-heading">
	        	<h3 class="panel-title"> "Boletim Escolar - Bem-vindo"</h3>
	    	</div>
	    	
	    	
	    	
	    	<h2>Matéria</h2>
	    	
	    	<table class="table">
	    		<tr>
		    		<td>
			    		<form role="form">
				    		<div class="form-group">
				        		<label for="nota1">Nota 1</label>
				        		<input type="text" class="form-control" id="nota1_${instanceId}" placeholder="Primeira nota">
				    		</div>
				    	</form>
		    		</td>
	    		</tr>
	    		<tr>
		    		<td>
			    		<form role="form">
				    		<div class="form-group">
				        		<label for="nota2">Nota 2</label>
				        		<input type="text" class="form-control" id="nota2_${instanceId}" placeholder="Segunda nota">
				    		</div>
				    	</form>
		    		</td>
	    		</tr>
	    		<tr>
		    		<td>
			    		<form role="form">
				    		<div class="form-group">
				        		<label for="nota3">Nota 3</label>
				        		<input type="text" class="form-control" id="nota3_${instanceId}" placeholder="Terceira nota">
				    		</div>
				    	</form>
		    		</td>
	    		</tr>
	    	</table>
	    	
	    	<button type="button" class="btn btn-success" data-verificarInferiorSuperior>Calcular média</button>
	    	
	    	<table class="table>"
	    		<tr>
		    		<td>
			    		<form role="form">
				    		<div class="form-group">
				        		<label for="media">Média</label>
				        		<input type="text" class="form-control" id="media_${instanceId}" placeholder="Media" readonly>
				    		</div>
				    	</form>
		    		</td>
	    		</tr>
	    	</table>
	    	
		</div>
	</div>
	
</div>

