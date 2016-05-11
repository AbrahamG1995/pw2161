
var iniciaApp = function()
{
	var validarEntrada = function()
	{
		//Invalida los eventos que no corresponen a la función
		event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
	//***************__validaciones__*****************
		//1.-Que no sean vacios
		if(usuario == "")
		{
			alert("Usuario Vacio");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("Contraseña Vacia");
			$("#txtContraseña").focus();
		}
		
		//verificar usuario y contraseña
		if(usuario == "pw" && clave == "1234")
		{
			//alert("Bienvenido " +usuario);
			//Dar entrada al usuario
			$("#datosUsuario").hide(); //el .hide sirve para esconder
			$("nav").show("slow"); // para quitar el display: none y mostrar el menú
		}
		else
		{
			alert("Usuario y/o contraseña incorrecta");
		}			

		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit", validarEntrada);
}

$(document).on("ready", iniciaApp);