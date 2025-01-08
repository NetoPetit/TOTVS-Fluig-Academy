function intermediateconditional2() {
	
	var valorDesejado = hAPI.getCardValue("valorDesejado");

	var dataset = DatasetFactory.getDataset("DSValorDolar", null, null, null);
	
	var valorAtual = dataset.getValue(0, "valorDolar");
	
	if (valorAtual <= valorDesejado) {
		return true;
	}
	
}