
var iniciaApp = function()
{
	var validarEntrada = function()
	{
		var usuario = $("#txtUsuario").val();
		var clave = $("txtContraseña").val();
		//validaciones
		//1.-Que no sean vacios
		if(usuario == "")
		{
			alert("Usuario Vacio");
			$("txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("Contraseña Vacia");
			$("txtContraseña").focus();
		}
		
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit", validarEntrada);
}

$(document).on("ready", iniciaApp);