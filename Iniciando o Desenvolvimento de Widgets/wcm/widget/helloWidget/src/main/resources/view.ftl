<#assign parametros = "{'prop1' : ' valor 1' , 'modo' : 'estou na view' , 'par' : '${par ! ''}' , 'impar' : '${impar ! ''}'}">

<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance(${parametros})">
	<h2>${i18n.getTranslation("view.titulo")}</h2>
	<div class="panel panel-primary">
   			<div class="panel-heading">
        		<h3 class="panel-title">Hello Widget</h3>
   			</div>
    		<div class="panel-body">
    		
				<button type="button" class="btn btn-primary" data-chamarEvento1>Botão 1</button>			
				<button type="button" class="btn btn-success" data-chamarEvento2>Botão 2</button>			
				<button type="button" class="btn btn-info" data-chamarEvento3>Botão 3</button>
				
				<hr />
				
				<div class="row">
					<div class="form-group">
				        <label for="exampleInputEmail1">Email address</label>
				        <input type="email" class="form-control" id="exampleInputEmail1_${instanceId}" placeholder="Enter email">
				    </div>
				    <button type="button" class="btn btn-info" data-chamarEvento4>Enviar</button>
				</div>
				
				<hr />
				
				<p>Olá ${pageRender.getUser().fullName}</p>
				
				<hr />
				
				<div class="row">
					<p>Insira um número abaixo e clique em <b>Validar</b> para determinar se é par ou ímpar, seguindo a legenda:</p>
					<p style="color: ${par ! ''};">Cor do par</p>
					<p style="color: ${impar ! ''};">Cor do ímpar</p>
					<div class="form-group">
				        <label for="numero">Número</label>
				        <input type="text" class="form-control" id="numero_${instanceId}" placeholder="Digite um numero">
				    </div>
				    <button type="number" class="btn btn-info" data-verificarParImpar>Validar</button>
				</div>
				
   	 		</div>
	</div>
</div>

