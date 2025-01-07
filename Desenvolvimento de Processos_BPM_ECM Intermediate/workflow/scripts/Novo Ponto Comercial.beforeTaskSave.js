function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
	var anexos = hAPI.listAttachments();
	var temAnexos = false;
	
	for (i = 0; i < anexos.size(); i++) {
		
		var anexoAtual = anexos.get(i);
		
		if (anexoAtual.getDocumentDescription() == "Proposta Comercial.pdf") {
			temAnexos = true;
		}
	}
	
	if (!temAnexos) {
		
		throw ("Proposta Comercial não foi anexada.");
		
	}
	
}