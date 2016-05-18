
var iniciaApp = function()
{
	var validarEntrada = function()
	{
		//Invalida los eventos que no corresponen a la función
		event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
	//***************__validaciones__*****************
		// 1.-Que no sean vacios
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
		
		//verificar usuario y contraseña  *********** NO HACERLO **********
		// if(usuario == "pw" && clave == "1234")
		// {
		// 	//alert("Bienvenido " +usuario);
		// 	//Dar entrada al usuario
		// 	$("#datosUsuario").hide(); //el .hide sirve para esconder
		// 	$("nav").show("slow"); // para quitar el display: none y mostrar el menú
		// }
		// else
		// {
		// 	alert("Usuario y/o contraseña incorrecta");
		// }			

		// 2.-Verificar usuario y contraseña
		var parametros="accion=validarEntrada"+
						"&usuario="+usuario+"&clave="+clave+
						"&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Validar al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response){
				if(response.respuesta){
					$("#datosUsuario").hide();
					$("nav").show("slow");
				}
				else{
					alert("Usuario/Contraseña incorrecto(s)");
					//$("txtUsuario").empty();
					document.getElementById('txtUsuario').value = "";
					document.getElementById('txtClave').value = "";
					$("#txtUsuario").focus();
					//txtContraseña = "";
				}
			},
			error: function(xhr, ajaxOptionx, thrownError){
				console.log("Algo salió mal");
			},

		});
		console.log("Se disparó el submit");
	}

	var Altas = function() {
		//Mostramos el formulario
		$("#altaUsuarios").show("slow");

	}

	var AltaUsuario = function() {

		event.preventDefault();
		//alert($("#frmAltaUsuarios").serialize());
		var datos = $("#frmAltaUsuarios").serialize();
		var parametros = "accion=guardaUsuario&"+datos+"&id="+Math.random();

		$.ajax({
			beforeSend:function(){
				console.log("Guardar Usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response) {
				if(response.respuesta) {
					alert("Usuario registrado correctamente");
				}
				else {
					alert("No se pudo guardar la información");
				}
			},
			error: function(xhr,ajax,thrownError) {
				console.log("Algo salió mal");
			}
		});
	}

	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#btnAltas").on("click",Altas);
	$("#frmAltaUsuarios").on("submit",AltaUsuario);
}

$(document).on("ready", iniciaApp);







