function validateForm(form){
	
	var msg = "";
	
	if(form.getValue("nome") == "") {
		msg += i18n.translate("validateNome");
	}
	if(form.getValue("email") == "") {
		msg += i18n.translate("validateEmail");
	}
	if(form.getValue("telefone") == "") {
		msg += i18n.translate("validateTelefone");
	}
	if(form.getValue("documentoIdentidade") == "") {
		msg += i18n.translate("validateDocumentoIdentidade");
	}
	if(form.getValue("dataNascimento") == "") {
		msg += i18n.translate("validateDataNascimento");
	}
	if(form.getValue("tipoPonto") == "") {
		msg += i18n.translate("validateTipoPonto");
	}
	if(form.getValue("domingo") != "on" && form.getValue("segunda") != "on" && 
		form.getValue("terca") != "on" && form.getValue("quarta") != "on" &&
		form.getValue("quinta") != "on" && form.getValue("sexta") != "on" &&
		form.getValue("sabado") != "on") {
		msg += i18n.translate("validateDiasFuncionamento");
	}
	
	if(form.getValue("cep") == "") {
		msg +=  i18n.translate("validateCep");
	}
	if(form.getValue("logradouro") == "") {
		msg +=  i18n.translate("validateLogradouro");
	}
	if(form.getValue("numero") == "") {
		msg += i18n.translate("validateNumero");
	}
	if(form.getValue("bairro") == "") {
		msg += i18n.translate("validateBairro");
	}
	if(form.getValue("cidade") == "") {
		msg += i18n.translate("validateCidade");
	}
	if(form.getValue("estado") == "") {
		msg += i18n.translate("validateEstado");
	}
	
	var responsaveis = form.getChildrenIndexes("responsaveisTabela");
	
	if(responsaveis.length == 0) {
		msg += i18n.translate("validateResponsavel");
	}
	if(form.getValue("valor") == "") {
		msg += i18n.translate("validateValor");
	}
	if(msg != ""){
		throw msg;
	}
	if(form.getValue("pais") == "") {
		msg += i18n.translate("validatePais");
	}
}