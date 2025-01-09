function displayFields(form,customHTML){
	var usuario = form.getValue("WKUser");
	var nome = form.getValue("nome");
	var perfil = form.getValue("perfil");
	var linkedin = form.getValue("linkedin");
	var email = form.getValue("email");
	
	var interacao = '<h2>Oi, <b>' + usuario + '</b>. O <b>' + nome + '</b> deseja trabalhar conosco!</h2><br>' +
	'<h3>O perfil dele é: <b>' + perfil + '</b>. E você pode conferir o currículo dele no Linkedin: <b>' +  linkedin + '</b>.<br>' + 
	'Você também pode entrar em contato com ele pelo e-mail: <b>' + email + '</	b>.<br>' + 
	'Obrigado!</h3>';
	
	customHTML.append('<script>$("#mensagemInteracao").append("'+interacao+'")</script>');
	customHTML.append('<script>$("#mensagemInteracao").show();$("#formPrincipal").hide();</script>');
	
}