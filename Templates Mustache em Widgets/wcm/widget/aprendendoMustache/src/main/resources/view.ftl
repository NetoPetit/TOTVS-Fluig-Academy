<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	
	<script id="meuPrimeiroTemplate" type="text/template">
		<div class="row">
			<div class="col-md-3">
			{{title}} spends {{calc}}
			</div>
		</div>
	</script>
	
	<script id="pessoasTemplate" type="text/template">
		<div class="row">
			
			{{#pessoas}}
			<div class="col-md-3">
				<p>O(a) {{nome}} possui {{idade}} anos de idade.</p>
			</div>
			{{/pessoas}}
			
		</div>
	</script>
	
	<script id="produtosTemplate" type="text/template">
		
		<div class="row">
			
			{{#produtos}}
			<div class="col-md-4">
		        <div class="card">
		            <img class="card-img-top" src={{icone}} alt="Card image cap">
		            <div class="card-body">
		                <h3 class="card-title">{{nome}}</h3>
		                <p class="card-text">{{descricao}}</p>
		                <a href="#" class="btn btn-primary">Ver mais</a>
		                <p class="card-text">Avaliações</p>
		                {{#avaliacao}}
		                	<p class="card-text">Avaliação feita por {{autor}}: {{conteudo}}</p>
		                {{/avaliacao}}
		                
		                {{^avaliacao}}
		                	<p class="card-text">Sem avaliações</p>
		                {{/avaliacao}}
		                
		            </div>
		        </div>
	    	</div>
	    	{{/produtos}}
	    	
		</div>
	
	</script>
	
	<h2>Exemplo 1:</h2>
	<div data-meuPrimeiroTemplate></div>
	
	<h2>Exemplo 2:</h2>
	<div data-pessoasTemplate></div>
	
	<h2>Exemplo 3:</h2>
	<div data-produtosTemplate></div>
	
	
</div>

