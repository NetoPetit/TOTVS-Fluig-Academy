function displayFields(form,customHTML){
	var usuario = form.getValue("WKUser");
	var nome = form.getValue("nome");
	var perfil = form.getValue("perfil");
	var linkedin = form.getValue("linkedin");
	var email = form.getValue("email");
	
	var interacao = 'Oi ' + usuario + '. O ' + nome + ' deseja trabalhar conosco!' +
	'O seu perfil é: ' + perfil + '. E você pode conferir seu currículo no Linkedin: ' +  linkedin + '.' + 
	'Você também pode entrar em contato pelo e-mail: ' + email + '.' + 
	'Obrigado!'
	
}