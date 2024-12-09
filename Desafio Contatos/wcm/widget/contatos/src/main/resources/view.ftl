<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	
	<script id="contatosTemplate" type="text/template">
		<div class="row">
		
			{{#contatos}}
			<div class="card">
				<div class="card-body">
					
					{{#estaAtivo}}
						<h3 class="card-title text-{{corNome}}">{{nome}}</h3>
						
						{{#temNovoTelefone}}
						<p class="card-text"><s>Telefone antigo: {{telefoneAntigo}}</s></p>
			            <span class="label label-info"><strong>Novo telefone: {{telefoneNovo}}</strong></span>
						{{/temNovoTelefone}}
						
						{{^temNovoTelefone}}
						<span class="label label-info"><strong>Telefone: {{telefone}}</strong></span>
						{{/temNovoTelefone}}
						
						<p class="card-text">{{email}}</p>
					{{/estaAtivo}}
					
					{{^estaAtivo}}
						<h3 class="card-title text-{{corNome}}">{{nome}}</h3>
						<p class="card-text"><s>Telefone: {{telefone}}</s></p>
						<p class="card-text">{{email}}</p>
					{{/estaAtivo}}
					
				</div>
			</div>
			{{/contatos}}
		</div>
	</script>
	
	<h2>Contatos:</h2>
	<div data-contatosTemplate></div>
	
</div>

