function validateForm(form){
	
	var msg = "";
	
	if(form.getValue("nome") == "") {
		msg += "Campo Nome não foi preenchido.";
	}
	if(form.getValue("email") == "") {
		msg += "Campo Email não foi preenchido.";
	}
	if(form.getValue("telefone") == "") {
		msg += "Campo Telefone não foi preenchido.";
	}
	if(form.getValue("documentoIdentidade") == "") {
		msg += "Campo Documento de Identidade não foi preenchido.";
	}
	if(form.getValue("dataNascimento") == "") {
		msg += "Campo Data de Nascimento não foi preenchido.";
	}
	if(form.getValue("tipoPonto") == "") {
		msg += "Campo Tipo do Ponto não foi selecionado.";
	}
	if(form.getValue("domingo") != "on" && form.getValue("segunda") != "on" && 
		form.getValue("terca") != "on" && form.getValue("quarta") != "on" &&
		form.getValue("quinta") != "on" && form.getValue("sexta") != "on" &&
		form.getValue("sabado") != "on") {
		msg += "Campo Dias de Funcionamento não foi informado.";
	}
	
	if(form.getValue("cep") == "") {
		msg += "Campo CEP não foi preenchido.";
	}
	if(form.getValue("logradouro") == "") {
		msg += "Campo Logradouro não foi preenchido.";
	}
	if(form.getValue("numero") == "") {
		msg += "Campo Numero não foi preenchido.";
	}
	if(form.getValue("bairro") == "") {
		msg += "Campo Bairro não foi preenchido.";
	}
	if(form.getValue("cidade") == "") {
		msg += "Campo Cidade não foi preenchido.";
	}
	if(form.getValue("estado") == "") {
		msg += "Campo Estado não foi preenchido.";
	}
	
	var responsaveis = form.getChildrenIndexes("responsaveisTabela");
	
	if(responsaveis.length == 0) {
		msg += "Campo Responsavel não foi informado.";
	}
	if(form.getValue("valor") == "") {
		msg += "Campo Valor não foi preenchido.";
	}
	if(msg != ""){
		throw msg;
	}
	
}